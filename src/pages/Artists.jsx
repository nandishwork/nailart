import React from 'react';

const Artists = () => {
  const artists = [
    {
      id: 1,
      name: "Sienna Vane",
      role: "Lead Sculptor",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      specialty: "Structural Avant-Garde",
      bio: "Mastering the architecture of the nail with over a decade of experience in high-fashion editorial work."
    },
    {
      id: 2,
      name: "Marcus Thorne",
      role: "Senior Artist",
      image: "https://images.unsplash.com/photo-1508908324153-d1a219719814?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      specialty: "Minimalist Geometry",
      bio: "Focusing on the power of the line and the precision of negative space."
    },
    {
      id: 3,
      name: "Elena Rossi",
      role: "Detail Specialist",
      image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      specialty: "Micro-Painting",
      bio: "Turning every fingertip into a miniature canvas for intricate, hand-painted masterpieces."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen selection:bg-black selection:text-white">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Header */}
        <header className="mb-32 relative">
          <div className="flex flex-col lg:flex-row items-end justify-between border-b border-black pb-12">
            <div className="relative">
              <span className="text-[10px] uppercase tracking-[0.8em] text-black/40 mb-2 block">The Collective</span>
              <h1 className="text-6xl md:text-9xl lg:text-[15rem] font-agraham text-black leading-[0.7] lowercase tracking-tighter -ml-2 lg:-ml-6">
                Artists
              </h1>
            </div>
            <div className="max-w-xs mt-12 lg:mt-0 text-right">
               <p className="text-[10px] uppercase tracking-[0.3em] leading-relaxed text-black/60">
                 MEET THE VISIONARIES BEHIND THE ARTISTRY.
               </p>
            </div>
          </div>
        </header>

        {/* Artists List with Effects */}
        <div className="space-y-40">
          {artists.map((artist, index) => (
            <div 
              key={artist.id} 
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Placeholder with Hover Effect */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[3/4] bg-zinc-100 relative overflow-hidden group-hover:shadow-[20px_20px_0px_rgba(0,0,0,0.05)] transition-all duration-700">
                  {artist.image ? (
                    <img 
                      src={artist.image} 
                      alt={artist.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  ) : (
                    /* Empty space for user's image */
                    <div className="absolute inset-0 flex items-center justify-center border border-dashed border-black/10 group-hover:border-black/30 transition-colors">
                      <span className="text-[10px] uppercase tracking-[0.5em] text-black/20 italic group-hover:text-black/40 transition-colors">Artist Portrait Placeholder</span>
                    </div>
                  )}
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-[1px] bg-black/20" />
                  <div className="absolute top-0 left-0 w-[1px] h-8 bg-black/20" />
                  <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-black/20" />
                  <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-black/20" />
                </div>
                
                {/* Floating number */}
                <span className="absolute -top-8 -left-4 lg:-left-12 text-6xl lg:text-9xl font-agraham text-black/5 z-[-1] group-hover:text-black/10 transition-colors duration-1000">
                  0{index + 1}
                </span>
              </div>

              {/* Info Content */}
              <div className="w-full lg:w-1/2">
                <div className="mb-10">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-black/30 mb-4 block">{artist.role}</span>
                  <h2 className="text-5xl lg:text-8xl font-agraham text-black mb-6 hover:translate-x-4 transition-transform duration-700 cursor-default">
                    {artist.name}
                  </h2>
                  <div className="w-12 h-[1px] bg-black/20 mb-6" />
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-black mb-3 italic">Expertise</h4>
                    <p className="text-sm tracking-widest text-black/60 uppercase">{artist.specialty}</p>
                  </div>
                  
                  <div>
                     <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-black mb-3 italic">Philosophy</h4>
                     <p className="text-black/50 leading-loose text-base font-light max-w-md">
                       {artist.bio}
                     </p>
                  </div>
                  
                  <div className="pt-8 flex space-x-12">
                     <button className="text-[10px] uppercase font-bold tracking-[0.3em] border-b border-black pb-1 hover:opacity-50 transition-all">
                        View Portfolio
                     </button>
                     <button className="text-[10px] uppercase font-bold tracking-[0.3em] border-b border-black pb-1 hover:opacity-50 transition-all">
                        Book Artist
                     </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-60 py-32 border-t border-black/5 text-center">
            <span className="text-[10px] uppercase tracking-[0.6em] text-black/30 mb-8 block">Join the Collective</span>
            <h3 className="text-4xl lg:text-7xl font-agraham mb-12">Are you an Artist?</h3>
            <button className="px-12 py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] hover:px-16 transition-all duration-700">
               Apply to HIVNK Studio
            </button>
        </div>
      </div>
    </div>
  );
};

export default Artists;
