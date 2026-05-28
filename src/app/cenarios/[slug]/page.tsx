import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCenarios, getCenarioBySlug } from "@/lib/api";
import Container from "@/app/_components/container";

export default async function CenarioPage({ params }: { params: Promise<{ slug?: string | string[] }> }) {
  const { slug } = await params;
  const cenario = getCenarioBySlug(slug);

  if (!cenario) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <article className="mb-20">
          <h1 className="text-5xl font-bold tracking-tight mb-6">{cenario.title}</h1>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">{cenario.excerpt}</p>
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href={cenario.resposta}
              download
              className="group block rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-slate-300 hover:bg-white"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 mb-5">
                Ficheiro da resposta ao Cenário
              </p>
              <div className="flex h-40 items-center justify-center rounded-3xl bg-white border border-dashed border-slate-200 text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 3.75H15l6 6v10.5a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 20.25V4.5A1.5 1.5 0 0 1 7.5 3.75Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 3.75v6h6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 13.5v6m-3-3l3 3 3-3"
                  />
                </svg>
              </div>
              <p className="mt-6 text-sm text-slate-600 break-words">{cenario.resposta.split("/").pop()}</p>
            </a>

            <a
              href={cenario.problema}
              download
              className="group block rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-slate-300 hover:bg-white"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 mb-5">
                Ficheiro de Situação/Problema
              </p>
              <div className="flex h-40 items-center justify-center rounded-3xl bg-white border border-dashed border-slate-200 text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 3.75H15l6 6v10.5a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 20.25V4.5A1.5 1.5 0 0 1 7.5 3.75Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 3.75v6h6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 13.5h6"
                  />
                </svg>
              </div>
              <p className="mt-6 text-sm text-slate-600 break-words">{cenario.problema.split("/").pop()}</p>
            </a>
          </div>
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug?: string | string[];
  }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const cenario = getCenarioBySlug(slug);

  if (!cenario) {
    return notFound();
  }

  return {
    title: `${cenario.title} | Cenário`,
  };
}

export async function generateStaticParams() {
  const cenarios = getAllCenarios();
  return cenarios.map((cenario) => ({ slug: cenario.slug }));
}
