
import React from 'react';
import { TrendingUp, Clock, ShieldCheck, Waves, Users } from 'lucide-react';

const ImpactCard = ({ icon: Icon, label, value, unit, desc }: { icon: any, label: string, value: string, unit: string, desc: string }) => (
  <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col gap-4 hover:border-green-500/30 transition-colors group">
    <div className="flex items-center justify-between">
      <div className="p-3 rounded-xl bg-slate-800 group-hover:bg-green-500/10 transition-colors">
        <Icon className="w-6 h-6 text-green-400" />
      </div>
      <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">{label}</span>
    </div>
    <div>
      <span className="text-5xl font-bold font-heading text-white">{value}</span>
      <span className="text-xl text-slate-500 ml-1 font-heading">{unit}</span>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background human elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800" className="h-full object-cover" alt="Farmer background" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-green-500 font-bold text-sm uppercase tracking-widest mb-6">
              <Users className="w-4 h-4" />
              <span>The Manakrishi Community</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">
              A Partnership <br />
              <span className="text-green-500">Rooted in Trust.</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              Manakrishi isn't just a drone company; we are a dedicated supply partner. We handle the technology, maintenance, and flight, so you can focus on what matters—harvesting your future.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all cursor-crosshair">
                  <img src={`https://i.pravatar.cc/150?img=${i + 10}`} className="w-full h-full object-cover" alt="Farmer Partner" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-6 glass rounded-2xl border-green-500/20">
              <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-green-500">
                <img src="https://i.pravatar.cc/150?u=rajesh" alt="Farmer" />
              </div>
              <div>
                <p className="font-bold text-white italic">"Before Manakrishi, I had to hire 10 laborers for spraying. Now, one drone does it in minutes, and I save ₹5,000 every season."</p>
                <p className="text-sm text-green-500 mt-2">— Sompal Singh, Farmer & Community Leader</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full relative z-10">
            <ImpactCard 
              icon={TrendingUp}
              label="Efficiency"
              value="10"
              unit="x"
              desc="Drone spraying is 10 times faster than manual backpack sprayers."
            />
            <ImpactCard 
              icon={Clock}
              label="Health"
              value="100"
              unit="%"
              desc="Eliminate direct farmer exposure to harmful pesticides and chemicals."
            />
            <ImpactCard 
              icon={Waves}
              label="Water Savings"
              value="90"
              unit="%"
              desc="Precision nozzles use 90% less water than traditional flooding."
            />
            <ImpactCard 
              icon={ShieldCheck}
              label="Savings"
              value="4k"
              unit="₹"
              desc="Average savings per acre on labor and chemical waste."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
