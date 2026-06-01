import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiência profissional",
  description: "Experiências profissionais e estágios de Tanjil Shahid Khan.",
};

export default function ExperienciaProfissional() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Experiência profissional
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            Aqui apresento a minha experiência profissional e os estágios que contribuíram para o meu percurso em desenvolvimento de software.
          </p>
        </header>

        <section className="space-y-6">
          <div className="space-y-6">
            <article className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 sm:grid-cols-[96px_minmax(0,1fr)] sm:items-center">
              <div className="flex items-center justify-center">
                <img src="/assets/blog/empresas/cogniwave_logo.jpg" alt="Cogniwave" className="h-20 w-20 object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Cogniwave · Estágio</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Web Developer</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Mar 2025 – Jul 2025 · 5 meses · Portugal · Remoto</p>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  Estágio curricular: desenvolvi uma aplicação web com Nuxt.js sobre memórias de animais. Nota: 20. Ferramentas: Nuxt e Git.
                </p>
              </div>
            </article>

            <article className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 sm:grid-cols-[96px_minmax(0,1fr)] sm:items-center">
              <div className="flex items-center justify-center">
                <img src="/assets/blog/empresas/vilhena.jpg" alt="Filipa de Vilhena" className="h-20 w-20 object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Filipa de Vilhena · Estágio</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Web Developer</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Jun 2023 – Jul 2023 · 2 meses · Porto, Portugal · Presencial</p>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  Estágio curricular: desenvolvi uma aplicação web com Laravel sobre o projeto “Eco-Escolas”. Nota: 19. Ferramentas: Laravel e PHP.
                </p>
              </div>
            </article>

            <article className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 sm:grid-cols-[96px_minmax(0,1fr)] sm:items-center">
              <div className="flex items-center justify-center">
                <img src="/assets/blog/empresas/colegio-caja-granada.jpg" alt="Colegio Caja General" className="h-20 w-20 object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Colegio Caja General de Ahorros de Granada · Estágio</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Técnico de Informática</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Mai 2023 – Jun 2023 · 2 meses · Granada, Espanha · Presencial</p>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  Colaborei em desenvolvimento web com a plataforma Wix e contribuí para a otimização de sistemas de TI, melhorando eficiência e desempenho.
                </p>
              </div>
            </article>

            <article className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 sm:grid-cols-[96px_minmax(0,1fr)] sm:items-center">
              <div className="flex items-center justify-center">
                <img src="/assets/blog/empresas/agifodent_logo.jpg" alt="AGIFODENT" className="h-20 w-20 object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">AGIFODENT · Estágio</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Técnico de Informática</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Mai 2023 · 1 mês · Granada, Espanha · Presencial</p>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  Instalação de sistemas operacionais Linux em computadores para melhorar a infraestrutura técnica da empresa.
                </p>
              </div>
            </article>

            <article className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 sm:grid-cols-[96px_minmax(0,1fr)] sm:items-center">
              <div className="flex items-center justify-center">
                <img src="/assets/blog/empresas/spain.png" alt="Palacio de Congresos de Granada" className="h-20 w-20 object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Palacio de Exposiciones y Congresos de Granada · Estágio</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Técnico de Palco</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Mai 2023 · 1 mês · Granada, Espanha · Presencial</p>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  Operação e manutenção de iluminação, som e projeção durante eventos ao vivo no Palacio de Congresos de Granada.
                </p>
              </div>
            </article>

            <article className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 sm:grid-cols-[96px_minmax(0,1fr)] sm:items-center">
              <div className="flex items-center justify-center">
                <img src="/assets/blog/empresas/vanguarda_solues_e_gesto_logo.jpg" alt="Vanguarda Soluções e Gestão" className="h-20 w-20 object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Vanguarda Soluções e Gestão · Estágio</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Support Worker</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Mai 2022 – Jul 2022 · 3 meses · Maia, Porto, Portugal · Presencial</p>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  Estágio curricular no departamento de suporte: encaminhei tickets para a equipa de desenvolvimento e ajudei a coordenar as solicitações de clientes.
                </p>
              </div>
            </article>

            <article className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 sm:grid-cols-[96px_minmax(0,1fr)] sm:items-center">
              <div className="flex items-center justify-center">
                <img src="/assets/blog/empresas/shopping_brasilia_logo.jpg" alt="Shopping Brasília" className="h-20 w-20 object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Shopping Brasília · Freelancer</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Store Associate</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Jun 2011 – Mar 2014 · 2 anos 10 meses · Porto, Portugal · Presencial</p>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  Trabalhei como caixa na loja Tanjil, apoiando no preço e na disposição de produtos para exposição e venda.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
