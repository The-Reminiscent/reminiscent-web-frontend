
const PortfolioSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Portfolio Highlights</h2>
        <p className="text-gray-400 text-center mb-16">Take a look at some of our premium client projects and the unique features they offer</p>
        
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30"></div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">EduTrack - E-learning Platform</h3>
              <p className="text-blue-400 mb-4">Ed-Tech Platform</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Built in React and powered by a REST API hosted on AWS, 
                this comprehensive learning platform features integrated payment processing, 
                advanced user management, and real-time progress tracking. 
                The solution supports multiple learning formats including video courses, 
                interactive quizzes, and downloadable resources, making it a complete 
                educational ecosystem for both instructors and students.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">REST API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
