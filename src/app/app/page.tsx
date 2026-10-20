'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  Wallet, 
  Calculator, 
  CalendarCheck, 
  ArrowUpRight, 
  ArrowDownRight, 
  Plus, 
  Sparkles,
  Wine,
  Users,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { initialCashbook, initialEvents, initialRecipes } from '@/data/mockManagementData';

export default function DashboardPage() {
  const [events] = useState(initialEvents);
  const [cashbook] = useState(initialCashbook);
  const [recipes] = useState(initialRecipes);

  // Totais
  const totalIn = cashbook.filter((c) => c.type === 'IN').reduce((acc, c) => acc + c.amount, 0);
  const totalOut = cashbook.filter((c) => c.type === 'OUT').reduce((acc, c) => acc + c.amount, 0);
  const currentBalance = totalIn - totalOut;

  const totalEventRevenue = events.reduce((acc, e) => acc + e.totalAmount, 0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Welcome & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#CD8C38]">CocktailBiz OS • Terminal Operacional</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">Visão Executiva do Negócio</h1>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/app/fichas-tecnicas"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-[#CD8C38]" />
            <span>Nova Ficha</span>
          </Link>

          <Link
            href="/app/livro-caixa"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-emerald-400" />
            <span>Lançar Caixa</span>
          </Link>

          <Link
            href="/app/eventos"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#CD8C38] to-[#C2410C] text-white hover:opacity-90 transition-opacity shadow-md shadow-[#CD8C38]/20"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Novo Orçamento</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#161F26] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Saldo em Caixa PJ</span>
            <Wallet className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-white">
            R$ {currentBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="text-[11px] text-emerald-400 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Conta jurídica separada (PF/PJ)</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#161F26] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Eventos no Pipeline</span>
            <CalendarCheck className="w-4 h-4 text-[#CD8C38]" />
          </div>
          <div className="text-2xl font-black text-white">
            R$ {totalEventRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="text-[11px] text-zinc-400">
            {events.length} contratos ativos na agenda
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#161F26] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>CMV Médio dos Drinks</span>
            <Calculator className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-black text-white">
            R$ {(recipes.reduce((acc, r) => acc + r.totalCost, 0) / recipes.length).toFixed(2)}
          </div>
          <div className="text-[11px] text-blue-400">
            Margem bruta média: 75%+
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#161F26] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Fichas Cadastradas</span>
            <Wine className="w-4 h-4 text-[#C2410C]" />
          </div>
          <div className="text-2xl font-black text-white">
            {recipes.length} coquetéis
          </div>
          <div className="text-[11px] text-zinc-400">
            Padronização e rendimento auditados
          </div>
        </div>
      </div>

      {/* Grid: Eventos Recentes & Últimos Lançamentos de Caixa */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Próximos Eventos */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-[#161F26] border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <CalendarCheck className="w-4 h-4 text-[#CD8C38]" />
              <span>Agenda de Eventos & Status de Sinal</span>
            </h3>
            <Link href="/app/eventos" className="text-xs text-[#CD8C38] hover:underline font-semibold">
              Ver todos →
            </Link>
          </div>

          <div className="space-y-3">
            {events.map((evt) => (
              <div
                key={evt.id}
                className="p-4 rounded-xl bg-black/30 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">{evt.clientName}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">
                      {evt.eventType}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    📅 {new Date(evt.eventDate).toLocaleDateString('pt-BR')} • {evt.guestCount} convidados
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Drinks: {evt.cocktails.join(', ')}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <p className="text-sm font-black text-white">R$ {evt.totalAmount.toFixed(2)}</p>
                  <span
                    className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                      evt.status === 'Sinal Pago' || evt.status === 'Confirmado'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {evt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Últimas Movimentações no Livro Caixa */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#161F26] border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Wallet className="w-4 h-4 text-emerald-400" />
              <span>Livro Caixa Recente</span>
            </h3>
            <Link href="/app/livro-caixa" className="text-xs text-[#CD8C38] hover:underline font-semibold">
              Ver histórico →
            </Link>
          </div>

          <div className="space-y-2.5">
            {cashbook.slice(0, 5).map((entry) => (
              <div
                key={entry.id}
                className="p-3 rounded-xl bg-black/25 border border-white/5 flex items-center justify-between text-xs"
              >
                <div className="space-y-0.5">
                  <p className="font-semibold text-white line-clamp-1">{entry.description}</p>
                  <span className="text-[10px] text-zinc-400">
                    {new Date(entry.date).toLocaleDateString('pt-BR')} • {entry.category}
                  </span>
                </div>

                <span
                  className={`font-bold shrink-0 ml-2 ${
                    entry.type === 'IN' ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {entry.type === 'IN' ? '+' : '-'} R$ {entry.amount.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
