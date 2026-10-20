import { NextResponse } from "next/server";
import { paymentClient } from "@/lib/mercadopago";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, description, payerEmail, payerFirstName, payerCpf, externalReference } = body;

    // Se o SDK do Mercado Pago estiver configurado com credenciais válidas
    if (paymentClient && process.env.MERCADOPAGO_ACCESS_TOKEN && !process.env.MERCADOPAGO_ACCESS_TOKEN.startsWith("TEST-xxxx")) {
      const paymentResponse = await paymentClient.create({
        body: {
          transaction_amount: Number(amount) || 10.0,
          description: description || "Sinal de Reserva - CocktailBiz OS",
          payment_method_id: "pix",
          external_reference: externalReference || `order_${Date.now()}`,
          payer: {
            email: payerEmail || "cliente@exemplo.com",
            first_name: payerFirstName || "Cliente",
            identification: payerCpf
              ? {
                  type: "CPF",
                  number: String(payerCpf).replace(/\D/g, ""),
                }
              : undefined,
          },
        },
      });

      const pointOfInteraction = paymentResponse.point_of_interaction;
      const transactionData = pointOfInteraction?.transaction_data;

      return NextResponse.json({
        success: true,
        source: "mercadopago_live",
        paymentId: paymentResponse.id,
        status: paymentResponse.status,
        qrCodeImage: transactionData?.qr_code_base64,
        pixPayload: transactionData?.qr_code,
        ticketUrl: transactionData?.ticket_url,
      });
    }

    // Modo preparado / Mock estruturado para testes enquanto as credenciais não forem inseridas
    return NextResponse.json({
      success: true,
      source: "mercadopago_ready_for_credentials",
      message: "Estrutura do Mercado Pago preparada. Insira seu MERCADOPAGO_ACCESS_TOKEN no .env para transacionar em produção.",
      paymentId: "mp_mock_payment_123456",
      status: "pending",
      qrCodeImage: null,
      pixPayload: "00020126580014BR.GOV.BCB.PIX0136cocktailbiz-mock-pix-ready520400005303986540510.005802BR5925CocktailBiz Pagamentos6009SAO PAULO62070503***6304ABCD",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Falha na comunicação com o provedor de pagamento.",
        error: process.env.NODE_ENV === "development" ? error?.message : undefined,
      },
      { status: 500 }
    );
  }
}
