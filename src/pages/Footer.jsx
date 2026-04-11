import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 text-white font-body relative overflow-hidden">
      
      {/* Subtle green glow in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-display font-bold text-white mb-6 tracking-tighter">
              ಕರ್ನಾಟಕ <span className="text-earth-400 italic">Rural</span>
            </h2>
            <p className="text-white/50 max-w-md leading-relaxed text-lg">
              Preserving the unseen. We connect global travelers with local artisans, hidden rituals, and the authentic pulse of the village.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-earth-400 mb-6">Explore</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li>
                <Link to="/" className="hover:text-white hover:pl-2 transition-all duration-300 block">Home</Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-white hover:pl-2 transition-all duration-300 block">Map Explorer</Link>
              </li>
              <li>
                <Link to="/planner" className="hover:text-white hover:pl-2 transition-all duration-300 block">Smart Planner</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:pl-2 transition-all duration-300 block">Our Story</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-earth-400 mb-6">Connect</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors block">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors block">Twitter / X</a>
              </li>
              <li>
                <a href="mailto:hello@karnatakarural.in" className="hover:text-emerald-400 transition-colors block">
                  hello@karnatakarural.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Karnataka Rural. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}