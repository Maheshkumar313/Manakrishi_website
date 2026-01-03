
import React from 'react';
import { Leaf, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden bg-gradient-to-b from-slate-900 to-black">
      {/* Sunset Background Visual */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,#ea580c20_0%,transparent_70%)] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8">
            Empowering Farmers with <br /> 
            <span className="text-orange-500">Flying Intelligence.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            Join the agricultural revolution today. The skies are waiting. The soil is listening.
          </p>
          <button className="px-12 py-5 bg-white text-black hover:bg-orange-500 hover:text-white rounded-full font-bold text-xl transition-all shadow-2xl shadow-white/5 group">
            Contact Us <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold font-heading tracking-tight">MANAKRISHI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Revolutionizing agriculture through intelligent drones and farmer-first technology solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass rounded-lg hover:text-green-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-lg hover:text-green-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-lg hover:text-green-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-lg hover:text-green-400 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Product</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Krishi-1 Drone</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Precision Spraying</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Data Dashboard</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Soil Analysis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Our Vision</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Impact Stories</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Stay updated on the latest in agritech.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-green-400" />
              <button className="bg-green-500 text-black px-4 py-2 rounded-lg font-bold text-sm">Join</button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 uppercase tracking-widest font-bold">
          <p>© 2024 MANAKRISHI AGRITECH PVT LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
