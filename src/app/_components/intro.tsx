import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h2>História das Ciência e das Técnicas</h2>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Este é um instrumento de ensino, aprendizagem e avaliação, realizado pelos estudantes do 1ºano, do curso de Engenharia Informática, do ISTEC-Porto, durante o segundo semestre, do ano letivo de 2025/2026, para a unidade curricular de História das Ciência e das Técnicas.
        <br />
        <br />
        Curso: Licenciatura em Engenharia Informática
        <br />
        Docente: Doutora Luísa Orvalho
        
      </h4>
    </section>
  );
}
