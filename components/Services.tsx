import React from 'react';
import { Satellite, Map, Briefcase, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Remote Sensing & Satellite Data Analysis",
      description: "Our professional services include analysing satellite imagery and geospatial data to extract valuable information for industries such as agriculture, environmental management, urban planning, and disaster management. By harnessing the power of cutting-edge Remote Sensing techniques, we assist our clients in identifying opportunities, managing risks, and optimising resources, thus ensuring sustainable growth and long-term success.",
      icon: Satellite,
    },
    {
      title: "Digital Mapping & Geospatial Analysis",
      description: "At Omnigeo, we specialise in utilising advanced GIS software to efficiently process and visualize your data. Our team has vast experience working with various data types and formats, excelling in spatial and statistical analysis through GIS and other cutting-edge platforms. Partner with us for expert insights and tailored geospatial solutions that drive your organisation's success.",
      icon: Map,
    },
    {
      title: "Geospatial Consultancy",
      description: "OmniGeo delivers cutting-edge geospatial solutions, offering comprehensive services, tools, and strategic guidance to elevate environmental and socio-economic data acquisition, management, analysis, visualization, and dissemination. Our expertise empowers organizations to make informed decisions and unlock the full potential of geospatial intelligence.",
      icon: Briefcase,
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Comprehensive Geospatial Services</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            From raw data to actionable intelligence, we provide the full spectrum of geospatial solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon className="w-24 h-24 text-cyan-400" />
              </div>
              
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-cyan-500/50 mb-6 transition-colors shadow-lg">
                <service.icon className="w-7 h-7 text-cyan-400" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                {service.description}
              </p>
              
              <div className="flex items-center text-cyan-400 font-medium text-sm cursor-pointer group/link">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
