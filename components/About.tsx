import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-800 relative overflow-hidden">
        {/* Decorative blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">About OmniGeo</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Leading Provider of <br/>Advanced Geospatial Solutions
            </h3>
            
            <div className="space-y-6 text-slate-300">
              <p className="leading-relaxed">
                OmniGeo is a leading provider of advanced geospatial solutions, specialising in the application of cutting-edge Remote Sensing and GIS technologies. Our team of experts is dedicated to delivering tailored insights and services to organisations across various sectors, empowering them to make more informed decisions, enhance operations, and achieve sustainable growth.
              </p>
              
              <p className="leading-relaxed">
                Our comprehensive range of services includes processing and visualising geospatial data, spatial and statistical analysis, and the development of custom tools to meet the unique needs of each client. We work with a diverse array of data types and formats, leveraging both publicly available and commercial data-derived products.
              </p>

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 mt-8">
                 <p className="italic text-slate-400">
                   "At OmniGeo, we are committed to elevating environmental and socio-economic data acquisition, management, analysis, visualiation, and dissemination."
                 </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Advanced GIS Technologies', 'Tailored Insights', 'Multi-format Data Handling', 'Strategic Guidance'].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <img 
                  src="https://images.unsplash.com/photo-1527685609591-44b0aef2400b?q=80&w=1933&auto=format&fit=crop" 
                  alt="Geospatial Analysis" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-lg border border-slate-600">
                      <p className="text-cyan-400 font-bold">Data-Driven Success</p>
                      <p className="text-xs text-slate-300 mt-1">Empowering decisions through spatial intelligence.</p>
                   </div>
                </div>
             </div>
             
             {/* Background accent */}
             <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-dashed border-slate-700 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
