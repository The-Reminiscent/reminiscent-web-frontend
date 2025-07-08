import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "€999",
      period: "Starting @ ",
      features: [
        "Custom Design",
        "Responsive Layout", 
        "Basic SEO Setup",
        "Contact Form",
        "Social Media Integration",
        "30 Days Support"
      ],
      buttonText: "GET STARTED",
      popular: false
    },
    {
      name: "Pro",
      price: "€2999",
      period: "Starting @ ",
      features: [
        "Everything in Basic",
        "Advanced SEO Optimization",
        "Content Management System",
        "E-commerce Integration",
        "Analytics Dashboard",
        "Priority Support",
        "Performance Optimization"
      ],
      buttonText: "GET STARTED",
      popular: true
    },
    {
      name: "Business",
      price: "€5999",
      period: "Starting @ ", 
      features: [
        "Everything in Pro",
        "Custom Web Application",
        "Database Integration",
        "Advanced User Management",
        "API Development",
        "Dedicated Account Manager",
        "24/7 Priority Support"
      ],
      buttonText: "CONTACT US",
      popular: false
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-black">
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-6xl font-medium text-white text-center mb-12">Pricing</h2>
        <p className="text-white text-center mb-20 text-xl">Choose the right plan to meet your SEO <br /> needs and start optimizing today.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500 bg-gradient-to-br from-blue-900/20 to-purple-900/20' 
                  : 'border-slate-700 hover:border-blue-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-gray-400">{plan.period}</span>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
