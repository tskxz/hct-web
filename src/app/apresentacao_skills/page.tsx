import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Competências técnicas de Tanjil Shahid Khan em desenvolvimento, bases de dados, ferramentas e Linux.",
};

export default function ApresentacaoSkills() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Skills
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            Apresento aqui as minhas principais competências técnicas com foco em desenvolvimento web, bases de dados, frameworks, ferramentas e sistemas.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Desenvolvimento web</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300 leading-7">
              Construção de aplicações web modernas, com experiência em frameworks de frontend e integração de APIs. Trabalho com boas práticas de código e otimização de desempenho.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 dark:border-slate-700 dark:bg-slate-800">
                <img src="/assets/blog/skills/nextjs.png" alt="Next.js" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 dark:border-slate-700 dark:bg-slate-800">
                <img src="/assets/blog/skills/nuxtjs.png" alt="Nuxt.js" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Nuxt.js</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 dark:border-slate-700 dark:bg-slate-800">
                <img src="/assets/blog/skills/laravel.png" alt="Laravel / PHP" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Laravel / PHP</span>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Bases de dados e backend</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300 leading-7">
              Experiência em modelação de dados, integração de sistemas e uso de bases de dados relacionais e não relacionais para suportar aplicações escaláveis.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 dark:border-slate-700 dark:bg-slate-800">
                <img src="/assets/blog/skills/mysql.png" alt="MySQL" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">MySQL</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 dark:border-slate-700 dark:bg-slate-800">
                <img src="/assets/blog/skills/mongodb.png" alt="MongoDB" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 dark:border-slate-700 dark:bg-slate-800">
                <img src="/assets/blog/skills/git.png" alt="Git" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Git</span>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 md:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Sistemas e ferramentas</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300 leading-7">
              Trabalho com sistemas Linux, gestão de versões e ambientes de desenvolvimento modernos. Estas competências suportam tarefas de configuração, deploy e manutenção de projetos.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 dark:border-slate-700 dark:bg-slate-800">
                <img src="/assets/blog/skills/linux.jpg" alt="Linux" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Linux</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 dark:border-slate-700 dark:bg-slate-800">
                <img src="/assets/blog/skills/git.png" alt="Git" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Controle de versão</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 dark:border-slate-700 dark:bg-slate-800">
                <img src="/assets/blog/skills/postman.png" alt="Postman" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Postman</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 dark:border-slate-700 dark:bg-slate-800">
                <img src="/assets/blog/skills/vscode.png" alt="VSCode" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">VS Code</span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
