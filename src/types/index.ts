export interface CourseModule {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  points: number;
  summary: string;
  topics: string[];
  videos: {
    title: string;
    url: string;
    youtubeId: string;
    speaker?: string;
  }[];
  challenge: {
    id: number;
    title: string;
    points: number;
    description: string;
    instructions: string[];
  };
}

export interface IngredientItem {
  id: string;
  name: string;
  packageSize: number;
  packageUnit: 'ml' | 'g' | 'un';
  marketPrice: number;
  portionUsed: number;
}

export interface CocktailRecipe {
  id: string;
  name: string;
  category: 'Clássico' | 'Autoral' | 'Tropical' | 'Mocktail';
  photo?: string;
  ingredients: {
    name: string;
    marketPrice: number;
    packageSize: number;
    packageUnit: string;
    portionUsed: number;
    portionUnit: string;
    yieldCount: number;
    unitCost: number;
  }[];
  totalCost: number; // CMV
  targetMargin: number; // Ex: 75%
  suggestedPrice: number;
  instructions: string[];
}

export interface CashbookRecord {
  id: string;
  date: string;
  type: 'IN' | 'OUT';
  description: string;
  category: 'Vendas/Cachê' | 'Bebidas' | 'Hortifrúti' | 'Gelo & Descartáveis' | 'Equipe/Staff' | 'MEI/Impostos' | 'Outros';
  amount: number;
}

export interface EventProposal {
  id: string;
  clientName: string;
  eventType: 'Casamento' | 'Aniversário' | 'Corporativo' | 'Festa Privada';
  eventDate: string;
  guestCount: number;
  cocktails: string[];
  totalAmount: number;
  depositAmount: number;
  status: 'Orçamento' | 'Sinal Pago' | 'Confirmado' | 'Concluído';
  clientPhone: string;
}

export interface SupplierItem {
  id: string;
  name: string;
  category: 'Destilados & Bebidas' | 'Hortifrúti Fresco' | 'Gelo Filtrado' | 'Descartáveis & Vidraria';
  contact: string;
  phone: string;
  rating: number; // 1-5
  terms: string;
  status: 'Homologado' | 'Em Avaliação';
}
