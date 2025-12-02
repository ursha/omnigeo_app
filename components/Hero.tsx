import React from 'react';
import { motion } from 'framer-motion';
import { Map, Satellite, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Earth from space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-2xl border border-slate-700">
               <Map className="h-8 w-8 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Mapping the Future with <br />
            <span className="text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Geospatial Intelligence
            </span>
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Unlock the power of location data. From satellite imagery analysis to advanced digital mapping, 
            OmniGeo delivers the insights you need for a sustainable tomorrow.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="px-8 py-3.5 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Explore Our Services
            </a>
            <a 
              href="#about"
              className="px-8 py-3.5 rounded-full bg-slate-800 text-slate-200 font-semibold border border-slate-700 hover:bg-slate-700 transition-all"
            >
              Learn About Us
            </a>
          </div>
        </motion.div>
        
        {/* Stats / Highlights */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col items-center">
            <Satellite className="h-6 w-6 text-cyan-400 mb-2" />
            <span className="text-slate-400 text-sm">Remote Sensing</span>
          </div>
          <div className="flex flex-col items-center">
            <Map className="h-6 w-6 text-cyan-400 mb-2" />
            <span className="text-slate-400 text-sm">Digital Mapping</span>
          </div>
          <div className="flex flex-col items-center">
            <Activity className="h-6 w-6 text-cyan-400 mb-2" />
            <span className="text-slate-400 text-sm">Data Analysis</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
