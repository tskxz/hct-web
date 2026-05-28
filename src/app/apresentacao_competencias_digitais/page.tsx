import type { Metadata } from "next";
import Container from "@/app/_components/container";

export const metadata: Metadata = {
  title: "Competências Digitais",
  description: "Apresentação das competências digitais e níveis de proficiência.",
};

export default function CompetenciasDigitaisPage() {
  return (
    <main className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10">
          <header className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">Competências Digitais</h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              Apresentação dos domínios de literacia digital, níveis de proficiência e práticas associadas de acordo com INCoDe 2030.
            </p>
          </header>

          <section className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">Literacia da Informação</h2>
            <ul className="mt-4 space-y-3 pl-4 list-disc text-slate-700">
              <li>
                Pesquisa e filtragem da informação - <span className="font-semibold">Avançado</span>
              </li>
              <li>
                Avaliação da informação - <span className="font-semibold">Avançado</span>
              </li>
              <li>
                Armazenamento e recuperação da informação - <span className="font-semibold">Avançado</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">Comunicação e Cidadania</h2>
            <ul className="mt-4 space-y-3 pl-4 list-disc text-slate-700">
              <li>
                Interação através de tecnologias digitais - <span className="font-semibold">Avançado</span>
              </li>
              <li>
                Partilha de informação e conteúdo - <span className="font-semibold">Avançado</span>
              </li>
              <li>
                Cidadania através de tecnologias digitais - <span className="font-semibold">Avançado</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">Outros Domínios</h2>
            <ul className="mt-4 space-y-3 pl-4 list-disc text-slate-700">
              <li>
                Colaboração através de tecnologias digitais - <span className="font-semibold">Avançado</span>
              </li>
              <li>
                Código de conduta em ambiente digital - <span className="font-semibold">Intermédio</span>
              </li>
              <li>
                Gestão da identidade digital - <span className="font-semibold">Intermédio</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">Criação de Conteúdos</h2>
            <ul className="mt-4 space-y-3 pl-4 list-disc text-slate-700">
              <li>
                Produção de conteúdos digitais - <span className="font-semibold">Intermédio</span>
              </li>
              <li>
                Integração e reelaboração - <span className="font-semibold">Intermédio</span>
              </li>
              <li>
                Direitos de autor e licenças - <span className="font-semibold">Intermédio</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">Segurança e Privacidade</h2>
            <ul className="mt-4 space-y-3 pl-4 list-disc text-slate-700">
              <li>
                Proteção de dispositivos - <span className="font-semibold">Avançado</span>
              </li>
              <li>
                Proteção de dados pessoais - <span className="font-semibold">Avançado</span>
              </li>
              <li>
                Proteção da saúde - <span className="font-semibold">Intermédio</span>
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </main>
  );
}
