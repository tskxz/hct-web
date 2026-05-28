"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import type { Cenario } from "@/interfaces/cenario";

export default function CenariosProtected({ cenarios }: { cenarios: Cenario[] }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showError, setShowError] = useState(false);

  const expectedPassword =
    process.env.NEXT_PUBLIC_AULAS_PASSWORD?.trim() ?? "istec";

  useEffect(() => {
    const storedAuth =
      typeof window !== "undefined"
        ? window.localStorage.getItem("aulas_autodirigidas_auth")
        : null;

    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const validatePassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passwordInput.trim() === expectedPassword) {
      window.localStorage.setItem("aulas_autodirigidas_auth", "true");
      setIsAuthenticated(true);
      setShowError(false);
      return;
    }

    setShowError(true);
    setPasswordInput("");
  };

  return (
    <div className="relative">
      <div className="space-y-8">
        <h1 className="text-5xl font-bold tracking-tight mb-6">Cenários</h1>
        <p className="text-lg leading-relaxed text-slate-700 mb-12">
          Navegue pelos cenários disponíveis e clique em cada um para ver os ficheiros de situação/problema e resposta.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cenarios.map((cenario) => (
            <Link
              key={cenario.slug}
              href={`/cenarios/${cenario.slug}`}
              className="aspect-square rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 hover:bg-white flex items-center justify-center text-center"
            >
              <span className="text-2xl font-semibold text-slate-900 hover:text-slate-700">
                {cenario.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {!isAuthenticated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-slate-200/50 bg-white p-8 shadow-2xl shadow-slate-900/20 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Acesso protegido
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Introduza a palavra-passe para aceder à página de cenários.
            </p>

            <form className="mt-6 space-y-4" onSubmit={validatePassword}>
              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Palavra-passe
                </span>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(event) => setPasswordInput(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-500/30"
                  autoComplete="current-password"
                  placeholder="********"
                />
              </label>

              {showError && (
                <p className="text-sm text-rose-600 dark:text-rose-400">
                  Palavra-passe incorreta. Tente novamente.
                </p>
              )}

              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-blue-400"
              >
                Confirmar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
