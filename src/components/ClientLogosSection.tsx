
const ClientLogosSection = () => {
  const logos = [
    { name: "Echo Valley", className: "text-2xl font-bold text-white" },
    { name: "Quantum", className: "text-2xl font-bold text-white" },
    { name: "PULSE", className: "text-2xl font-bold text-white" },
    { name: "Outside", className: "text-2xl font-bold text-white" },
    { name: "APEX", className: "text-2xl font-bold text-white" },
    { name: "Coastal", className: "text-2xl font-bold text-white" },
    { name: "TWICE", className: "text-2xl font-bold text-white" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-gray-400 text-lg mb-12">Trusted by Leading Brands</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="text-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className={logo.className}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
