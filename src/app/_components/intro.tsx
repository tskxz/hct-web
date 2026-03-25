import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
         E-portefólio HCT
      </h1>
      
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Curso: Licenciatura em Engenharia Informática
        <br />
        Docente: Doutora Luísa Orvalho
        <Image src="/assets/logotipo-istec.png" alt="logotipo-istec" height={400} width={400}></Image>   
      </h4>
    </section>
  );
}
