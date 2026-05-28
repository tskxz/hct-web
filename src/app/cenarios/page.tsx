import { getAllCenarios } from "@/lib/api";
import Container from "@/app/_components/container";
import Link from "next/link";

export default function CenariosPage() {
  const cenarios = getAllCenarios();

  return (
    <main>
      <Container>
        <section className="py-20">
          <h1 className="text-5xl font-bold tracking-tight mb-10">Cenários</h1>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">
            Navegue pelos cenários disponíveis e clique em cada um para ver os ficheiros de situação/problema e resposta.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cenarios.map((cenario) => (
              <Link
                key={cenario.slug}
                href={'/cenarios/' + cenario.slug}
                className="aspect-square rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 hover:bg-white flex items-center justify-center text-center"
              >
                <span className="text-2xl font-semibold text-slate-900 hover:text-slate-700">
                  {cenario.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
