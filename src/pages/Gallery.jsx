import React from 'react';

const Gallery = () => {
  // Consolidating all unique images used across the project
  const images = [
    // Home Page Images
    "https://images.unsplash.com/photo-1659990668491-9bcdc5b06338?q=80&w=1171&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1537510600747-0c6dd8dbcd2f?q=80&w=1169&auto=format&fit=crop",
    
    // Services Page Images
    "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1684609365994-a144ee021c88?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613380833630-2b2c708b1814?q=80&w=1167&auto=format&fit=crop",
    
    // Artists Page Portraits
    "https://images.unsplash.com/photo-1727199433231-346fd8101839?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722203098821-aa186f7969dc?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494919138911-02d403edd88d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    // Blog Editorial Images
    "https://images.unsplash.com/photo-1753285310651-6974a839c992?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1698308261266-abde13a5db1f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1709102125947-5037b0983325?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <div className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen selection:bg-black selection:text-white">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Header */}
        <header className="mb-12 lg:mb-24 relative border-b border-black pb-12">
          <span className="text-[10px] uppercase tracking-[0.8em] text-black/30 mb-2 block">The Visual Archive</span>
          <h1 className="mb-3 mt-7 text-6xl md:text-9xl lg:text-[12rem] font-agraham text-black leading-[0.7] lowercase tracking-tighter -ml-2 lg:-ml-6">
            Gallery
          </h1>
          <div className="absolute top-0 right-0 hidden lg:block text-right">
             <p className="text-[9px] uppercase tracking-[0.4em] text-black/40 italic">Consolidated // Curated</p>
          </div>
        </header>

        {/* Gallery Grid - Masonry Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="break-inside-avoid overflow-hidden group relative bg-zinc-50 border border-black/5"
            >
              <img 
                src={src} 
                alt={`Archive ${index}`} 
                className="w-full h-auto object-cover transition-all duration-[1.5s] ease-out group-hover:scale-105"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
              
              {/* Image Numbering */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <span className="text-[9px] uppercase tracking-widest text-white px-2 py-1 bg-black font-bold">
                   Ref No. {index + 1}
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Footer */}
        <div className="mt-20 lg:mt-40 text-center border-t border-black/5 pt-12 lg:pt-20">
            <span className="text-[10px] uppercase tracking-[0.6em] text-black/20 mb-4 block italic">End of Archive</span>
            <p className="text-black/40 text-[9px] uppercase tracking-widest leading-loose">
               ALL IMAGES ARE PROPERTY OF HIVNK ATELIER & ASSOCIATED ARTISTS.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
