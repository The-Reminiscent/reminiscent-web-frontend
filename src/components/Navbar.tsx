import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Technologies", href: "#technologies" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Pricing", href: "#pricing" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo */}
          <div className="flex justify-start">
            <img
              src="/logo.png"
              alt="The Reminiscent Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Menu Items - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-4 px-4 py-1 rounded-full border border-gray-700 bg-black/80">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white/60 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-slate-800/50"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Us Button - Right */}
          <div className="flex justify-end">
            <div className="p-1 rounded-2xl border-2 border-[#2d2f3f] bg-black inline-block">
              <Button
                size="sm"
                className="text-white text-sm font-base px-6 py-2 rounded-xl bg-gradient-to-b from-[#1a1e3f] to-[#0c1026] shadow-[inset_0_0_8px_#5a74a1] hover:scale-105 transition-transform duration-200"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white/60 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 hover:bg-slate-800/50"
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2">
              <Button 
                size="sm"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
