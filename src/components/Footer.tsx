
const Footer = () => {
  const footerLinks = {
    Product: ['Pricing', 'Changelog', 'Docs', 'Linear Method', 'Download'],
    Company: ['About us', 'Blog', 'Careers', 'Customers', 'Brand'],
    Developers: ['API', 'Status', 'GitHub'],
    Resources: ['Community', 'Contact', 'DPA', 'Terms of service']
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">The Reminiscent</h3>
            <p className="text-gray-400 text-sm">
              Turning ideas into powerful digital experiences.
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 The Reminiscent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
