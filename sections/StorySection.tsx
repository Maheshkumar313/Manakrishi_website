
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Droplets, Zap, Sprout } from 'lucide-react';

interface StoryBeatProps {
  children: React.ReactNode;
  icon: any;
  color: string;
}

// Component to handle individual beats of the story with scroll-triggered animations.
// Fixed: Explicitly defining props with children and using React.FC to resolve the TypeScript error 
// where children were not correctly recognized in the JSX usage.
const StoryBeat: React.FC<StoryBeatProps> = ({ children, icon: Icon, color }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
      }
    });
  }, []);

  return (
    <div ref={ref} className="min-h-[50vh] flex flex-col items-center justify-center max-w-2xl mx-auto px-6 text-center">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 glass ${color}`}>
        <Icon className="w-8 h-8" />
      </div>
      <p className="text-3xl md:text-4xl font-heading font-medium leading-snug">
        {children}
      </p>
    </div>
  );
};

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="relative py-32 bg-slate-900/50">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-green-500 via-transparent to-blue-500" />
      </div>

      <div className="relative z-10 space-y-32">
        <StoryBeat icon={Droplets} color="text-blue-400 border-blue-400/20 shadow-[0_0_30px_rgba(96,165,250,0.2)]">
          The soil <span className="text-blue-400 font-bold italic">whispers</span> its thirst. <br />
          The drone pauses, hovering, listening to the dampness of the earth.
        </StoryBeat>

        <StoryBeat icon={Zap} color="text-yellow-400 border-yellow-400/20 shadow-[0_0_30px_rgba(250,204,21,0.2)]">
          Urea particles glow like <span className="text-yellow-400 font-bold italic">stardust</span>. <br />
          The intelligence decides the perfect micro-gram for every leaf.
        </StoryBeat>

        <StoryBeat icon={Sprout} color="text-green-400 border-green-400/20 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
          The farm <span className="text-green-400 font-bold italic">responds</span>. <br />
          Harmony restored through the precision of the sky.
        </StoryBeat>
      </div>
    </section>
  );
};
