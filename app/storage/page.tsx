
import Navbar from "../components/Navbar";
import HeroStorage from "../storage/components/HeroStorage";
import FeatureSection from "../components/FeaturesSection";
import Storagetypes from "./components/Storagetypes";
import DifferentiationSection from "../paas/components/DifferentiationSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";




export default function paas() {
  return (
  <main >
    <Navbar />
    <HeroStorage />
    <FeatureSection />
    <Storagetypes />
    <DifferentiationSection />
    <CTASection />
    <Footer />
   
 

</main>


  );
}
