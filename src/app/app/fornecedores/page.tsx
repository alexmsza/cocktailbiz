'use client';

import { useState } from 'react';
import { 
  Truck, 
  Star, 
  Phone, 
  Plus, 
  ShieldCheck, 
  AlertCircle, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { initialSuppliers } from '@/data/mockManagementData';
import { SupplierItem } from '@/types';

export default function FornecedoresPage() {
  const [suppliers, setSuppliers] = useState<SupplierItem[]>(initialSuppliers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState<any>('Destilados & Bebidas');
  const [terms, setTerms] = useState('');

  const handleAddSupplier = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newSup: SupplierItem = {
      id: `sup-${Date.now()}`,
      name,
      contact: contact || 'Central de Vendas',
      phone: phone || '(81) 99999-1111',
      category,
      rating: 5,
      terms: terms || 'À vista com desconto no Pix',
      status: 'Homologado'
    };

    setSuppliers([newSup, ...suppliers]);
    setIsModalOpen(false);
    setName('');
    setTerms('');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CD8C38] uppercase tracking-wider">
            <Truck className="w-4 h-4" />
            <span>Gestão de Suprimentos (Módulo 5 do Curso)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Fornecedores & Parceiros Homologados
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            As 3 Etapas: Levantamento, Negociação Estruturada e Parceria sem Dependência Única (mantenha sempre plano B e C).
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#CD8C38] to-[#C2410C] text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#CD8C38]/20 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Novo Fornecedor</span>
        </button>
      </div>

      {/* Regra de Ouro Banner */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs text-zinc-300">
          <strong className="text-white block font-bold">Diretriz Crítica do Curso:</strong>
          Nunca dependa exclusivamente de um único distribuidor de bebidas ou produtor de hortifrúti. Se um imprevisto acontecer no dia de um casamento, sua operação precisa de plano B pronto para acionamento imediato.
        </div>
      </div>

      {/* Grid de Fornecedores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {suppliers.map((sup) => (
          <div
            key={sup.id}
            className="p-6 rounded-2xl bg-[#161F26] border border-white/10 hover:border-white/20 transition-all shadow-xl space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#CD8C38]/15 text-[#CD8C38] border border-[#CD8C38]/30">
                  {sup.category}
                </span>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(sup.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <h3 className="text-base font-bold text-white mt-1">{sup.name}</h3>

              <p className="text-xs text-zinc-400">
                Contato Responsável: <strong className="text-zinc-200">{sup.contact}</strong>
              </p>

              <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs text-zinc-300">
                <p className="text-[10px] text-zinc-500 font-semibold uppercase mb-0.5">Condições Negociadas:</p>
                <p>{sup.terms}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-zinc-400 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#10B981]" />
                {sup.phone}
              </span>

              <a
                href={`https://wa.me/55${sup.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#10B981]/20 hover:bg-[#10B981]/30 text-[#10B981] border border-[#10B981]/30 transition-colors"
              >
                <span>Fazer Pedido no WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Novo Fornecedor */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md p-6 rounded-3xl bg-[#161F26] border border-white/15 shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white">Homologar Novo Fornecedor</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-zinc-400 hover:text-white font-bold p-1">
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSupplier} className="space-y-3">
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Razão Social / Nome Fantasia</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Distribuidora Nordeste Spirits"
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Categoria de Fornecimento</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                >
                  <option value="Destilados & Bebidas">Destilados & Bebidas</option>
                  <option value="Hortifrúti Fresco">Hortifrúti Fresco</option>
                  <option value="Gelo Filtrado">Gelo Filtrado</option>
                  <option value="Descartáveis & Vidraria">Descartáveis & Vidraria</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Nome do Vendedor</label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Ex: Carlos"
                    className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">WhatsApp de Pedidos</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(81) 98888-0000"
                    className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Prazos e Condições Negociadas</label>
                <textarea
                  rows={2}
                  value={terms}
                  onChange={(e) => setTerms(e.target.value)}
                  placeholder="Ex: Faturamento 28 dias ou Pix à vista com 5% de desconto"
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-zinc-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl font-bold bg-[#CD8C38] text-zinc-950 hover:bg-[#E5A754]"
                >
                  Homologar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
