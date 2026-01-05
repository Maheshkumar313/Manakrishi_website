
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Quote, Linkedin, Twitter, ExternalLink, ShieldCheck, Landmark, Cpu } from 'lucide-react';

interface Leader {
  name: string;
  role: string;
  image: string;
  quote: string;
  bio: string;
  color: string;
}

const leaders: Leader[] = [
  {
    name: "Founder & CEO",
    role: "Visionary Head, Manakrishi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
    quote: "Empowering Bharat's timeless agricultural wisdom with the precision of the modern sky.",
    bio: "The architect behind Manakrishi's mission to bridge the gap between traditional farming and high-tech aerial intelligence.",
    color: "yellow"
  },
  {
    name: "Chief Technology Officer",
    role: "CTO, Manakrishi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000",
    quote: "We don't just build drones; we build the nervous system for the modern Indian farm.",
    bio: "Leading our edge computing and AI-flight dynamics team to ensure every drop of spray is mathematically perfect.",
    color: "green"
  },
  {
    name: "Chief Financial Officer",
    role: "CFO, Manakrishi",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000",
    quote: "Ensuring that 'Samriddhi' isn't just a vision, but a sustainable financial reality for every farm.",
    bio: "Expert in rural fintech and sustainable scalability, driving the economic engine that makes drone technology accessible.",
    color: "blue"
  }
];

export const Leadership: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="leadership" ref={sectionRef} className="py-32 relative bg-slate-950 overflow-hidden">
      {/* Decorative Cultural Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-yellow-500" />
            <span>The Guardians of Growth</span>
            <span className="w-8 h-px bg-yellow-500" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-white">
            Leadership <span className="gradient-text">Panchayat</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg font-light">
            A synergy of vision, technology, and economic wisdom serving the Indian Kisan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div 
              key={leader.role}
              ref={el => cardsRef.current[idx] = el}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="glass rounded-[2.5rem] p-8 border-white/5 hover:border-white/10 transition-all duration-500 h-full flex flex-col gap-6">
                
                {/* Image Section */}
                <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent`} />
                  
                  {/* Icon badge */}
                  <div className={`absolute top-4 left-4 p-2 rounded-lg glass border-white/10 ${
                    leader.color === 'yellow' ? 'text-yellow-500' : 
                    leader.color === 'green' ? 'text-green-400' : 'text-blue-400'
                  }`}>
                    {leader.color === 'yellow' ? <ShieldCheck className="w-5 h-5" /> : 
                     leader.color === 'green' ? <Cpu className="w-5 h-5" /> : <Landmark className="w-5 h-5" />}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white group-hover:text-yellow-500 transition-colors">{leader.name}</h3>
                    <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${
                      leader.color === 'yellow' ? 'text-yellow-500' : 
                      leader.color === 'green' ? 'text-green-400' : 'text-blue-400'
                    }`}>
                      {leader.role}
                    </p>
                  </div>

                  <div className="relative pt-2">
                    <Quote className="absolute -top-1 -left-3 w-8 h-8 opacity-5 rotate-180" />
                    <p className="text-base text-slate-300 italic font-light leading-relaxed">
                      "{leader.quote}"
                    </p>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {leader.bio}
                  </p>

                  <div className="flex gap-3 pt-2">
                    <a href="#" className="p-2 glass rounded-lg text-slate-500 hover:text-white transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2 glass rounded-lg text-slate-500 hover:text-white transition-all">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <button className="ml-auto text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-yellow-500 flex items-center gap-2 group/btn">
                      Read More <ExternalLink className="w-2.5 h-2.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative accent for the card */}
              <div className={`absolute -inset-1 rounded-[2.8rem] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700 ${
                leader.color === 'yellow' ? 'bg-yellow-500' : 
                leader.color === 'green' ? 'bg-green-400' : 'bg-blue-500'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
