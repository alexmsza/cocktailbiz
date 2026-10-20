import { MercadoPagoConfig, Payment } from "mercadopago";

// Inicializa o cliente apenas se o ACCESS_TOKEN estiver presente no ambiente
export const mpClient = process.env.MERCADOPAGO_ACCESS_TOKEN
  ? new MercadoPagoConfig({
      accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
      options: { timeout: 10000 },
    })
  : null;

export const paymentClient = mpClient ? new Payment(mpClient) : null;
