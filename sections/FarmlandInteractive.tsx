
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { MapPin, Thermometer, Droplets, Zap, Activity, Calendar, CheckCircle2 } from 'lucide-react';

interface ZoneData {
  id: string;
  name: string;
  moisture: string;
  urea: string;
  lastVisit: string;
  status: 'Optimal' | 'Attention' | 'Critical';
  path: string;
  x: number;
  y: number;
}

const zones: ZoneData[] = [
  {
    id: 'zone-1',
    name: 'North Paddy Block',
    moisture: '68%',
    urea: '14g/m²',
    lastVisit: '2h ago',
    status: 'Optimal',
    path: 'M 50,50 Q 150,50 200,120',
    x: 200,
    y: 120
  },
  {
    id: 'zone-2',
    name: 'Western Orchard',
    moisture: '42%',
    urea: '8g/m²',
    lastVisit: '5h ago',
    status: 'Attention',
    path: 'M 50,50 Q 50,250 120,320',
    x: 120,
    y: 320
  },
  {
    id: 'zone-3',
    name: 'Central Wheat Field',
    moisture: '55%',
    urea: '22g/m²',
    lastVisit: '15m ago',
    status: 'Optimal',
    path: 'M 50,50 C 150,50 250,250 350,280',
    x: 350,
    y: 280
  },
  {
    id: 'zone-4',
    name: 'South Seedling Nursery',
    moisture: '89%',
    urea: '4g/m²',
    lastVisit: 'Just now',
    status: 'Critical',
    path: 'M 50,50 Q 400,50 450,420',
    x: 450,
    y: 420
  }
];

