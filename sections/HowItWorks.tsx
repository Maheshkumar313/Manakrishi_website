
import React from 'react';
import { User, Radio, Cpu, LineChart } from 'lucide-react';

const Step = ({ icon: Icon, title, desc, step }: { icon: any, title: string, desc: string, step: string }) => (
  <div className="relative flex flex-col items-center p-8 glass rounded-3xl border-white/5 hover:border-white/20 transition-all hover:-translate-y-2 group">
    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-slate-950 font-bold text-lg group-hover:scale-110 transition-transform">
      {step}
    </div>
    <div className="w-20 h-20 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
      <Icon className="w-10 h-10 text-green-400 group-hover:text-green-300" />
    </div>
    <h3 className="text-xl font-bold font-heading mb-4 text-white">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed text-center">{desc}</p>
  </div>
);

export const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">How the <span className="text-green-400">Ecosystem</span> Syncs</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From the farmer's palm to the drone's rotors, every action is a calculated step towards sustainable abundance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Step 
            step="01"
            icon={User}
            title="The Vision"
            desc="Farmer maps the field boundary via our intuitive mobile app, defining priority crop zones."
          />
          <Step 
            step="02"
            icon={Radio}
            title="Telemetric Sync"
            desc="The command is sent. Our drones calibrate with local climate data and soil sensors instantly."
          />
          <Step 
            step="03"
            icon={Cpu}
            title="Smart Flight"
            desc="Autonomous flight patterns ensure 100% coverage with zero waste through AI-guided spraying."
          />
          <Step 
            step="04"
            icon={LineChart}
            title="Growth Insight"
            desc="Real-time data feeds back to the farmer, showing health metrics and yield predictions."
          />
        </div>
      </div>
    </section>
  );
};
