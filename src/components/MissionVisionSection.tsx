const MissionVisionSection = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-[#070818] via-[#09081B00] to-[#060714] backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              We're a driven team of designers and developers crafting high-impact web and mobile solutions for startups and own ventures. Focused by creativity and products we build over experience, we turn planning and insights into solutions you can trust.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#070818] via-[#09081B00] to-[#060714] backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To be the creative digital partner for ambitious brands—creating, defining, and building experiences that inspire, guide, and level. We elevate businesses where great design and creative excellence fuel ideas using innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
