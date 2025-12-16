
import Navbar from "@/app/components/Navbar";
import HeroInside from "./components/HeroInside";
import DifferentiationSection from "@/app/paas/components/DifferentiationSection";
import ScrollCards from "@/app/paas/components/ScrollCards";


export default function paas() {
  return (
    <main>
      <Navbar />
      <HeroInside />
      <DifferentiationSection />
      <ScrollCards />
    </main>
  );
}
