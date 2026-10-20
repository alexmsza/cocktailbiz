import { CocktailRecipe, CashbookRecord, EventProposal, SupplierItem } from '@/types';

export const initialRecipes: CocktailRecipe[] = [
  {
    id: 'rec-01',
    name: 'Caipiroska de Morango (Canônica do Curso)',
    category: 'Tropical',
    ingredients: [
      {
        name: 'Canudo Biodegradável',
        marketPrice: 11.00,
        packageSize: 100,
        packageUnit: 'un',
        portionUsed: 1,
        portionUnit: 'un',
        yieldCount: 100,
        unitCost: 0.11
      },
      {
        name: 'Guardanapo Sachê',
        marketPrice: 2.00,
        packageSize: 50,
        packageUnit: 'un',
        portionUsed: 1,
        portionUnit: 'un',
        yieldCount: 50,
        unitCost: 0.04
      },
      {
        name: 'Morango Fresco Selecionado',
        marketPrice: 8.00,
        packageSize: 250,
        packageUnit: 'g',
        portionUsed: 50,
        portionUnit: 'g',
        yieldCount: 5,
        unitCost: 1.60
      },
      {
        name: 'Açúcar Refinado',
        marketPrice: 4.00,
        packageSize: 1000,
        packageUnit: 'g',
        portionUsed: 13,
        portionUnit: 'g',
        yieldCount: 76.9,
        unitCost: 0.05
      },
      {
        name: 'Gelo Filtrado Cubo',
        marketPrice: 15.00,
        packageSize: 10000,
        packageUnit: 'g',
        portionUsed: 200,
        portionUnit: 'g',
        yieldCount: 50,
        unitCost: 0.30
      },
      {
        name: 'Vodka Standard Destilada',
        marketPrice: 50.00,
        packageSize: 998,
        packageUnit: 'ml',
        portionUsed: 50,
        portionUnit: 'ml',
        yieldCount: 19.9,
        unitCost: 2.63
      }
    ],
    totalCost: 4.73,
    targetMargin: 75,
    suggestedPrice: 22.00,
    instructions: [
      'Em uma coqueteleira, macere suavemente 50g de morangos frescos com 13g de açúcar.',
      'Adicione 200g de gelo filtrado em cubos.',
      'Despeje 50ml da vodka standard.',
      'Bata vigorosamente por 10 a 12 segundos até a coqueteleira gelar por fora.',
      'Transfira todo o conteúdo para o copo old fashioned, finalize com 1 canudo biodegradável e sirva sobre 1 guardanapo.'
    ]
  },
  {
    id: 'rec-02',
    name: 'Gin Tônica Botânica Artesanal',
    category: 'Clássico',
    ingredients: [
      {
        name: 'Gin London Dry',
        marketPrice: 65.00,
        packageSize: 750,
        packageUnit: 'ml',
        portionUsed: 50,
        portionUnit: 'ml',
        yieldCount: 15,
        unitCost: 4.33
      },
      {
        name: 'Água Tônica Premium',
        marketPrice: 4.50,
        packageSize: 1,
        packageUnit: 'un',
        portionUsed: 1,
        portionUnit: 'un',
        yieldCount: 1,
        unitCost: 4.50
      },
      {
        name: 'Zimbro e Especiarias',
        marketPrice: 12.00,
        packageSize: 100,
        packageUnit: 'g',
        portionUsed: 3,
        portionUnit: 'g',
        yieldCount: 33.3,
        unitCost: 0.36
      },
      {
        name: 'Gelo Translúcido',
        marketPrice: 15.00,
        packageSize: 10000,
        packageUnit: 'g',
        portionUsed: 220,
        portionUnit: 'g',
        yieldCount: 45.4,
        unitCost: 0.33
      },
      {
        name: 'Rodela de Limão Siciliano',
        marketPrice: 10.00,
        packageSize: 1000,
        packageUnit: 'g',
        portionUsed: 25,
        portionUnit: 'g',
        yieldCount: 40,
        unitCost: 0.25
      }
    ],
    totalCost: 9.77,
    targetMargin: 72,
    suggestedPrice: 35.00,
    instructions: [
      'Resfrie uma taça bojuda de gin com bastante gelo e retire o excesso de água degelada.',
      'Adicione 50ml de Gin London Dry.',
      'Incline a taça e complete lentamente com água tônica usando a colher bailarina para preservar as borbulhas.',
      'Guarneça com 1 rodela fina de limão siciliano e bagas de zimbro levemente ativadas.'
    ]
  },
  {
    id: 'rec-03',
    name: 'Moscow Mule com Espuma Artesanal de Gengibre',
    category: 'Autoral',
    ingredients: [
      {
        name: 'Vodka Premium',
        marketPrice: 70.00,
        packageSize: 1000,
        packageUnit: 'ml',
        portionUsed: 50,
        portionUnit: 'ml',
        yieldCount: 20,
        unitCost: 3.50
      },
      {
        name: 'Suco de Limão Tahiti Fresco',
        marketPrice: 6.00,
        packageSize: 1000,
        packageUnit: 'g',
        portionUsed: 20,
        portionUnit: 'ml',
        yieldCount: 50,
        unitCost: 0.12
      },
      {
        name: 'Xarope Simples de Açúcar (Artesanal)',
        marketPrice: 5.00,
        packageSize: 1000,
        packageUnit: 'ml',
        portionUsed: 20,
        portionUnit: 'ml',
        yieldCount: 50,
        unitCost: 0.10
      },
      {
        name: 'Espuma Caseira de Gengibre (Sifão)',
        marketPrice: 25.00,
        packageSize: 500,
        packageUnit: 'ml',
        portionUsed: 40,
        portionUnit: 'ml',
        yieldCount: 12.5,
        unitCost: 2.00
      },
      {
        name: 'Gelo Britado',
        marketPrice: 15.00,
        packageSize: 10000,
        packageUnit: 'g',
        portionUsed: 200,
        portionUnit: 'g',
        yieldCount: 50,
        unitCost: 0.30
      }
    ],
    totalCost: 6.02,
    targetMargin: 80,
    suggestedPrice: 32.00,
    instructions: [
      'Em uma caneca de cobre, coloque a vodka, o suco de limão e o xarope simples.',
      'Encha a caneca com gelo britado e misture com a bailarina.',
      'Complete o topo com a espuma artesanal de gengibre pressurizada no sifão.',
      'Finalize com raspas de limão tahiti e fatia desidratada.'
    ]
  }
];

