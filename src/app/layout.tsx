import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Suspense } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CocktailBiz OS & LMS — Dose de Empreendedorismo para Bartenders',
  description: 'Plataforma integrada de capacitação e gestão operacional e financeira para profissionais e negócios de coquetelaria.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#0E1419] text-[#F8FAFC]">
        <Suspense fallback={<div className="h-16 w-full border-b border-white/10 bg-[#0E1419]" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
