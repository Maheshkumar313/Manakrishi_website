
import React from 'react';
import { Eye, Shield, Box, Battery, Truck } from 'lucide-react';

export const TechSection: React.FC = () => {
  return (
    <section id="tech" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#166534_0%,transparent_40%)] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass rounded-[3rem] overflow-hidden border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col justify-center border-r border-white/5">
              <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
                <Truck className="w-4 h-4" />
                <span>Supply & Deployment Logistics</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-10">How We Supply <br /> <span className="text-blue-400">Your Drone Fleet</span></h2>
              
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-400/20 transition-all group-hover:border-blue-400">
                    <Box className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Local Hub Delivery</h4>
                    <p className="text-slate-400 text-sm">We maintain regional drone hubs. Once you book, a drone is dispatched via our mobile service units directly to your farm gate.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-400/20 transition-all group-hover:border-purple-400">
                    <Battery className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Battery Ecosystem</h4>
                    <p className="text-slate-400 text-sm">Manakrishi supplies high-density batteries and portable charging stations, ensuring 24/7 spraying capability without downtime.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 border border-green-400/20 transition-all group-hover:border-green-400">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Pilot Supply</h4>
                    <p className="text-slate-400 text-sm">Every drone comes with a DGCA-certified pilot. You don't need to learn to fly—we handle the technical complexity.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-auto bg-slate-800/20 overflow-hidden flex items-center justify-center p-12">
               {/* Drone Visual Component */}
               <div className="relative w-full max-w-md">
                 <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full" />
                 <div className="relative z-10 glass p-8 rounded-[2rem] border-blue-500/30">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h4 className="text-2xl font-bold font-heading">KRISHI-1S</h4>
                        <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">Supply Model S-40</p>
                      </div>
                      <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[10px] font-bold">READY TO FLY</div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500 font-bold uppercase">Payload Capacity</span>
                        <span className="text-white font-bold">16 Liters</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-blue-500" />
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500 font-bold uppercase">Coverage Rate</span>
                        <span className="text-white font-bold">40 Acres / Day</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-green-500" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-xl text-center">
                        <Eye className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                        <p className="text-[10px] font-bold uppercase text-slate-500">Live Feed</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl text-center">
                        <Battery className="w-5 h-5 text-green-400 mx-auto mb-2" />
                        <p className="text-[10px] font-bold uppercase text-slate-500">Swap Tech</p>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
