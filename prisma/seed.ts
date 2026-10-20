import { PrismaClient, Role, EntryType, EventStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando seed do CocktailBiz OS...");

  // 1. Criar Organização
  const org = await prisma.organization.upsert({
    where: { id: "seed-org-dose-01" },
    update: {},
    create: {
      id: "seed-org-dose-01",
      name: "Bar Lab Dose de Sucesso",
      document: "12.345.678/0001-90",
      plan: "PRO_ENTERPRISE",
    },
  });

  // 2. Criar Usuário Gestor/Bartender
  const user = await prisma.user.upsert({
    where: { email: "alex@cocktailbiz.com.br" },
    update: {},
    create: {
      email: "alex@cocktailbiz.com.br",
      name: "Alex Bartender Gestor",
      phone: "+55 31 99999-8888",
      role: Role.MANAGER,
      organizationId: org.id,
    },
  });

  // 3. Fornecedores
  const supplierBev = await prisma.supplier.create({
    data: {
      organizationId: org.id,
      name: "Distribuidora Central de Bebidas",
      contactName: "Marcos Vendas",
      phone: "(11) 98765-4321",
      email: "pedidos@centralbebidas.com.br",
      deliveryDays: 2,
      paymentTerms: "Boleto 28 dias",
    },
  });

  const supplierHorti = await prisma.supplier.create({
    data: {
      organizationId: org.id,
      name: "Hortifruti Orgânicos São Bento",
      contactName: "Dona Maria",
      phone: "(11) 91234-5678",
      email: "contato@saobentofruit.com.br",
      deliveryDays: 1,
      paymentTerms: "Pix na entrega",
    },
  });

  // 4. Insumos da Caipiroska Canônica
  const vodka = await prisma.ingredient.create({
    data: {
      organizationId: org.id,
      name: "Vodka Standard (750ml)",
      category: "Destilado",
      unit: "ml",
      packageSize: 750,
      costPrice: 42.0,
      lossPercentage: 0.0,
      costPerUnit: 42.0 / 750, // R$ 0,056/ml
      supplierId: supplierBev.id,
    },
  });

  const limao = await prisma.ingredient.create({
    data: {
      organizationId: org.id,
      name: "Limão Tahiti Fresco",
      category: "Fruta",
      unit: "unid",
      packageSize: 10,
      costPrice: 12.0,
      lossPercentage: 10.0, // 10% perda de casca/pontas
      costPerUnit: 1.2, // R$ 1,20 por limão
      supplierId: supplierHorti.id,
    },
  });

  const acucar = await prisma.ingredient.create({
    data: {
      organizationId: org.id,
      name: "Açúcar Refinado Especial (1kg)",
      category: "Insumo Seco",
      unit: "g",
      packageSize: 1000,
      costPrice: 5.0,
      lossPercentage: 2.0,
      costPerUnit: 5.0 / 1000, // R$ 0,005/g
      supplierId: supplierBev.id,
    },
  });

  const gelo = await prisma.ingredient.create({
    data: {
      organizationId: org.id,
      name: "Gelo Filtrado em Cubos Sólidos (5kg)",
      category: "Gelo",
      unit: "g",
      packageSize: 5000,
      costPrice: 12.0,
      lossPercentage: 5.0,
      costPerUnit: 12.0 / 5000, // R$ 0,0024/g
      supplierId: supplierBev.id,
    },
  });

  // 5. Coquetel com Ficha Técnica Completa
  const caipiroska = await prisma.cocktail.create({
    data: {
      organizationId: org.id,
      name: "Caipiroska Tradicional de Limão",
      category: "Clássico Nacional",
      glassware: "Copo Old Fashioned (300ml)",
      iceType: "Cubos sólidos de alta densidade",
      garnish: "Rodela fina de limão no topo",
      prepMethod: "Macerado e batido na coqueteleira",
      prepTimeSec: 90,
      notes: "Macerar suavemente o limão sem esmagar a parte branca para evitar amargor.",
      targetMargin: 75.0,
      sellingPrice: 22.0,
      ingredients: {
        create: [
          { ingredientId: vodka.id, quantity: 50 },     // 50ml x 0.056 = R$ 2.80
          { ingredientId: limao.id, quantity: 1 },      // 1 unid = R$ 1.20
          { ingredientId: acucar.id, quantity: 15 },    // 15g x 0.005 = R$ 0.075
          { ingredientId: gelo.id, quantity: 200 },     // 200g x 0.0024 = R$ 0.48
        ],
      },
    },
  });

  // 6. Livro Caixa
  await prisma.cashbookEntry.createMany({
    data: [
      {
        organizationId: org.id,
        type: EntryType.INCOME,
        category: "Venda Balcão",
        description: "Faturamento da Noite de Sexta-Feira",
        amount: 2850.0,
        paymentMethod: "CARTAO",
        isReconciled: true,
      },
      {
        organizationId: org.id,
        type: EntryType.INCOME,
        category: "Evento Corporativo",
        description: "Sinal 50% Cocktail Experience Tech",
        amount: 3200.0,
        paymentMethod: "PIX",
        isReconciled: true,
      },
      {
        organizationId: org.id,
        type: EntryType.EXPENSE,
        category: "Insumos",
        description: "Compra reposição destilados e hortifruti",
        amount: 980.5,
        paymentMethod: "BOLETO",
        isReconciled: true,
      },
      {
        organizationId: org.id,
        type: EntryType.EXPENSE,
        category: "Fixos",
        description: "Energia elétrica do bar (refrigeração gelo)",
        amount: 450.0,
        paymentMethod: "DEBITO",
        isReconciled: true,
      },
    ],
  });

  // 7. Evento
  await prisma.eventOrder.create({
    data: {
      organizationId: org.id,
      clientName: "Ana & Rodrigo Casamento",
      clientPhone: "(11) 97777-6655",
      eventDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Em 15 dias
      guestCount: 150,
      durationHours: 6,
      drinksPlanned: 450,
      totalBudget: 6800.0,
      depositPaid: 3400.0,
      status: EventStatus.CONFIRMED,
      pixKey: "eventos@cocktailbiz.com.br",
      notes: "Bar montado em ilha central com menu personalizado de 4 coquetéis autorais.",
    },
  });

  console.log("Seed concluído com sucesso!");
  console.log(`Organização: ${org.name} | Usuário: ${user.email} | Drink: ${caipiroska.name}`);
}

main()
  .catch((e) => {
    console.error("Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
