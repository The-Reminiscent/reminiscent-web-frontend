const TeamSection = () => {
  const teamMembers = [
    {
      name: "Soumya Shaw",
      role: "Lead Developer",
      description: "Transforming ideas into reality with expertise in full stack development, ensuring seamless integration of frontend and backend technologies.",
      image: "/soumya.jpeg"
    },
    {
      name: "Sneha Chetani",
      role: "Full Stack Developer",
      description: "Specializing in creating responsive and interactive frontend experiences using React and modern frameworks.",
      image: "/sneha.jpeg"
    },
    {
      name: "Vaishnavi Mall",
      role: "Senior Developer",
      description: "Building robust applications with modern technologies and scalable architecture solutions.",
      image: "/vaishnavi.jpeg"
    },
    {
      name: "Hardik Goyal",
      role: "SEO Specialist",
      description: "Optimizing digital presence and driving organic growth through strategic SEO and content marketing.",
      image: "/hardik.jpeg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Meet the Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 text-center">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-4 mx-auto border-2 border-blue-500" />
              ) : (
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4 mx-auto"></div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
              <p className="text-blue-400 text-sm mb-3 text-center">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
