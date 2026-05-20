import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      
      <Image src="/assets/logotipo-istec.png" alt="logotipo-istec" height={400} width={400}></Image>
    </h2>
  );

};

export default Header;
