"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<"trabalhos" | "apresentacao" | null>(null);

  return (
    <nav className="border-b border-neutral-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image src="/assets/logotipo-istec.png" alt="logotipo-istec" height={200} width={200} />
          <Link href="/" className="font-bold hover:underline text-lg text-black dark:text-white">
            E-portefólio HCT
          </Link>
        </div>


        <div className="flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white">
            Início
          </Link>

          

          <div className="relative inline-block text-left">
            <button
              onClick={() => setOpenDropdown(openDropdown === "apresentacao" ? null : "apresentacao")}
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              Apresentação
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>


            {openDropdown === "apresentacao" && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-slate-700 focus:outline-none">
                <div className="py-1">
                  <Link
                    href="/apresentacao_pessoal"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Pessoal
                  </Link>
                  <Link
                    href="/apresentacao_academica_profissional"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                    onClick={() => setOpenDropdown(null)}
                  >
                   Percurso Académico
                  </Link>
                  <Link
                    href="/experiencia_profissional"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                    onClick={() => setOpenDropdown(null)}
                  >
                   Experiência Profissional
                  </Link>
                  <Link
                    href="/apresentacao_competencias_digitais"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Competências Digitais
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="relative inline-block text-left">
            <button
              onClick={() => setOpenDropdown(openDropdown === "trabalhos" ? null : "trabalhos")}
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              Evidências de Aprendizagem
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>


            {openDropdown === "trabalhos" && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-slate-700 focus:outline-none">
                <div className="py-1">
                  <Link
                    href="/posts/serep"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Mini-Artigo
                  </Link>
                  <Link
                    href="/cenarios"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Cenários
                  </Link>
                  <Link
                    href="/noticias"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Notícias
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/relatorio-reflexivo" className="text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white">
            Relatório reflexivo
          </Link>
          <Link href="/contacto" className="text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white">
            Contacto
          </Link>
          
        </div>

      </div>
    </nav>
  );
}