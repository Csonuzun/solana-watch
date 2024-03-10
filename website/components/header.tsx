import Image from "next/image";

import { Poppins } from "next/font/google";

const poppins500 = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export default function Header() {
  return (
    <header className="text-white body-font fixed w-[calc(100%_-_400px)] ml-[200px] mt-[80px]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center relative">
        <a className="flex font-medium items-center mb-4 md:mb-0 absolute left-0">
          <Image
            src={"/solana-logo.png"}
            alt="logo"
            width={50}
            height={50}
          />
          <span className="ml-3 text-xl">Solana <span className={`${poppins700.className}`}>Watch</span></span>
        </a>
        <nav className={`${poppins500.className} flex flex-wrap items-center text-base gap-5 justify-center text-white`}>
          <a className="">Home</a>
          <a className="">Shop</a>
          <a className="">Community</a>
          <a className="">Docs</a>
        </nav>
      </div>
    </header>
  );
}
