"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import type { Post } from "@/interfaces/post";

export default function AulasAutodirigidasProtected({
  posts,
}: {
  posts: Post[];
}) {
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
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-12 border-b pb-6 border-neutral-200 dark:border-slate-800">
          Aulas Auto-dirigidas
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="p-6 rounded-lg border border-neutral-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors bg-white dark:bg-slate-900 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                <Link
                  href={`/posts/${post.slug}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              {post.excerpt && (
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              <div className="mt-4">
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Ler →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-gray-500 dark:text-slate-500">Vazio.</p>
        )}
      </div>

      {!isAuthenticated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-slate-200/50 bg-white p-8 shadow-2xl shadow-slate-900/20 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Acesso protegido
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Introduza a palavra-passe para aceder à página de aulas autodirigidas.
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
