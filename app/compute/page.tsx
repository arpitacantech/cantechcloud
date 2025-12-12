import Navbar from "../components/Navbar";
import HeroCompute from "./components/HeroCompute";
import DifferentiationSection from "../paas/components/DifferentiationSection";
import TextParallaxContentExample from "./components/text-parallax-content-scroll";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ComparisonSection from "../application/components/ComparisonSection";


export default function Home() {
  return (
   <main>
    <Navbar />
    <HeroCompute />
    <DifferentiationSection />
    <TextParallaxContentExample />
    <ComparisonSection />
    <CTASection />
    <Footer />
  
    </main>
  );
}
