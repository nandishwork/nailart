import React, { useState, useEffect } from 'react';
import { Search, Heart, User, Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Disable body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Artists', href: '/artists' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-4' : 'bg-white py-8'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-serif tracking-[0.2em] font-black uppercase text-black">
              HIVNK
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs uppercase tracking-[0.15em] font-medium text-black/60 hover:text-black transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Utility & Icons */}
          <div className="hidden lg:flex items-center space-x-8">
            <button className="text-black/70 hover:text-black transition-transform duration-300 hover:scale-110 p-1">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="text-black/70 hover:text-black transition-transform duration-300 hover:scale-110 p-1">
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <Link to="/profile" className="text-black/70 hover:text-black transition-transform duration-300 hover:scale-110 p-1">
              <User size={20} strokeWidth={1.5} />
            </Link>
            
            <Link 
              to="/booking" 
              className="px-8 py-3 bg-black text-white text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-black/80 transition-all duration-500 hover:px-10"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center space-x-4">
            <button className="lg:hidden text-black p-1">
              <Search size={20} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-1 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[99] xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Boutique Mobile Drawer - 85% width for mobile */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[85%] sm:w-[500px] bg-white z-[100] transition-transform duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } xl:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.15)] overflow-hidden`}
      >
        <div className="flex flex-col h-full bg-white relative">
          
          {/* Top Bar for Drawer - Fixed Height */}
          <div className="flex items-center justify-between px-8 py-10 border-b border-black/5 bg-white relative z-10">
             <span className="text-sm font-serif tracking-[0.2em] font-black uppercase text-black">Menu</span>
             <button 
               onClick={() => setIsOpen(false)}
               className="p-2 -mr-2 text-black hover:rotate-90 transition-transform duration-500"
             >
               <X size={24} />
             </button>
          </div>

          <div className="flex-1 overflow-y-auto px-8 py-12 scrollbar-none bg-white">
             
             {/* Search inside Menu */}
             <div className="mb-12 relative group">
                <input 
                  type="text" 
                  placeholder="SEARCH ATELIER..." 
                  className="w-full bg-zinc-50 border-none px-4 py-4 text-[10px] tracking-widest uppercase focus:ring-1 focus:ring-black/10 transition-all"
                />
                <Search size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-black/20 group-focus-within:text-black transition-colors" />
             </div>

             {/* Dynamic Link List */}
             <nav className="flex flex-col space-y-1">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline py-4 border-b border-black/5 last:border-none"
                  >
                    <span className="text-[9px] font-bold text-black/20 mr-4 tracking-tighter">0{i + 1}</span>
                    <span className="text-3xl font-serif tracking-tight text-black group-hover:pl-4 transition-all duration-500 transition-cubic">
                       {link.name}
                    </span>
                  </Link>
                ))}
             </nav>

                 <div className="pt-12 space-y-4">
                    <Link 
                      to="/profile" 
                      onClick={() => setIsOpen(false)} 
                      className="flex items-center justify-center space-x-4 w-full py-6 bg-black text-white hover:bg-zinc-800 transition-all group"
                    >
                       <User size={16} className="text-white/70 group-hover:text-white" />
                       <span className="text-[10px] font-black tracking-[0.4em] uppercase">Profile</span>
                    </Link>

                    <Link 
                      to="/booking"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center py-6 bg-black text-white text-[10px] font-bold tracking-[0.4em] hover:bg-zinc-800 transition-all"
                    >
                      SECURE APPOINTMENT
                    </Link>
                 </div>
          </div>

          {/* Drawer Footer */}
          <div className="px-8 py-10 bg-zinc-50 border-t border-black/5">
             <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase">HIVNK</span>
                <span className="text-[8px] tracking-widest text-black/40">© 2026 // ATELIER</span>
             </div>
             <p className="text-[8px] tracking-[0.2em] text-black/30 uppercase">
                Architecture of the Fingertip.
             </p>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
