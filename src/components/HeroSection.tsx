import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 top-40 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-5xl opacity-50"></div>
      </div>
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <h1 className="text-[82px] font-medium text-white mb-6 leading-tight">
          Turning Ideas into Powerful
          <br />
          <span className="bg-gradient-to-b from-white to-[#729DCF] bg-clip-text text-transparent">
            Digital Experiences
          </span>
        </h1>
        <p className="text-xl md:text-xl text-white mb-8 max-w-2xl mx-auto">
          Blazing-fast web and mobile experiences — built to grow your business.
        </p>
        <Button
          size="lg"
          className="bg-white hover:bg-blue-700 text-black px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
        >
          Get a free Quote
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;