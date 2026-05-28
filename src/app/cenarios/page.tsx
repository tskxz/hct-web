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
          <p className="text-lg text-slate-700 mb-10 max-w-3xl">
            Navegue pelos cenários disponíveis e clique em cada um para ver o título, excerpt e os ficheiros de situação/problema e resposta.
          </p>
          <div className="space-y-4">
            {cenarios.map((cenario) => (
              <div
                key={cenario.slug}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 hover:bg-white"
              >
                <Link href={'/cenarios/' + cenario.slug} className="text-2xl font-semibold text-slate-900 hover:text-slate-700">
                  {cenario.title}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
