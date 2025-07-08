
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="border rounded-xl p-28 border-gray-800 bg-gradient-to-b from-[#0D112E] to-[#020103]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Have a project in mind? Let's talk!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with us to discuss your project and see how we can help bring your vision to life.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
