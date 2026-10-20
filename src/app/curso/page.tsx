'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  CheckCircle2, 
  Play, 
  Award, 
  Sparkles, 
  ArrowRight, 
  FileSpreadsheet, 
  FileText, 
  ExternalLink,
  Clock,
  Check
} from 'lucide-react';
import { courseModules } from '@/data/courseData';

export default function CursoHubPage() {
  // Estado local para simular progresso do aluno
  const [completedModules, setCompletedModules] = useState<number[]>([1]);
  const [submittedChallenges, setSubmittedChallenges] = useState<number[]>([1]);

  const totalPoints = submittedChallenges.length * 100;
  const progressPercent = (completedModules.length / courseModules.length) * 100;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#161F26] via-[#1A2630] to-[#1F1710] border border-white/10 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CD8C38]/20 border border-[#CD8C38]/30 text-[#CD8C38] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formação Completa • 5 Encontros</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dose de Empreendedorismo
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Mercado e Oportunidades para Bartenders. Domine da postura de negócio à engenharia de cardápio, precificação e orquestração de eventos.
          </p>

          {/* Gamification Progress Bar */}
          <div className="pt-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-zinc-300">Progresso da Trilha: {completedModules.length} de 5 Módulos</span>
              <span className="text-[#CD8C38]">{totalPoints} / 500 Pontos</span>
            </div>
            <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-[#CD8C38] to-[#C2410C] rounded-full transition-all duration-500" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Caixa de Ferramentas & Anexos Operacionais */}
      <div className="p-6 rounded-2xl bg-[#161F26] border border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-[#CD8C38]" />
              <span>Modelos e Anexos Oficiais do Curso</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Arquivos de apoio distribuídos nas aulas para download ou uso direto no CocktailBiz OS.
            </p>
          </div>
          <a
            href="https://app.notion.com/p/Dose-de-Empreendedorismo-Gest-o-Mercado-Oportunidades-para-Bartenders-3ffd772c5d1281ab9570dacc7c7d48af"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-[#CD8C38] border border-white/10 transition-colors shrink-0"
          >
            <span>Ver no Notion Hub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Livro Caixa 2023</p>
                <p className="text-[11px] text-zinc-400">Planilha Excel (Anexo 16.3)</p>
              </div>
            </div>
            <Link href="/app/livro-caixa" className="text-xs font-semibold text-[#CD8C38] hover:underline">
              Abrir Web
            </Link>
          </div>

          <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Controle de Vendas</p>
                <p className="text-[11px] text-zinc-400">Planilha Excel (Anexo 16.4)</p>
              </div>
            </div>
            <Link href="/app/eventos" className="text-xs font-semibold text-[#CD8C38] hover:underline">
              Abrir Web
            </Link>
          </div>

          <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#CD8C38]/20 text-[#CD8C38]">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Ficha Técnica Drinks</p>
                <p className="text-[11px] text-zinc-400">Modelo DOCX (Anexo 21.1)</p>
              </div>
            </div>
            <Link href="/app/fichas-tecnicas" className="text-xs font-semibold text-[#CD8C38] hover:underline">
              Abrir Web
            </Link>
          </div>
        </div>
      </div>

      {/* Grid dos Módulos */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#CD8C38]" />
          <span>Trilha de Aprendizagem</span>
        </h2>

        <div className="space-y-4">
          {courseModules.map((mod) => {
            const isCompleted = completedModules.includes(mod.id);
            const isSubmitted = submittedChallenges.includes(mod.id);

            return (
              <div
                key={mod.id}
                className="p-6 rounded-2xl bg-[#161F26] border border-white/10 hover:border-white/20 transition-all shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#CD8C38]/20 text-[#CD8C38] text-xs font-bold flex items-center justify-center">
                      0{mod.id}
                    </span>
                    <h3 className="text-base font-bold text-white">{mod.title}</h3>
                    {isCompleted && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <Check className="w-3 h-3" /> Concluído
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-medium text-[#CD8C38]">{mod.subtitle}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{mod.summary}</p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" /> {mod.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Play className="w-3.5 h-3.5 text-zinc-400" /> {mod.videos.length} Aulas em Vídeo
                    </span>
                    <span className="text-emerald-400 font-medium">
                      Desafio: {mod.challenge.points} pts ({isSubmitted ? 'Enviado' : 'Pendente'})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`/curso/modulo/${mod.id}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#CD8C38] to-[#C2410C] text-white hover:opacity-90 transition-opacity"
                  >
                    <span>Entrar na Sala de Aula</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
