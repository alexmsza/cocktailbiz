'use client';

import { useState } from 'react';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  Plus, 
  FileSpreadsheet, 
  Filter, 
  Download,
  Calendar,
  Sparkles
} from 'lucide-react';
import { initialCashbook } from '@/data/mockManagementData';
import { CashbookRecord } from '@/types';

export default function LivroCaixaPage() {
  const [records, setRecords] = useState<CashbookRecord[]>(initialCashbook);
  const [filterType, setFilterType] = useState<'ALL' | 'IN' | 'OUT'>('ALL');

  // Form states
  const [newDesc, setNewDesc] = useState('');
  const [newAmount, setNewAmount] = useState<number | ''>('');
  const [newType, setNewType] = useState<'IN' | 'OUT'>('OUT');
  const [newCategory, setNewCategory] = useState<any>('Bebidas');
  const [newDate, setNewDate] = useState('2026-10-20');

  const totalIn = records.filter((r) => r.type === 'IN').reduce((acc, r) => acc + r.amount, 0);
  const totalOut = records.filter((r) => r.type === 'OUT').reduce((acc, r) => acc + r.amount, 0);
  const currentBalance = totalIn - totalOut;

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDesc.trim() || !newAmount || Number(newAmount) <= 0) return;

    const newRecord: CashbookRecord = {
      id: `csh-${Date.now()}`,
      date: newDate,
      type: newType,
      category: newCategory,
      description: newDesc,
      amount: Number(newAmount)
    };

    setRecords([newRecord, ...records]);
    setNewDesc('');
    setNewAmount('');
  };

  const filteredRecords = records.filter((r) => {
    if (filterType === 'ALL') return true;
    return r.type === filterType;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            <Wallet className="w-4 h-4" />
            <span>Controle Diário de Finanças (Anexo 16.3 Digital)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Livro Caixa & Separação PF/PJ</h1>
          <p className="text-xs text-zinc-400 mt-1">
            Nunca confie na memória: registre cada real que entra e sai para manter o caixa blindado e auditado.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar Relatório</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[#161F26] border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Total de Entradas</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-emerald-400">
            + R$ {totalIn.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <p className="text-[10px] text-zinc-500">Cachês recebidos e sinais de eventos</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#161F26] border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Total de Saídas</span>
            <ArrowDownRight className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl font-black text-rose-400">
            - R$ {totalOut.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <p className="text-[10px] text-zinc-500">Insumos, bebidas, gelo e staff</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#161F26] border border-[#CD8C38]/40 space-y-1">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Saldo Líquido Acumulado</span>
            <Wallet className="w-4 h-4 text-[#CD8C38]" />
          </div>
          <div className="text-2xl font-black text-white">
            R$ {currentBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <p className="text-[10px] text-zinc-400">Caixa real disponível da empresa PJ</p>
        </div>
      </div>

      {/* Grid: Formulário de Lançamento Rápido + Histórico */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Novo Lançamento */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-[#161F26] border border-white/10 shadow-xl space-y-4">
          <div className="border-b border-white/10 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Plus className="w-4 h-4 text-[#CD8C38]" />
              <span>Novo Lançamento no Caixa</span>
            </h3>
            <p className="text-xs text-zinc-400">Registro imediato para não esquecer detalhes</p>
          </div>

          <form onSubmit={handleAddEntry} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-zinc-300 mb-1">Tipo</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => { setNewType('IN'); setNewCategory('Vendas/Cachê'); }}
                    className={`py-2 text-xs font-bold rounded-xl border transition-colors ${
                      newType === 'IN'
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                        : 'bg-black/30 text-zinc-400 border-white/5'
                    }`}
                  >
                    Entrada
                  </button>
                  <button
                    type="button"
                    onClick={() => { setNewType('OUT'); setNewCategory('Bebidas'); }}
                    className={`py-2 text-xs font-bold rounded-xl border transition-colors ${
                      newType === 'OUT'
                        ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                        : 'bg-black/30 text-zinc-400 border-white/5'
                    }`}
                  >
                    Saída
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-zinc-300 mb-1">Data</label>
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full p-2 rounded-xl bg-black/40 border border-white/15 text-white text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-zinc-300 mb-1">Categoria</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as any)}
                className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs"
              >
                {newType === 'IN' ? (
                  <>
                    <option value="Vendas/Cachê">Vendas / Cachê de Evento</option>
                    <option value="Outros">Outras Entradas</option>
                  </>
                ) : (
                  <>
                    <option value="Bebidas">Bebidas & Destilados</option>
                    <option value="Hortifrúti">Hortifrúti & Frutas</option>
                    <option value="Gelo & Descartáveis">Gelo & Descartáveis</option>
                    <option value="Equipe/Staff">Diária de Staff / Barback</option>
                    <option value="MEI/Impostos">DAS MEI / Taxas Bancárias</option>
                    <option value="Outros">Outras Despesas</option>
                  </>
                )}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-zinc-300 mb-1">Descrição</label>
              <input
                type="text"
                required
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                placeholder="Ex: Compra de 5 caixas de morango, Sinal Casamento"
                className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#CD8C38]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-zinc-300 mb-1">Valor (R$)</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-zinc-400">R$</span>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="0,00"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#CD8C38]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-[#CD8C38] to-[#C2410C] text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#CD8C38]/20 cursor-pointer"
            >
              Confirmar Lançamento
            </button>
          </form>
        </div>

        {/* Tabela do Livro Caixa */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-[#161F26] border border-white/10 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <span>Extrato de Movimentações ({filteredRecords.length})</span>
            </h3>

            <div className="flex items-center gap-1.5 text-xs">
              <button
                onClick={() => setFilterType('ALL')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                  filterType === 'ALL' ? 'bg-white/15 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilterType('IN')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                  filterType === 'IN' ? 'bg-emerald-500/20 text-emerald-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Entradas
              </button>
              <button
                onClick={() => setFilterType('OUT')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                  filterType === 'OUT' ? 'bg-rose-500/20 text-rose-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Saídas
              </button>
            </div>
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
            {filteredRecords.map((r) => (
              <div
                key={r.id}
                className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between text-xs hover:border-white/15 transition-colors"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{r.description}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-zinc-300">
                      {r.category}
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-400">
                    Data: {new Date(r.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>

                <div className="text-right">
                  <span
                    className={`font-black text-sm block ${
                      r.type === 'IN' ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {r.type === 'IN' ? '+' : '-'} R$ {r.amount.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
