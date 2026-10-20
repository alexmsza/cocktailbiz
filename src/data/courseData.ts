import { CourseModule } from '@/types';

export const courseModules: CourseModule[] = [
  {
    id: 1,
    slug: 'um-brinde-ao-empreendedorismo',
    title: 'Módulo 1: Um Brinde ao Empreendedorismo',
    subtitle: 'Desmistificando o começar e dominando a Teoria do Fazer (Effectuation)',
    duration: '45 min',
    points: 100,
    summary: 'Empreender na coquetelaria não é sobre ter uma ideia mágica ou muito dinheiro guardado; é sobre tirar a mão do bolso, colocar a mão na massa e construir parcerias sólidas desde o primeiro dia.',
    topics: [
      'O que realmente significa empreender no mercado de bar e eventos',
      'Desconstrução dos 4 Mitos: Ideia Genial, Muito Dinheiro, Sigilo Excessivo e Medo de Errar',
      'Inclusão e protagonismo feminino no balcão e nos negócios',
      'Os 5 Princípios da Teoria do Fazer (Effectuation) da Dra. Saras Sarasvathy: Pássaro na Mão, Perdas Toleráveis, Colcha de Retalhos, Do Limão uma Limonada e Piloto no Avião'
    ],
    videos: [
      {
        title: 'Do que são feitos empreendedores e empreendedoras?',
        url: 'https://youtu.be/ySv7eKQuEkI',
        youtubeId: 'ySv7eKQuEkI',
        speaker: 'Aliança Empreendedora & Learning for Life'
      },
      {
        title: 'Oportunidades reais para bartenders no mercado atual',
        url: 'https://www.youtube.com/watch?v=DAyYlkR7t-M',
        youtubeId: 'DAyYlkR7t-M',
        speaker: 'Especialistas Diageo'
      },
      {
        title: 'Trajetória, Desafios e Referência na Coquetelaria',
        url: 'https://www.youtube.com/watch?v=olbMEoyYucA',
        youtubeId: 'olbMEoyYucA',
        speaker: 'Talita Simões (Bartender Premiada)'
      }
    ],
    challenge: {
      id: 1,
      title: 'Desafio 1: Matriz de Autodiagnóstico Empreendedor',
      points: 100,
      description: 'Com base no primeiro encontro, reflita sobre as suas habilidades e seu preparo para encarar a coquetelaria como um negócio profissional.',
      instructions: [
        'Liste 2 pontos fortes que fazem você se sentir empreendedor(a) na área de bar.',
        'Liste 2 pontos que você precisa aprimorar (técnicas, gestão de tempo, finanças ou comercial).',
        'Descreva como você pretende usar seus recursos atuais (Princípio do Pássaro na Mão).'
      ]
    }
  },
  {
    id: 2,
    slug: 'um-brinde-as-oportunidades',
    title: 'Módulo 2: Um Brinde às Oportunidades',
    subtitle: 'De "Bico" a Negócio Formal: A Postura do Bartender Maestro',
    duration: '35 min',
    points: 100,
    summary: 'Ainda que você seja MEI, autônomo ou freelancer eventual, você é uma empresa. A percepção do cliente muda radicalmente quando você substitui o improviso pela postura de orquestrador.',
    topics: [
      'Direitos e deveres comerciais do profissional formalizado e do freelancer',
      'Como a formalização e a pontualidade protegem o seu cachê e o seu preço',
      'A metáfora do Maestro: você não precisa fazer tudo sozinho, mas precisa saber reger a entrega',
      'Os 3 Pilares do Bar: Busca Contínua por Conhecimento, Inteligência Relacional e Postura de Cartão de Visitas'
    ],
    videos: [
      {
        title: 'Por onde começar um negócio de drinks?',
        url: 'https://www.youtube.com/watch?v=64h18jJ0Rl4',
        youtubeId: '64h18jJ0Rl4',
        speaker: 'Diageo Learning for Life'
      }
    ],
    challenge: {
      id: 2,
      title: 'Desafio 2: Plano de Próximos Passos & Ações Imediatas',
      points: 100,
      description: 'Transforme o aprendizado teórico em atitudes práticas para profissionalizar sua prestação de serviços a partir de hoje.',
      instructions: [
        'Escreva 2 ações práticas que você pode implantar a partir deste conteúdo.',
        'Defina qual será o seu "próximo passo" prioritário para começar ou expandir (ex: formalizar MEI, montar catálogo padrão, adquirir kit próprio de barware).'
      ]
    }
  },
  {
    id: 3,
    slug: 'um-brinde-a-divulgacao-e-fidelizacao',
    title: 'Módulo 3: Um Brinde à Divulgação e Fidelização',
    subtitle: 'Posicionamento de Marca, Demanda Digital (+30%) e Fotografia Gastronômica',
    duration: '40 min',
    points: 100,
    summary: 'Segundo dados do SEBRAE, a busca digital por bartenders e coquetelaria em eventos cresceu quase 30%. Quem não se posiciona com identidade clara e fotos de qualidade perde contratos antes mesmo do orçamento.',
    topics: [
      'Boom da demanda digital (+30%) e o risco da concorrência desqualificada',
      'Como definir sua identidade de marca e posicionamento de mercado',
      'Guia Prático de Fotografia de Drinks: Insumos frescos, narrativa cênica e iluminação frontal/difusa',
      'O valor da retenção: conquistar um cliente novo custa até 7x mais do que fidelizar um contratante'
    ],
    videos: [
      {
        title: 'Identidade e Posicionamento no Mercado',
        url: 'https://www.youtube.com/watch?v=2HROV_EyR08',
        youtubeId: '2HROV_EyR08',
        speaker: 'Equipe TamoJunto'
      },
      {
        title: 'Preparando a Divulgação nas Redes Sociais',
        url: 'https://www.youtube.com/watch?v=jsoVh9Bfyow',
        youtubeId: 'jsoVh9Bfyow',
        speaker: 'Especialistas em Marketing Gastronômico'
      }
    ],
    challenge: {
      id: 3,
      title: 'Desafio 3: Pesquisa de Canal com 5 Clientes Reais',
      points: 100,
      description: 'Valide com dados de mercado qual é a melhor rede social e canal de contato para divulgar seus serviços.',
      instructions: [
        'Converse com 5 pessoas (clientes antigos ou pessoas com perfil para contratar eventos).',
        'Pergunte onde elas pesquisam e contratam bartenders (Instagram, WhatsApp, Google, Indicação).',
        'Registre as respostas, selecione o canal principal e compartilhe o seu perfil profissional (@).'
      ]
    }
  },
  {
    id: 4,
    slug: 'controles-financeiros-e-formacao-de-preco',
    title: 'Módulo 4: Controles Financeiros e Formação de Preço',
    subtitle: 'Separação PF/PJ, Livro Caixa e a Ficha Técnica ("A Mãe dos Processos")',
    duration: '60 min',
    points: 100,
    summary: 'A gestão financeira é o pilar que sustenta o negócio em pé. Nunca confie na memória: registre cada centavo no Livro Caixa e calcule o CMV e rendimento dos drinks com precisão cirúrgica.',
    topics: [
      'Separação inegociável entre dinheiro pessoal (PF) e caixa da empresa (PJ)',
      'Como operar o Livro Caixa e a Planilha de Controle de Vendas',
      'Elementos do Preço: Custos Variáveis, Custos Fixos rateados, Mão de Obra e Margem de Lucro',
      'Ficha Técnica Canônica: Fórmulas de Rendimento, Custo Unitário e CMV (Estudo de Caso Caipiroska de Morango a R$ 4,73)'
    ],
    videos: [
      {
        title: 'Controle as Finanças do Negócio',
        url: 'https://youtu.be/RPLbgXNj0Nk',
        youtubeId: 'RPLbgXNj0Nk',
        speaker: 'Aliança Empreendedora'
      },
      {
        title: 'Gestão Financeira no Balcão de Bar',
        url: 'https://youtu.be/JOXpFOK_h58',
        youtubeId: 'JOXpFOK_h58',
        speaker: 'Aline Ferrari (@ferrarialine_)'
      },
      {
        title: 'Como Calcular o Preço do Produto ou Serviço (Parte 1)',
        url: 'https://youtu.be/IZTn4WVejLw',
        youtubeId: 'IZTn4WVejLw',
        speaker: 'Formação Técnica'
      },
      {
        title: 'Como Calcular o Preço do Produto ou Serviço (Parte 2)',
        url: 'https://youtu.be/8SYBCuS3mvc',
        youtubeId: '8SYBCuS3mvc',
        speaker: 'Formação Técnica'
      },
      {
        title: 'Precificação e Lucro Real na Coquetelaria',
        url: 'https://youtu.be/w70RKJuQg0U',
        youtubeId: 'w70RKJuQg0U',
        speaker: 'Thiago Acerola'
      }
    ],
    challenge: {
      id: 4,
      title: 'Desafio 4: Elaboração da Ficha Técnica & Precificação',
      points: 100,
      description: 'Coloque a mão no drink: elabore a ficha técnica de um coquetel autoral ou clássico usando o modelo canônico de cálculo de rendimento e CMV.',
      instructions: [
        'Escolha 1 coquetel do seu portfólio.',
        'Liste todos os insumos, volume de embalagem de mercado, preço de compra e dose usada.',
        'Calcule o rendimento por garrafa/pacote e o custo por dose.',
        'Some descartáveis e gelo para apurar o CMV total e estipule o preço sugerido com margem de 70%+.'
      ]
    }
  },
  {
    id: 5,
    slug: 'um-brinde-as-relacoes-interpessoais',
    title: 'Módulo 5: Um Brinde às Relações Interpessoais',
    subtitle: 'Gestão de Fornecedores em 3 Etapas, Escala de Equipe e Alianças Comerciais',
    duration: '40 min',
    points: 100,
    summary: '"Mais vale um bom amigo na praça do que dinheiro no bolso." No mercado de coquetelaria, suas conexões com clientes, fornecedores e equipe são o ativo mais lucrativo do seu negócio.',
    topics: [
      'Os 4 Eixos Relacionais: Clientes, Fornecedores, Contratados (Staff) e Parceiros de Eventos',
      'Os 5 Pontos de Bons Relacionamentos: Empatia, Comunicação Clara, Cultivo, Diversidade e Feedbacks',
      'Gestão de Fornecedores em 3 Etapas: Levantamento/Homologação, Negociação e Parceria Sem Dependência Única',
      'Contratação e Gestão de Equipe: Dimensionamento (1 bartender para 40-50 pessoas), briefing prévio e acordos justos'
    ],
    videos: [
      {
        title: 'Cuidados nas Relações Interpessoais',
        url: 'https://www.youtube.com/watch?v=DBYP5QDZCSg',
        youtubeId: 'DBYP5QDZCSg',
        speaker: 'Aliança Empreendedora'
      },
      {
        title: 'Contratações: A Combinação Certa de Pessoas para o Negócio',
        url: 'https://youtu.be/4n_Y73Va1ls',
        youtubeId: '4n_Y73Va1ls',
        speaker: 'Diageo Learning for Life'
      }
    ],
    challenge: {
      id: 5,
      title: 'Desafio 5: Plano de Fortalecimento de Parcerias',
      points: 100,
      description: 'Escolha um dos 4 pilares relacionais e elabore um plano de ação para melhorar o relacionamento e gerar valor recíproco.',
      instructions: [
        'Escolha 1 grupo: Clientes, Fornecedores, Colaboradores ou Parceiros (cerimonialistas/buffets).',
        'Identifique uma fragilidade atual nesse relacionamento.',
        'Defina 2 ações práticas que você aplicará na próxima semana para estreitar essa parceria.'
      ]
    }
  }
];
