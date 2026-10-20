'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Rocket, 
  Sparkles, 
  Calculator, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Building2, 
  ExternalLink,
  Target,
  ArrowRight,
  DollarSign,
  Scale
} from 'lucide-react';

export default function EmpreendedorismoGeralPage() {
  // Calculadora Universal de Precificação (Markup & Margem)
  const [fixedCostsMonthly, setFixedCostsMonthly] = useState(2500); // Custos fixos do negócio
  const [targetMargin, setTargetMargin] = useState(30); // Margem de lucro líquida (%)
  const [taxPercent, setTaxPercent] = useState(6); // Imposto Simples / MEI (%)
  const [directUnitCost, setDirectUnitCost] = useState(50); // Custo direto de insumo/entrega
  const [estimatedMonthlySales, setEstimatedMonthlySales] = useState(50); // Volume mensal estimado

  // Cálculos em tempo real
  const fixedCostPerUnit = estimatedMonthlySales > 0 ? fixedCostsMonthly / estimatedMonthlySales : 0;
  const totalUnitCost = directUnitCost + fixedCostPerUnit;
  
  // Preço com divisor de markup: Preço = Custo Variável / (1 - (Margem + Imposto + Rateio Fixo))
  const marginAndTaxFactor = (targetMargin + taxPercent) / 100;
  const suggestedSalePrice = marginAndTaxFactor < 1 ? totalUnitCost / (1 - marginAndTaxFactor) : 0;
  const unitNetProfit = suggestedSalePrice - totalUnitCost - (suggestedSalePrice * (taxPercent / 100));

  // Ponto de Equilíbrio em unidades
  const contributionMarginUnit = suggestedSalePrice - directUnitCost - (suggestedSalePrice * (taxPercent / 100));
  const breakEvenUnits = contributionMarginUnit > 0 ? Math.ceil(fixedCostsMonthly / contributionMarginUnit) : 0;

  // Checklist interativo
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>({
    'caixa': true,
    'cobranca': false,
    'fornecedores': true,
    'propostas': false,
    'posvenda': true
  });

  const toggleChecklist = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Executivo Geral */}
      <section className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121A21] via-[#161F26] to-[#1E1610] border border-white/10 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CD8C38]/20 border border-[#CD8C38]/30 text-[#CD8C38] text-xs font-semibold">
              <Rocket className="w-3.5 h-3.5" />
              <span>Gestão Estratégica, Finanças & Tração Universal</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Hub Executivo de{' '}
              <span className="bg-gradient-to-r from-[#CD8C38] via-[#E5A754] to-[#C2410C] bg-clip-text text-transparent">
                Empreendedorismo Geral
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Estrutura corporativa e metodologia de negócios aplicável a qualquer empreendimento (serviços, comércio, consultoria ou startups). Sem nicho específico, 100% focado em viabilidade, fluxo de caixa e geração de lucro real.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://app.notion.com/p/Forma-o-Executiva-em-Empreendedorismo-Geral-Gest-o-Finan-as-Tra-o-Neg-cios-3ffd772c5d1281c5a8f8d98a830b8fd8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#CD8C38] to-[#C2410C] text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#CD8C38]/20"
              >
                <span>Acessar Hub Completo no Notion</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs text-zinc-400">
                Metodologia: <strong>Effectuation</strong> & <strong>Lean Business</strong>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-zinc-900">
              <Image
                src="/assets/hero_empreendedorismo_geral.webp"
                alt="Empreendedorismo Geral"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Os 6 Eixos Estratégicos do Empreendedorismo */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#CD8C38]">Matriz Curricular</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Os 6 Pilares de Sustentação de um Negócio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Eixo 1 */}
          <div className="p-6 rounded-2xl bg-[#161F26] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#CD8C38]/20 text-[#CD8C38] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-base font-bold text-white">Mentalidade & Teoria do Fazer</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Aplicação dos 5 princípios da Teoria do Fazer (*Effectuation* de Sarasvathy): comece com o que tem, defina perdas toleráveis e construa parcerias pré-comprometidas.
            </p>
          </div>

          {/* Eixo 2 */}
          <div className="p-6 rounded-2xl bg-[#161F26] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-base font-bold text-white">Oportunidades & Modelagem</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Mapeamento de dores reais de clientes (*Jobs-to-be-Done*), validação em ciclos curtos e transição segura da informalidade para empresa formal (MEI/ME).
            </p>
          </div>

          {/* Eixo 3 */}
          <div className="p-6 rounded-2xl bg-[#161F26] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-base font-bold text-white">Marketing, Tração & Vendas</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Proposta Única de Valor (UVP), funil de vendas (Atração, Qualificação, Fechamento), equação CAC vs LTV e esteira ativa de retenção e indicação.
            </p>
          </div>

          {/* Eixo 4 */}
          <div className="p-6 rounded-2xl bg-[#161F26] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              04
            </div>
            <h3 className="text-base font-bold text-white">Finanças & Engenharia de Preços</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Separação estrita PF/PJ, Livro Caixa diário, DRE Simplificado, Ponto de Equilíbrio (*Break-Even*) e precificação por Ficha de Custos Unitários.
            </p>
          </div>

          {/* Eixo 5 */}
          <div className="p-6 rounded-2xl bg-[#161F26] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              05
            </div>
            <h3 className="text-base font-bold text-white">Gestão de Pessoas & Parcerias</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Relações estratégicas com fornecedores em 3 etapas, contratação segura (prestadores, PJ e terceiros) e alianças de co-criação.
            </p>
          </div>

          {/* Eixo 6 */}
          <div className="p-6 rounded-2xl bg-[#161F26] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
              06
            </div>
            <h3 className="text-base font-bold text-white">Governança & Checklists</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Rituais de acompanhamento semanal, conciliação bancária, follow-up de orçamentos e auditoria operacional contínua para evitar surpresas.
            </p>
          </div>
        </div>
      </section>

      {/* Ferramenta Interativa: Simulador Universal de Precificação e Break-Even */}
      <section className="p-8 rounded-3xl bg-[#161F26] border border-white/10 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CD8C38] uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Simulador Financeiro Universal</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              Calculadora de Preço de Venda & Ponto de Equilíbrio
            </h3>
          </div>
          <span className="text-xs text-zinc-400">Funciona para produtos e serviços</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs do Simulador */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Custos Fixos Totais da Empresa (Mês):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-zinc-400">R$</span>
                  <input
                    type="number"
                    value={fixedCostsMonthly}
                    onChange={(e) => setFixedCostsMonthly(Number(e.target.value))}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#CD8C38]"
                  />
                </div>
                <p className="text-[10px] text-zinc-500 mt-1">Aluguel, softwares, internet, honorários, DAS MEI.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Estimativa de Vendas / Contratos (Mês):
                </label>
                <input
                  type="number"
                  value={estimatedMonthlySales}
                  onChange={(e) => setEstimatedMonthlySales(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#CD8C38]"
                />
                <p className="text-[10px] text-zinc-500 mt-1">Quantidade de unidades ou projetos por mês.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Custo Direto Unitário do Serviço/Produto:
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-zinc-400">R$</span>
                  <input
                    type="number"
                    value={directUnitCost}
                    onChange={(e) => setDirectUnitCost(Number(e.target.value))}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#CD8C38]"
                  />
                </div>
                <p className="text-[10px] text-zinc-500 mt-1">Matéria-prima, horas extras de execução, embalagem.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Impostos / Alíquota MEI/Simples (%):
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={taxPercent}
                    onChange={(e) => setTaxPercent(Number(e.target.value))}
                    className="w-full pr-8 pl-3 py-2 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#CD8C38]"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-zinc-400">%</span>
                </div>
                <p className="text-[10px] text-zinc-500 mt-1">Geralmente 4% a 6% para serviços ou taxa fixa.</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-zinc-300">
                  Margem de Lucro Líquida Desejada:
                </label>
                <span className="text-xs font-bold text-[#CD8C38]">{targetMargin}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="70"
                value={targetMargin}
                onChange={(e) => setTargetMargin(Number(e.target.value))}
                className="w-full accent-[#CD8C38] cursor-pointer"
              />
            </div>
          </div>

          {/* Painel de Resultados */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Diagnóstico de Precificação
            </h4>

            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-xs text-zinc-400">Rateio Fixo por Unidade:</span>
                <span className="text-xs font-semibold text-white">R$ {fixedCostPerUnit.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-xs text-zinc-400">Custo Total de Entrega:</span>
                <span className="text-xs font-semibold text-zinc-200">R$ {totalUnitCost.toFixed(2)}</span>
              </div>

              <div className="p-4 rounded-xl bg-[#CD8C38]/15 border border-[#CD8C38]/30">
                <p className="text-[11px] font-semibold text-[#CD8C38] uppercase">Preço de Venda Sugerido</p>
                <p className="text-2xl font-extrabold text-white mt-0.5">
                  R$ {suggestedSalePrice.toFixed(2)}
                </p>
                <p className="text-[10px] text-zinc-400 mt-1">
                  Lucro Líquido Real por venda: <strong className="text-emerald-400">R$ {unitNetProfit.toFixed(2)}</strong>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-blue-400" />
                    <span>Ponto de Equilíbrio (Break-Even)</span>
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Meta mínima para não ter prejuízo no mês.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-blue-400">{breakEvenUnits}</span>
                  <span className="text-[10px] text-zinc-500 block">vendas/mês</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Semanal Interativo de Governança */}
      <section className="p-8 rounded-3xl bg-[#161F26] border border-white/10 space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#CD8C38]">Governança Prática</span>
          <h3 className="text-xl font-bold text-white">Checklist Semanal do Empreendedor</h3>
          <p className="text-xs text-zinc-400">
            Execute toda sexta-feira para blindar as finanças e operações do seu negócio.
          </p>
        </div>

        <div className="space-y-2.5 pt-2">
          <label 
            onClick={() => toggleChecklist('caixa')}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-black/30 border border-white/5 hover:border-white/15 cursor-pointer transition-colors"
          >
            <input 
              type="checkbox" 
              checked={checklist['caixa']} 
              onChange={() => {}}
              className="w-4 h-4 rounded accent-[#CD8C38]" 
            />
            <span className={`text-xs ${checklist['caixa'] ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
              <strong>Conciliação Bancária & Livro Caixa:</strong> Todas as entradas e saídas foram registradas e o saldo bate exatamente com o extrato da conta PJ?
            </span>
          </label>

          <label 
            onClick={() => toggleChecklist('cobranca')}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-black/30 border border-white/5 hover:border-white/15 cursor-pointer transition-colors"
          >
            <input 
              type="checkbox" 
              checked={checklist['cobranca']} 
              onChange={() => {}}
              className="w-4 h-4 rounded accent-[#CD8C38]" 
            />
            <span className={`text-xs ${checklist['cobranca'] ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
              <strong>Cobrança Ativa & Follow-up:</strong> Verificar se existem parcelas ou orçamentos em aberto e enviar mensagem profissional de acompanhamento.
            </span>
          </label>

          <label 
            onClick={() => toggleChecklist('fornecedores')}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-black/30 border border-white/5 hover:border-white/15 cursor-pointer transition-colors"
          >
            <input 
              type="checkbox" 
              checked={checklist['fornecedores']} 
              onChange={() => {}}
              className="w-4 h-4 rounded accent-[#CD8C38]" 
            />
            <span className={`text-xs ${checklist['fornecedores'] ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
              <strong>Auditoria de Suprimentos & Prazos:</strong> Confirmar pedidos para a próxima semana e verificar se há risco de ruptura de matéria-prima.
            </span>
          </label>

          <label 
            onClick={() => toggleChecklist('propostas')}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-black/30 border border-white/5 hover:border-white/15 cursor-pointer transition-colors"
          >
            <input 
              type="checkbox" 
              checked={checklist['propostas']} 
              onChange={() => {}}
              className="w-4 h-4 rounded accent-[#CD8C38]" 
            />
            <span className={`text-xs ${checklist['propostas'] ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
              <strong>Pipeline de Novos Negócios:</strong> Alimentar o funil com novos contatos e emitir propostas com prazo de validade estipulado.
            </span>
          </label>

          <label 
            onClick={() => toggleChecklist('posvenda')}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-black/30 border border-white/5 hover:border-white/15 cursor-pointer transition-colors"
          >
            <input 
              type="checkbox" 
              checked={checklist['posvenda']} 
              onChange={() => {}}
              className="w-4 h-4 rounded accent-[#CD8C38]" 
            />
            <span className={`text-xs ${checklist['posvenda'] ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
              <strong>Pesquisa de Satisfação & Indicação:</strong> Enviar mensagem cordial para os clientes atendidos esta semana colhendo depoimentos e pedindo indicação.
            </span>
          </label>
        </div>
      </section>
    </div>
  );
}
