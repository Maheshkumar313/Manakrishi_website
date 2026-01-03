
import React from 'react';
import { ChevronDown, MapPin, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Farmer Theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale-[20%] opacity-60"
          alt="Farmer in the field"
        />
      </div>
      
      {/* HUD Overlay Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-green-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-blue-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass mb-8 border-green-500/30">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase">Now Deploying in 12+ Districts</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold font-heading mb-8 leading-[1.1]">
          The Future of <br />
          <span className="gradient-text">Farming Partnership</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Manakrishi supplies high-performance spray drones directly to your doorstep. 
          Empowering the Indian farmer with precision aerial intelligence and zero-effort spraying.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="group relative px-10 py-5 bg-green-500 hover:bg-green-400 text-slate-950 rounded-full font-bold text-lg shadow-2xl shadow-green-500/20 transition-all overflow-hidden">
            <span className="relative z-10">Request a Spray Service</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <div className="flex items-center gap-8 glass px-8 py-4 rounded-full border-white/10">
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Pricing Starts</span>
              <span className="text-xl font-bold text-white">₹499 / Acre</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2 text-green-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-bold">Verified Pilots</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 z-20 hidden lg:flex items-center gap-4 glass p-4 rounded-2xl">
        <div className="w-12 h-12 rounded-full bg-slate-800 overflow-hidden border border-green-500/50">
           <img src="https://i.pravatar.cc/150?u=farmer1" alt="Farmer" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Current Deployment</p>
          <p className="text-sm font-bold text-white">Punjab Hub Alpha-9</p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce text-slate-500">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};
