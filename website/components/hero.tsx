import Image from "next/image";
import { Button } from "./ui/moving-border";
import { Poppins } from "next/font/google";
import { Spotlight } from "./ui/spotlight";

const poppins500 = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export default function Hero() {
  return (
    <section className="text-white body-font h-screen flex p-[200px]">
      <Spotlight
        className="-top-40 left-0 md:left-[700px] md:-top-[100px]"
        fill="white"
      />
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p
            className={`${poppins700.className} sm:text-4xl lg:text-[60px] mb-8 text-white`}
          >
            Solana Watch
          </p>
          <p className="mb-8 leading-snug text-2xl">
            Real-time insights for personal health and environmental awareness,
            powered by Solana blockchain.
          </p>
          <div className="flex justify-center">
            <Button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Pre Order
            </Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <Image src="/solana-watch.png" alt="hero" width={516} height={516} />
        </div>
      </div>
    </section>
  );
}
