import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
     
        <Image src="/assets/logotipo-istec.png" alt="logotipo-istec" height={400} width={400}></Image>   
      
      
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Curso: Licenciatura em Engenharia Informática
        <br />
        Docente: Doutora Luísa Orvalho
        
      </h4>
    </section>
  );
}
