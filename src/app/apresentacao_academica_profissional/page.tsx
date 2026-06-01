import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apresentação académica",
  description: "Formação académica de Tanjil Shahid Khan.",
};

export default function ApresentacaoAcademicaProfissional() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Apresentação académica
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            Nesta página apresento a minha formação académica e as aprendizagens curriculares que marcam o meu percurso em desenvolvimento de software.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Formação</h2>
          <div className="space-y-4">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">ISTEC - Instituto Superior de Tecnologias Avançadas do Porto</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Nível 6, Licenciatura em Engenharia Informática</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Computer Science</p>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Set 2025 – Presente</p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">ISTEC - Instituto Superior de Tecnologias Avançadas do Porto</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Nível 5, CTESP Desenvolvimento de Software</h3>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Out 2023 – Set 2025</p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Escola Secundária Filipa de Vilhena</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Nível 4, Técnico de Gestão e Programação de Sistemas Informáticos</h3>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Set 2020 – Jul 2023</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
