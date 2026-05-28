import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mim",
  description:
    "Página de apresentação pessoal de Tanjil Shahid Khan: formação, interesses e competências em Engenharia Informática.",
};

export default function ApresentacaoPessoal() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
        <section className="lg:max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Sobre mim
          </h1>
          <div className="mt-6 space-y-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Olá a todos, sou <strong>Tanjil Shahid Khan</strong>. Atualmente frequento a Licenciatura em Engenharia Informática no ISTEC-Porto. Anteriormente, concluí o Curso Técnico e Superior Profissional de Desenvolvimento de Software.
            </p>
            <p>
              Tenho 21 anos e gosto de viajar, caminhar e manter-me ativo com exercício físico. Sou do Porto, em Portugal.
            </p>
            <p>
              Sou apaixonado por programação e muito entusiasmado por aprender novas tecnologias. Tenho um interesse especial em desenvolver projetos de software e adoro o processo de criar e otimizar sistemas.
            </p>
            <p>
              O meu foco principal está no desenvolvimento backend, integração de APIs e modelação de dados, áreas nas quais procuro crescer e especializar-me cada vez mais.
            </p>
            <p>
              No plano profissional, sou organizado, determinado e focado em alcançar resultados. No trabalho empenho-me em cumprir rigorosamente os prazos definidos e em garantir que o trabalho corresponde plenamente às exigências e expectativas.
            </p>
            <p>
              Adicionalmente, destaco competências interpessoais importantes no meu perfil: gestão do tempo, definição de prioridades e flexibilidade.
            </p>
          </div>
        </section>

        <aside className="lg:w-[360px] lg:sticky lg:top-24">
          <div className="h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:h-[520px]">
            <img
              src="/assets/blog/authors/eu.jpg"
              alt="Foto de Tanjil Shahid Khan"
              className="h-full w-full object-cover"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
