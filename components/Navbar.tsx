
import React from 'react';
import { Leaf } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-8 py-3">
        <div className="flex items-center gap-2">
          <Leaf className="w-8 h-8 text-green-400" />
          <span className="text-xl font-bold font-heading tracking-tight">MANAKRISHI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#story" className="hover:text-green-400 transition-colors">The Story</a>
          <a href="#process" className="hover:text-green-400 transition-colors">Intelligence</a>
          <a href="#impact" className="hover:text-green-400 transition-colors">Impact</a>
          <a href="#tech" className="hover:text-green-400 transition-colors">Technology</a>
        </div>

        <button className="bg-green-500 hover:bg-green-400 text-slate-950 px-6 py-2 rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-sm">
          Get Started
        </button>
      </div>
    </nav>
  );
};