export const FarmlandInteractive: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<ZoneData | null>(null);
  const [isBooked, setIsBooked] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const droneIconRef = useRef<SVGGElement>(null);
  const dataPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedZone && pathRef.current && droneIconRef.current) {
      const length = pathRef.current.getTotalLength();
      setIsBooked(false);
      
      // Reset path
      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length, opacity: 1 });
      
      // Animate Path Drawing
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.inOut"
      });

      // Animate Drone Icon along the path
      const val = { distance: 0 };
      gsap.to(val, {
        distance: length,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          const point = pathRef.current!.getPointAtLength(val.distance);
          gsap.set(droneIconRef.current, { x: point.x, y: point.y });
        }
      });

      // Animate Data Panel
      gsap.fromTo(dataPanelRef.current, 
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: 1, ease: "back.out(1.7)" }
      );
    }
  }, [selectedZone]);

  const handleBook = () => {
    setIsBooked(true);
    gsap.from(".booking-conf", { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out" });
  };

  return (
    <section className="py-32 relative bg-slate-950 overflow-hidden min-h-screen flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none grayscale">
         <img src="https://images.unsplash.com/photo-1595841696677-54897f28bc12?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Farmer theme background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Visualizer Side */}
        <div className="lg:col-span-7 relative aspect-square glass rounded-[3rem] border-white/5 p-8 flex items-center justify-center overflow-hidden shadow-inner bg-slate-900/40">
          <div className="absolute top-8 left-8">
            <h3 className="text-2xl font-bold font-heading text-white">Service Area Map</h3>
            <p className="text-slate-500 text-sm">Tap your field block to plan a spray mission</p>
          </div>

          <svg viewBox="0 0 600 600" className="w-full h-full max-w-lg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34,197,94,0.05)" strokeWidth="1"/>
              </pattern>
              <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4ade80" stopOpacity="0" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <rect width="600" height="600" fill="url(#grid)" />

            <g className="zones">
              {zones.map((zone) => (
                <g 
                  key={zone.id} 
                  className="cursor-pointer group" 
                  onClick={() => setSelectedZone(zone)}
                >
                  <circle 
                    cx={zone.x} 
                    cy={zone.y} 
                    r="45" 
                    className={`transition-all duration-300 ${selectedZone?.id === zone.id ? 'fill-blue-500/20 stroke-blue-400' : 'fill-green-500/5 stroke-green-500/20 group-hover:fill-green-500/10'}`} 
                    strokeWidth="2"
                  />
                  <circle 
                    cx={zone.x} 
                    cy={zone.y} 
                    r="6" 
                    className={`${selectedZone?.id === zone.id ? 'fill-blue-400 animate-pulse' : 'fill-green-500'}`} 
                  />
                  <text 
                    x={zone.x} 
                    y={zone.y + 60} 
                    textAnchor="middle" 
                    className="text-[11px] font-bold fill-slate-400 uppercase tracking-widest group-hover:fill-slate-200 transition-colors"
                  >
                    {zone.name}
                  </text>
                </g>
              ))}
            </g>

            <path 
              ref={pathRef}
              d={selectedZone?.path || ''} 
              fill="none" 
              stroke="url(#pathGrad)" 
              strokeWidth="4" 
              className="pointer-events-none opacity-0"
            />

            <g ref={droneIconRef} className="pointer-events-none">
              <circle r="14" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
              <path d="M -7 -7 L 7 7 M 7 -7 L -7 7" stroke="#60a5fa" strokeWidth="1.5" className="animate-spin origin-center" />
            </g>

            <g transform="translate(50,50)">
              <rect x="-24" y="-24" width="48" height="48" rx="12" fill="#1e293b" stroke="#4ade80" strokeWidth="2" />
              <text y="42" textAnchor="middle" className="text-[11px] fill-green-400 font-bold uppercase tracking-widest">Supply Hub</text>
            </g>
          </svg>
        </div>

        {/* Data Side */}
        <div className="lg:col-span-5 flex flex-col justify-center min-h-[500px]">
          {!selectedZone ? (
            <div className="text-center lg:text-left space-y-8 p-12 glass rounded-3xl border-white/5">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 mx-auto lg:mx-0 shadow-lg">
                <Activity className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold font-heading">Deployment Manager</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Our drones are supplied on-demand. Simply select your field block, view the last autonomous health scan, and schedule your precision spray service.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-xs text-slate-300">
                   <CheckCircle2 className="w-4 h-4 text-green-500" /> Professional Service
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-xs text-slate-300">
                   <CheckCircle2 className="w-4 h-4 text-green-500" /> Chemical Optimization
                </div>
              </div>
            </div>
          ) : (
            <div ref={dataPanelRef} className="space-y-8 glass p-10 rounded-[3rem] border-white/10 shadow-2xl relative">
              {isBooked && (
                <div className="booking-conf absolute inset-0 z-30 flex flex-col items-center justify-center bg-green-500 rounded-[3rem] text-slate-950 p-8 text-center">
                   <CheckCircle2 className="w-20 h-20 mb-6" />
                   <h3 className="text-3xl font-bold font-heading mb-4">Request Confirmed!</h3>
                   <p className="font-medium text-lg mb-8 opacity-80">Our Pilot & KRISHI-1S Drone will be at {selectedZone.name} by tomorrow morning.</p>
                   <button 
                    onClick={() => setIsBooked(false)}
                    className="px-8 py-3 bg-slate-950 text-white rounded-full font-bold uppercase tracking-widest text-xs"
                   >
                     Done
                   </button>
                </div>
              )}

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-400/20">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-heading text-white">{selectedZone.name}</h2>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Block Status</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      selectedZone.status === 'Optimal' ? 'bg-green-500/10 text-green-400 border-green-400/20' : 
                      selectedZone.status === 'Attention' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-400/20' : 'bg-red-500/10 text-red-400 border-red-400/20'
                    }`}>
                      {selectedZone.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 rounded-2xl">
                  <Droplets className="w-5 h-5 text-blue-400 mb-2" />
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Moisture</p>
                  <p className="text-xl font-bold font-heading">{selectedZone.moisture}</p>
                </div>
                <div className="p-5 bg-white/5 rounded-2xl">
                  <Zap className="w-5 h-5 text-yellow-400 mb-2" />
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Nutrient Level</p>
                  <p className="text-xl font-bold font-heading">{selectedZone.urea}</p>
                </div>
              </div>

              <div className="p-6 bg-slate-950/50 border border-white/5 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Service Estimate</p>
                  <p className="text-2xl font-bold font-heading text-green-400">₹1,240 <span className="text-xs text-slate-400 font-normal">Total</span></p>
                </div>
                <Calendar className="w-8 h-8 text-slate-700" />
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={handleBook}
                  className="w-full py-5 bg-green-500 hover:bg-green-400 text-slate-950 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-green-500/20"
                >
                  Book Spray Service
                </button>
                <button 
                  onClick={() => setSelectedZone(null)}
                  className="text-sm font-bold text-slate-500 hover:text-white transition-colors"
                >
                  ← Select another block
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
