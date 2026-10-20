import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Calculator, 
  Wallet, 
  CalendarCheck, 
  Truck, 
  ShieldCheck, 
  Wine,
  Award,
  Play,
  LayoutDashboard
} from 'lucide-react';
import { courseModules } from '@/data/courseData';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-24 border-b border-white/10 bg-gradient-to-b from-[#121A21] to-[#0E1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#CD8C38]/15 border border-[#CD8C38]/30 text-[#CD8C38] text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-[#CD8C38]" />
                <span>Formação Executiva & Gestão para Bartenders</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Transforme seu talento no balcão em um{' '}
                <span className="bg-gradient-to-r from-[#CD8C38] via-[#E5A754] to-[#C2410C] bg-clip-text text-transparent">
                  negócio lucrativo
                </span>.
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
                O programa <strong>Dose de Empreendedorismo</strong> e o sistema operacional <strong>CocktailBiz OS</strong> capacitam você a superar o &quot;bico&quot;, dominar fichas técnicas com precificação real e gerenciar eventos com propostas profissionais integradas ao Pix.
              </p>

              {/* Badges / Parcerias */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                <span className="text-zinc-500 font-medium">Iniciativa Oficial:</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">DIAGEO Learning for Life</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">MSX International</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Aliança Empreendedora</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">TamoJunto</span>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/curso"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#CD8C38] to-[#C2410C] text-white shadow-lg shadow-[#CD8C38]/25 hover:opacity-95 transition-all group"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Acessar Trilha do Curso</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/app"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                >
                  <Calculator className="w-4 h-4 text-[#CD8C38]" />
                  <span>Abrir CocktailBiz OS</span>
                </Link>
              </div>
            </div>

            {/* Right Media / Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 group">
                <div className="relative aspect-[16/10] w-full bg-zinc-900">
                  <Image
                    src="/assets/hero_dose_empreendedorismo.webp"
                    alt="Dose de Empreendedorismo Hero"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-[#CD8C38] uppercase tracking-wider">Metodologia Exclusiva</p>
                        <p className="text-sm font-bold text-white">Teoria do Fazer & Precificação Real</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        100% Prático
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-8 bg-[#0A0E13] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-center gap-1.5 text-2xl md:text-3xl font-extrabold text-[#CD8C38]">
                <TrendingUp className="w-6 h-6 text-[#CD8C38]" />
                <span>+30%</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">Crescimento na demanda digital por coquetelaria (SEBRAE)</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl md:text-3xl font-extrabold text-white">5 Módulos</div>
              <p className="text-xs text-zinc-400 mt-1">Da mentalidade à precificação e gestão de equipes</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">R$ 4,73</div>
              <p className="text-xs text-zinc-400 mt-1">CMV Canônico do curso (Caipiroska c/ 75%+ margem)</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-center gap-1.5 text-2xl md:text-3xl font-extrabold text-white">
                <Award className="w-6 h-6 text-[#CD8C38]" />
                <span>Certificado</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">Reconhecimento institucional oficial ao concluir os 5 desafios</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Course Modules */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#CD8C38]">Trilha Curricular Completa</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">Os 5 Encontros da Formação</h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md mt-2 md:mt-0">
            Cada módulo combina fundamentação teórica, vídeos com especialistas do mercado e um desafio mão na massa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseModules.map((mod) => (
            <div
              key={mod.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#161F26] border border-white/10 hover:border-[#CD8C38]/50 transition-all shadow-lg hover:shadow-[#CD8C38]/5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#CD8C38]/20 text-[#CD8C38] flex items-center justify-center font-bold text-sm">
                    0{mod.id}
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <Play className="w-3.5 h-3.5 text-[#CD8C38]" />
                    {mod.videos.length} vídeo{mod.videos.length > 1 ? 's' : ''} • {mod.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#CD8C38] transition-colors leading-snug">
                  {mod.title.replace(`Módulo ${mod.id}: `, '')}
                </h3>

                <p className="text-xs text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                  {mod.summary}
                </p>

                <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                  <p className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wide">Destaques:</p>
                  <ul className="space-y-1 text-xs text-zinc-400">
                    {mod.topics.slice(0, 2).map((topic, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CD8C38] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  +{mod.points} pts
                </span>

                <Link
                  href={`/curso/modulo/${mod.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#CD8C38] transition-colors"
                >
                  <span>Estudar Módulo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}

          {/* Card Especial de Certificação */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-[#1A2630] to-[#21160C] border border-[#CD8C38]/40 shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#CD8C38]/20 flex items-center justify-center text-[#CD8C38] mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Certificado de Conclusão</h3>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                Ao completar a submissão dos 5 desafios práticos (500 pts), você desbloqueia o Certificado Oficial de Empreendedor de Bar & Coquetelaria com validação QR Code.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href="/curso"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-[#CD8C38] hover:bg-[#E5A754] text-zinc-950 transition-colors"
              >
                <span>Ver Meu Progresso</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS CocktailBiz OS Preview */}
      <section className="py-16 md:py-24 bg-[#0A0E13] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#CD8C38]">
                Tecnologia para o seu Balcão
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Esqueça as planilhas complexas. Conheça o{' '}
                <span className="text-[#CD8C38]">CocktailBiz OS</span>.
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Desenvolvemos o sistema operacional de bolso que automatiza todos os cálculos aprendidos no curso:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-[#CD8C38]/20 text-[#CD8C38] shrink-0">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Ficha Técnica & CMV Dinâmico</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Cadastre a garrafa e a dose: o sistema calcula o custo exato por copo e sugere o preço de venda para 70%+ de margem.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-[#10B981]/20 text-[#10B981] shrink-0">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Livro Caixa & Separação PF/PJ</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Registre entradas e saídas pelo celular ao sair do mercado ou receber o cachê do evento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-[#C2410C]/20 text-[#C2410C] shrink-0">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Propostas de Eventos com Sinal Pix</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Envie uma página executiva do orçamento com link direto de Pix para receber os 50% de reserva na hora.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/app"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-lg"
                >
                  <LayoutDashboard className="w-4 h-4 text-[#C2410C]" />
                  <span>Acessar o Painel CocktailBiz OS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Dashboard Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/90">
                <div className="relative aspect-[16/10] w-full bg-zinc-900">
                  <Image
                    src="/assets/dashboard_cocktail_mgmt.webp"
                    alt="Dashboard CocktailBiz OS"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
