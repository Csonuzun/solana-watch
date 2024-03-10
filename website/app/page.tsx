import DonutChart from "@/components/donut-chart";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import { HeroScrollDemo } from "@/components/scroll-demo";
import Statistics from "@/components/statistics";
import WatchDemo from "@/components/watch-demo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <Pricing />
      <DonutChart />
      <HeroScrollDemo />
      <WatchDemo />
    </>
  );
}
