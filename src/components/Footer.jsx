import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 lg:pt-24 pb-8 lg:pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-6xl lg:text-8xl font-agraham text-white block mb-8 hover:opacity-80 transition-opacity">
              HIVNK
            </Link>
            <p className="max-w-sm text-white/40 leading-relaxed font-light text-sm mb-8">
              Couture nail artistry for the avant-garde. We blend structural design with high-fashion aesthetics to redefine the boundaries of beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-white/30">Navigate</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/" className="hover:text-white/60 transition-colors tracking-widest text-[10px] uppercase">Home</Link></li>
              <li><Link to="/gallery" className="hover:text-white/60 transition-colors tracking-widest text-[10px] uppercase">Gallery</Link></li>
              <li><Link to="/services" className="hover:text-white/60 transition-colors tracking-widest text-[10px] uppercase">Services</Link></li>
              <li><Link to="/blog" className="hover:text-white/60 transition-colors tracking-widest text-[10px] uppercase">Editorial</Link></li>
              <li><Link to="/contact" className="hover:text-white/60 transition-colors tracking-widest text-[10px] uppercase">Appointments</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-white/30">The Atelier</h4>
            <p className="text-[10px] tracking-widest text-white/60 mb-6 uppercase">
              72nd Avenue, Manhattan<br/>New York, NY 10001
            </p>
            <p className="text-[10px] tracking-widest text-white/60 mb-12 uppercase">
              Atelier@hivnk.com<br/>+1 (212) 555-0198
            </p>
            
            <div className="relative group">
              <input 
                type="text" 
                placeholder="JOIN THE LIST" 
                className="w-full bg-transparent border-b border-white/10 pb-4 text-[9px] tracking-[0.3em] focus:outline-none focus:border-white transition-colors"
              />
              <button className="absolute right-0 bottom-4 text-white hover:translate-x-2 transition-transform duration-500">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] tracking-[0.3em] text-white/20 uppercase font-light">
            © 2026 HIVNK Studio. All rights reserved.
          </p>
          <div className="flex space-x-12 text-[9px] tracking-[0.2em] text-white/20 uppercase">
             <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
