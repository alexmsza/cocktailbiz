import { NextResponse } from "next/server";
import { paymentClient } from "@/lib/mercadopago";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);
    const topic = url.searchParams.get("topic") || url.searchParams.get("type");
    const id = url.searchParams.get("id") || url.searchParams.get("data.id");

    const body = await req.json().catch(() => ({}));
    const paymentId = id || body?.data?.id || body?.id;

    if (!paymentId) {
      return NextResponse.json({ received: true, note: "Sem paymentId" });
    }

    // Se temos credenciais e paymentClient ativo, consulta o status real
    if (paymentClient && process.env.MERCADOPAGO_ACCESS_TOKEN && !process.env.MERCADOPAGO_ACCESS_TOKEN.startsWith("TEST-xxxx")) {
      const paymentInfo = await paymentClient.get({ id: String(paymentId) });

      if (paymentInfo && paymentInfo.status === "approved") {
        const externalRef = paymentInfo.external_reference;

        if (externalRef && process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("localhost:5432")) {
          // Atualiza o evento caso o ID corresponda
          await prisma.eventOrder.updateMany({
            where: { id: externalRef },
            data: {
              status: "CONFIRMED",
              depositPaid: paymentInfo.transaction_amount || 0,
            },
          });

          // Registra entrada no Livro Caixa
          await prisma.cashbookEntry.create({
            data: {
              organizationId: "seed-org-dose-01",
              type: "INCOME",
              category: "Evento Corporativo",
              description: `Sinal Recebido Pix Mercado Pago #${paymentId}`,
              amount: paymentInfo.transaction_amount || 0,
              paymentMethod: "PIX",
              isReconciled: true,
            },
          });
        }
      }
    }

    return NextResponse.json({ received: true, paymentId });
  } catch (error) {
    // Retorna 200 para evitar que o gateway continue fazendo retries desnecessários
    return NextResponse.json({ received: true, warning: "Processado com resiliência" });
  }
}
