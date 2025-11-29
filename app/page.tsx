import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TwoCardSection from "./components/TwoCardSection";
import ServicesSection from "./components/ServicesSection";


export default function Home() {
  return (
   <main>
    <Navbar />
    <Hero />
     <TwoCardSection />
     <ServicesSection />
    </main>
  );
}
