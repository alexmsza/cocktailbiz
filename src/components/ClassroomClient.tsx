'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  UploadCloud, 
  Send, 
  Award,
  Video,
  FileCheck
} from 'lucide-react';
import { CourseModule } from '@/types';

interface ClassroomClientProps {
  currentModule: CourseModule;
  prevModule?: CourseModule;
  nextModule?: CourseModule;
}

export function ClassroomClient({ currentModule, prevModule, nextModule }: ClassroomClientProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [submissionText, setSubmissionText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const activeVideo = currentModule.videos[activeVideoIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submissionText.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Breadcrumb & Nav */}
      <div className="flex items-center justify-between">
        <Link
          href="/curso"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a Trilha do Curso</span>
        </Link>

        <div className="flex items-center gap-2">
          {prevModule && (
            <Link
              href={`/curso/modulo/${prevModule.id}`}
              className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors"
            >
              ← Módulo 0{prevModule.id}
            </Link>
          )}
          {nextModule && (
            <Link
              href={`/curso/modulo/${nextModule.id}`}
              className="px-3 py-1.5 rounded-lg text-xs bg-[#CD8C38]/20 hover:bg-[#CD8C38]/30 text-[#CD8C38] border border-[#CD8C38]/30 font-semibold transition-colors"
            >
              Módulo 0{nextModule.id} →
            </Link>
          )}
        </div>
      </div>

      {/* Main Video Player & Playlist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Video Player */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
              title={activeVideo.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="p-4 rounded-xl bg-[#161F26] border border-white/10">
            <div className="flex items-center gap-2 text-xs text-[#CD8C38] font-semibold">
              <Video className="w-4 h-4" />
              <span>Aula em Reprodução ({activeVideoIndex + 1} de {currentModule.videos.length})</span>
            </div>
            <h1 className="text-xl font-extrabold text-white mt-1">{activeVideo.title}</h1>
            {activeVideo.speaker && (
              <p className="text-xs text-zinc-400 mt-1">
                Convidado / Apresentador: <strong className="text-zinc-300">{activeVideo.speaker}</strong>
              </p>
            )}
          </div>
        </div>

        {/* Playlist & Topics */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-2xl bg-[#161F26] border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center justify-between">
              <span>Vídeos Deste Encontro</span>
              <span className="text-xs text-[#CD8C38]">{currentModule.videos.length} aulas</span>
            </h3>

            <div className="space-y-2">
              {currentModule.videos.map((vid, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVideoIndex(idx)}
                  className={`w-full text-left p-3 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                    activeVideoIndex === idx
                      ? 'bg-[#CD8C38]/20 border border-[#CD8C38]/40 text-white'
                      : 'bg-black/20 hover:bg-white/5 border border-white/5 text-zinc-400'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg shrink-0 ${activeVideoIndex === idx ? 'bg-[#CD8C38] text-black' : 'bg-white/10 text-zinc-300'}`}>
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                  <div>
                    <p className={`font-semibold line-clamp-2 ${activeVideoIndex === idx ? 'text-white' : 'text-zinc-300'}`}>
                      {vid.title}
                    </p>
                    {vid.speaker && (
                      <p className="text-[10px] text-zinc-400 mt-0.5">{vid.speaker}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#161F26] border border-white/10 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">Conceitos Abordados</h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              {currentModule.topics.map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CD8C38] shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Resumo Teórico do Módulo */}
      <div className="p-8 rounded-2xl bg-[#161F26] border border-white/10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CD8C38]/10 text-[#CD8C38] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Diretrizes Pedagógicas</span>
        </div>

        <h2 className="text-2xl font-bold text-white">{currentModule.title}</h2>
        <p className="text-sm text-zinc-300 leading-relaxed max-w-4xl">{currentModule.summary}</p>
      </div>

      {/* Seção Interativa do Desafio Prático */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-[#18232C] via-[#1B1914] to-[#141B21] border border-[#CD8C38]/40 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CD8C38]/20 text-[#CD8C38] text-xs font-bold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Desafio Mão na Massa • Vale 100 Pontos</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">{currentModule.challenge.title}</h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-3xl">
              {currentModule.challenge.description}
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-3xl font-extrabold text-[#CD8C38]">+100</span>
            <p className="text-[11px] text-zinc-400">Pontos de Certificação</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
          <p className="text-xs font-bold text-white uppercase tracking-wider">Instruções para Resolução:</p>
          <ul className="space-y-1.5 text-xs text-zinc-300">
            {currentModule.challenge.instructions.map((inst, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#CD8C38] font-bold">{i + 1}.</span>
                <span>{inst}</span>
              </li>
            ))}
          </ul>
        </div>

        {isSubmitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <FileCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Desafio Enviado com Sucesso!</h4>
            <p className="text-xs text-zinc-300 max-w-md mx-auto">
              Parabéns! Sua resposta foi computada e <strong>+100 pontos</strong> foram creditados no seu progresso. Continue para o próximo módulo.
            </p>
            {nextModule && (
              <div className="pt-2">
                <Link
                  href={`/curso/modulo/${nextModule.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
                >
                  <span>Ir para o Módulo 0{nextModule.id}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-2">
                Sua Resposta / Reflexão Executiva:
              </label>
              <textarea
                rows={4}
                required
                value={submissionText}
                onChange={(e) => setSubmissionText(e.target.value)}
                placeholder="Descreva aqui sua resposta detalhada para as perguntas do desafio..."
                className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[#CD8C38] transition-colors resize-y"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-300 cursor-pointer transition-colors">
                <UploadCloud className="w-4 h-4 text-[#CD8C38]" />
                <span>{fileName || 'Anexar Foto ou Arquivo (Opcional)'}</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) setFileName(e.target.files[0].name);
                  }}
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-[#CD8C38] to-[#C2410C] text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#CD8C38]/20 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar Desafio (+100 pts)</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
