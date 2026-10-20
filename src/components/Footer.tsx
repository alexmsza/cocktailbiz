import Link from 'next/link';
import { Wine, Rocket, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0A0E13] text-zinc-400 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#CD8C38] to-[#C2410C] flex items-center justify-center text-white">
                <Wine className="w-4 h-4" />
              </div>
              <span className="font-bold text-white tracking-tight">CocktailBiz OS</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Ambiente unificado de formação e gestão executiva de negócios, cobrindo tanto a esteira especializada de bar quanto o framework de empreendedorismo geral.
            </p>
          </div>

          {/* Empreendedorismo Geral */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">Empreendedorismo Geral</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/empreendedorismo" className="hover:text-[#CD8C38] transition-colors">Hub Geral de Negócios</Link></li>
              <li><Link href="/empreendedorismo" className="hover:text-[#CD8C38] transition-colors">Teoria do Fazer (Effectuation)</Link></li>
              <li><Link href="/empreendedorismo" className="hover:text-[#CD8C38] transition-colors">Simulador de Break-Even & Markup</Link></li>
              <li><Link href="/empreendedorismo" className="hover:text-[#CD8C38] transition-colors">Checklist Semanal de Governança</Link></li>
              <li>
                <a 
                  href="https://app.notion.com/p/Forma-o-Executiva-em-Empreendedorismo-Geral-Gest-o-Finan-as-Tra-o-Neg-cios-3ffd772c5d1281c5a8f8d98a830b8fd8"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#CD8C38] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Ver Hub no Notion</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Ferramentas de Gestão */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">CocktailBiz OS</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/app" className="hover:text-white transition-colors">Dashboard Operacional</Link></li>
              <li><Link href="/app/fichas-tecnicas" className="hover:text-white transition-colors">Calculadora de Ficha Técnica & CMV</Link></li>
              <li><Link href="/app/livro-caixa" className="hover:text-white transition-colors">Livro Caixa Diário (PF vs PJ)</Link></li>
              <li><Link href="/app/eventos" className="hover:text-white transition-colors">Orçamentos e Sinal com Pix</Link></li>
              <li><Link href="/app/fornecedores" className="hover:text-white transition-colors">Catálogo de Fornecedores</Link></li>
            </ul>
          </div>

          {/* Formação de Bartenders */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">Dose de Empreendedorismo</h4>
            <div className="space-y-2 text-xs">
              <p className="text-zinc-400 text-[11px]">
                Parceria: <strong>DIAGEO Learning for Life</strong>, <strong>MSX</strong>, <strong>Aliança Empreendedora</strong> e <strong>TamoJunto</strong>.
              </p>
              <ul className="space-y-1.5 pt-1 text-xs">
                <li><Link href="/curso" className="hover:text-[#CD8C38] transition-colors">Trilha dos 5 Módulos</Link></li>
                <li>
                  <a
                    href="https://app.notion.com/p/Dose-de-Empreendedorismo-Gest-o-Mercado-Oportunidades-para-Bartenders-3ffd772c5d1281ab9570dacc7c7d48af"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#CD8C38] hover:underline font-medium"
                  >
                    <span>Notion: Formação Bartenders</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2">
          <p>© 2026 CocktailBiz OS & Hub Soberano de Empreendedorismo. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido por <span className="text-zinc-300 font-medium">Sousza Consultoria & ASZADEV</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
