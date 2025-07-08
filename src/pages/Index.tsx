import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <MissionVisionSection />
        {/* <ClientLogosSection /> */}
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
