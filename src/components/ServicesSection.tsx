import { BarChart, DatabaseZap, Smartphone, AppWindow, Megaphone, Search, Palette, FileText, Wrench } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart,
      title: "Web Development",
      description: "Custom websites built with modern frameworks (React, Next.js, etc.)"
    },
    {
      icon: DatabaseZap,
      title: "Backend API development",
      description: "Secure and scalable backend using Node.js, Django, Firebase & more."
    },
    {
      icon: Smartphone,
      title: "App Store Deployment & Optimization",
      description: "End-to-end support for publishing apps with strategies to improve downloads and ratings."
    },
    {
      icon: AppWindow,
      title: "App Development",
      description: "Powerful and smooth apps, native or cross-platform."
    },
    {
      icon: Megaphone,
      title: "Branding & Digital Marketing",
      description: "From logo design to ad strategy – we help your business stand out."
    },
    {
      icon: Search,
      title: "SEO & Performance Optimization",
      description: "Improve website speed, structure, and visibility on search engines"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly design using Figma, Adobe XD, etc."
    },
    {
      icon: FileText,
      title: "WordPress Integration",
      description: "Custom WordPress setups to empower clients to manage their content easily."
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing updates, bug fixes, and performance optimization post-launch."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0D112E] to-[#020103]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        <div className="md:col-span-1">
          <h2 className="text-6xl font-medium text-white leading-tight">Services we Offer.</h2>
        </div>
        <div className="md:col-span-2 grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index}>
              <service.icon className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
