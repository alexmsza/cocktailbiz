'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wine, BookOpen, LayoutDashboard, Calculator, Wallet, CalendarCheck, Truck, Sparkles, Rocket } from 'lucide-react';
import clsx from 'clsx';

export function Navbar() {
  const pathname = usePathname();

  const isLms = pathname.startsWith('/curso');
  const isGeneral = pathname.startsWith('/empreendedorismo');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0E1419]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#CD8C38] to-[#C2410C] flex items-center justify-center text-white shadow-lg shadow-[#CD8C38]/20 group-hover:scale-105 transition-transform">
              <Wine className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white tracking-tight">CocktailBiz</span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-[#CD8C38]/20 text-[#CD8C38] border border-[#CD8C38]/30">
                  Dose OS
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 hidden sm:block">Gestão & Formação para Empreendedores</p>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <Link
              href="/"
              className={clsx(
                'px-3 py-2 rounded-lg transition-colors',
                pathname === '/' ? 'text-white bg-white/10 font-semibold' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              )}
            >
              Início
            </Link>

            <Link
              href="/empreendedorismo"
              className={clsx(
                'flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors',
                isGeneral ? 'text-[#CD8C38] bg-[#CD8C38]/10 font-semibold border border-[#CD8C38]/30' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              )}
            >
              <Rocket className="w-4 h-4 text-[#CD8C38]" />
              <span>Empreendedorismo Geral</span>
            </Link>

            <Link
              href="/curso"
              className={clsx(
                'flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors',
                isLms ? 'text-[#CD8C38] bg-[#CD8C38]/10 font-semibold border border-[#CD8C38]/30' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              )}
            >
              <BookOpen className="w-4 h-4" />
              <span>Curso Bartenders</span>
            </Link>

            <div className="h-4 w-[1px] bg-white/10 mx-1" />

            <Link
              href="/app"
              className={clsx(
                'flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors',
                pathname === '/app' ? 'text-white bg-white/10 font-semibold' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              )}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/app/fichas-tecnicas"
              className={clsx(
                'flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors',
                pathname.startsWith('/app/fichas-tecnicas') ? 'text-white bg-white/10 font-semibold' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              )}
            >
              <Calculator className="w-4 h-4" />
              <span>Fichas</span>
            </Link>

            <Link
              href="/app/livro-caixa"
              className={clsx(
                'flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors',
                pathname.startsWith('/app/livro-caixa') ? 'text-white bg-white/10 font-semibold' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              )}
            >
              <Wallet className="w-4 h-4" />
              <span>Caixa</span>
            </Link>

            <Link
              href="/app/eventos"
              className={clsx(
                'flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors',
                pathname.startsWith('/app/eventos') ? 'text-white bg-white/10 font-semibold' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              )}
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Eventos & Pix</span>
            </Link>

            <Link
              href="/app/fornecedores"
              className={clsx(
                'flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors',
                pathname.startsWith('/app/fornecedores') ? 'text-white bg-white/10 font-semibold' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              )}
            >
              <Truck className="w-4 h-4" />
              <span>Fornecedores</span>
            </Link>
          </nav>

          {/* Quick CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/empreendedorismo"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#CD8C38] to-[#C2410C] text-white shadow hover:opacity-90 transition-opacity"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hub Geral</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
