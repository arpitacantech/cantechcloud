import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TwoCardSection from "./components/TwoCardSection";
import ServicesSection from "./components/ServicesSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";


export default function Home() {
  return (
   <main>
    <Navbar />
    <Hero />
    <TwoCardSection />
    <ServicesSection />
    <CTASection />
    <Footer />
    </main>
  );
}
