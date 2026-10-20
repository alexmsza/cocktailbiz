'use client';

import { useState } from 'react';
import { 
  CalendarCheck, 
  Plus, 
  QrCode, 
  Copy, 
  Check, 
  ExternalLink, 
  DollarSign, 
  Users, 
  Wine,
  Phone,
  Sparkles
} from 'lucide-react';
import { initialEvents } from '@/data/mockManagementData';
import { EventProposal } from '@/types';

export default function EventosPixPage() {
  const [events, setEvents] = useState<EventProposal[]>(initialEvents);
  const [selectedProposal, setSelectedProposal] = useState<EventProposal | null>(initialEvents[0]);
  const [isCopied, setIsCopied] = useState(false);

  // Form novo evento
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [eventType, setEventType] = useState<'Casamento' | 'Aniversário' | 'Corporativo' | 'Festa Privada'>('Casamento');
  const [eventDate, setEventDate] = useState('2026-11-28');
  const [guestCount, setGuestCount] = useState(80);
  const [totalAmount, setTotalAmount] = useState(3200);

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || totalAmount <= 0) return;

    const newEvt: EventProposal = {
      id: `evt-${Date.now()}`,
      clientName,
      clientPhone: clientPhone || '(81) 99999-0000',
      eventType,
      eventDate,
      guestCount,
      cocktails: ['Caipiroska de Morango', 'Gin Tônica Botânica'],
      totalAmount,
      depositAmount: totalAmount / 2,
      status: 'Orçamento'
    };

    setEvents([newEvt, ...events]);
    setSelectedProposal(newEvt);
    setIsModalOpen(false);
    setClientName('');
  };

  const handleCopyPix = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CD8C38] uppercase tracking-wider">
            <CalendarCheck className="w-4 h-4" />
            <span>Controle de Vendas & Propostas (Anexo 16.4 Digital)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Gestão de Eventos & Sinal com Pix</h1>
          <p className="text-xs text-zinc-400 mt-1">
            Gere orçamentos executivos para clientes e garanta 50% de sinal de reserva da data via Pix instantâneo.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#CD8C38] to-[#C2410C] text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#CD8C38]/20 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Orçamento de Evento</span>
        </button>
      </div>

      {/* Grid: Lista de Eventos + Painel da Proposta Ativa */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Coluna Esquerda: Pipeline de Vendas */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
            Contratos & Orçamentos ({events.length})
          </h3>

          <div className="space-y-2.5">
            {events.map((evt) => (
              <button
                key={evt.id}
                onClick={() => setSelectedProposal(evt)}
                className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between ${
                  selectedProposal?.id === evt.id
                    ? 'bg-[#161F26] border-[#CD8C38] shadow-lg shadow-[#CD8C38]/5'
                    : 'bg-black/30 hover:bg-[#161F26]/60 border-white/5 text-zinc-400'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">{evt.clientName}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-zinc-300">
                      {evt.eventType}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Data: {new Date(evt.eventDate).toLocaleDateString('pt-BR')} • {evt.guestCount} convidados
                  </p>
                  <p className="text-[10px] text-zinc-500">
                    Contato: {evt.clientPhone}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-black text-white block">
                    R$ {evt.totalAmount.toFixed(2)}
                  </span>
                  <span
                    className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                      evt.status === 'Sinal Pago' || evt.status === 'Confirmado'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-amber-500/20 text-amber-400'
                    }`}
                  >
                    {evt.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Coluna Direita: Proposta Comercial Interativa com QR Code Pix */}
        <div className="lg:col-span-7">
          {selectedProposal ? (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#161F26] border border-white/10 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-zinc-300">
                    Proposta Comercial de Coquetelaria
                  </span>
                  <h2 className="text-xl font-black text-white mt-2">{selectedProposal.clientName}</h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {selectedProposal.eventType} • {new Date(selectedProposal.eventDate).toLocaleDateString('pt-BR')}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs text-zinc-400 block uppercase font-medium">Valor Total do Contrato</span>
                  <span className="text-2xl font-black text-white">
                    R$ {selectedProposal.totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Detalhes do Cardápio & Serviços */}
              <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-2">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Cardápio Contratado:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProposal.cocktails.map((c, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-[#CD8C38]/15 border border-[#CD8C38]/30 text-xs font-semibold text-[#CD8C38]">
                      🍸 {c}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-zinc-400 pt-2">
                  Incluso: Barware profissional de inox, gelo filtrado em abundância, insumos frescos, descartáveis biodegradáveis e equipe dimensionada.
                </p>
              </div>

              {/* Seção Pix: 50% de Sinal de Reserva */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121A21] to-[#1E1710] border border-[#CD8C38]/40 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#CD8C38]/20 text-[#CD8C38]">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Sinal de Reserva da Data (50%)</h4>
                      <p className="text-[11px] text-zinc-400">Garante o bloqueio da data na agenda</p>
                    </div>
                  </div>

                  <span className="text-lg font-black text-emerald-400">
                    R$ {selectedProposal.depositAmount.toFixed(2)}
                  </span>
                </div>

                {/* Simulador de QR Code Pix */}
                <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="w-28 h-28 bg-white p-2 rounded-xl flex items-center justify-center shrink-0">
                    {/* QR Code Icon / Visual Placeholder */}
                    <div className="w-full h-full border-2 border-black flex flex-col items-center justify-center text-black text-center p-1">
                      <QrCode className="w-16 h-16 text-black" />
                      <span className="text-[8px] font-black uppercase tracking-tighter">Pix BACEN</span>
                    </div>
                  </div>

                  <div className="space-y-2 w-full text-center sm:text-left">
                    <p className="text-xs font-semibold text-zinc-200">
                      Chave Pix Copia e Cola Gerada:
                    </p>
                    <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400 break-all select-all">
                      00020126580014br.gov.bcb.pix0136{selectedProposal.id}-cocktailbiz-sinal50-reserva
                    </div>
                    <button
                      onClick={handleCopyPix}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#CD8C38] hover:bg-[#E5A754] text-zinc-950 transition-colors"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Chave Copiada!' : 'Copiar Código Pix'}</span>
                    </button>
                  </div>
                </div>

                <p className="text-[10px] text-zinc-400 text-center">
                  Após o pagamento do sinal, a data é confirmada e o saldo de 50% é quitado no dia do evento.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-12 rounded-3xl bg-[#161F26] border border-white/10 text-center text-zinc-500">
              Selecione um evento à esquerda para visualizar a proposta comercial.
            </div>
          )}
        </div>
      </div>

      {/* Modal Novo Evento */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#161F26] border border-white/15 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white">Cadastrar Novo Evento / Orçamento</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-zinc-400 hover:text-white font-bold p-1">
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateEvent} className="space-y-4 text-xs">
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Nome do Contratante / Cliente</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ex: Gabriela Duarte, Cerimonial Requinte"
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">WhatsApp / Telefone</label>
                  <input
                    type="text"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="(81) 98888-7777"
                    className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Tipo de Evento</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  >
                    <option value="Casamento">Casamento</option>
                    <option value="Aniversário">Aniversário</option>
                    <option value="Corporativo">Corporativo</option>
                    <option value="Festa Privada">Festa Privada</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Data do Evento</label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Qtd. Convidados</label>
                  <input
                    type="number"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Valor Total Proposto (R$)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white font-bold"
                />
                <p className="text-[10px] text-zinc-400 mt-1">
                  Sinal de reserva (50%): R$ {(totalAmount / 2).toFixed(2)}
                </p>
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
                  Salvar e Gerar Proposta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