export const initialCashbook: CashbookRecord[] = [
  {
    id: 'csh-01',
    date: '2026-10-18',
    type: 'IN',
    category: 'Vendas/Cachê',
    description: 'Sinal 50% Evento Casamento Marina & Lucas (120 pessoas)',
    amount: 2400.00
  },
  {
    id: 'csh-02',
    date: '2026-10-18',
    type: 'OUT',
    category: 'Bebidas',
    description: 'Compra Atacado: Vodkas e Gins para estoque mensal',
    amount: 680.00
  },
  {
    id: 'csh-03',
    date: '2026-10-19',
    type: 'OUT',
    category: 'Hortifrúti',
    description: 'Morangos, limões tahiti e siciliano no Ceasa',
    amount: 145.00
  },
  {
    id: 'csh-04',
    date: '2026-10-19',
    type: 'OUT',
    category: 'Gelo & Descartáveis',
    description: '10 sacos de gelo filtrado + canudos biodegradáveis',
    amount: 195.00
  },
  {
    id: 'csh-05',
    date: '2026-10-20',
    type: 'IN',
    category: 'Vendas/Cachê',
    description: 'Cachê Quitado: Coquetel Aniversário Dr. Eduardo (40 convidados)',
    amount: 1250.00
  },
  {
    id: 'csh-06',
    date: '2026-10-20',
    type: 'OUT',
    category: 'Equipe/Staff',
    description: 'Diária Barback de apoio (Bruno Santos)',
    amount: 180.00
  }
];

export const initialEvents: EventProposal[] = [
  {
    id: 'evt-01',
    clientName: 'Marina Silveira & Lucas Mendes',
    eventType: 'Casamento',
    eventDate: '2026-11-14',
    guestCount: 120,
    cocktails: ['Caipiroska de Morango', 'Gin Tônica Botânica', 'Moscow Mule'],
    totalAmount: 4800.00,
    depositAmount: 2400.00,
    status: 'Sinal Pago',
    clientPhone: '(81) 99876-5432'
  },
  {
    id: 'evt-02',
    clientName: 'Dra. Beatriz Albuquerque',
    eventType: 'Aniversário',
    eventDate: '2026-11-21',
    guestCount: 60,
    cocktails: ['Caipiroska de Morango', 'Gin Tônica Botânica'],
    totalAmount: 2200.00,
    depositAmount: 1100.00,
    status: 'Orçamento',
    clientPhone: '(81) 98765-4321'
  },
  {
    id: 'evt-03',
    clientName: 'Inovação Tech Summit',
    eventType: 'Corporativo',
    eventDate: '2026-12-05',
    guestCount: 200,
    cocktails: ['Gin Tônica Botânica', 'Moscow Mule', 'Mocktail Tropical'],
    totalAmount: 7500.00,
    depositAmount: 3750.00,
    status: 'Confirmado',
    clientPhone: '(81) 99123-9988'
  }
];

export const initialSuppliers: SupplierItem[] = [
  {
    id: 'sup-01',
    name: 'Distribuidora Premium Spirits Nordeste',
    category: 'Destilados & Bebidas',
    contact: 'Carlos Eduardo',
    phone: '(81) 3224-5500',
    rating: 5,
    terms: 'Faturamento em 15/30 dias para compras acima de R$ 1.500',
    status: 'Homologado'
  },
  {
    id: 'sup-02',
    name: 'Ceasa Frutas & Botânicos Selecionados',
    category: 'Hortifrúti Fresco',
    contact: 'Dona Maria',
    phone: '(81) 98822-1144',
    rating: 5,
    terms: 'Pagamento à vista via Pix com 7% de desconto',
    status: 'Homologado'
  },
  {
    id: 'sup-03',
    name: 'Puro Gelo Cristal & Seco',
    category: 'Gelo Filtrado',
    contact: 'Roberto Viana',
    phone: '(81) 3456-7890',
    rating: 4,
    terms: 'Entrega programada em caminhão térmico no local do evento',
    status: 'Homologado'
  },
  {
    id: 'sup-04',
    name: 'Barware Pro & Descartáveis Sustentáveis',
    category: 'Descartáveis & Vidraria',
    contact: 'Fernanda Lins',
    phone: '(81) 99777-3322',
    rating: 4,
    terms: 'Canudos biodegradáveis certificados e guardanapos premium',
    status: 'Em Avaliação'
  }
];
