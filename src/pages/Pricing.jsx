import React from 'react';

const Pricing = () => {
  const categories = [
    {
      id: "01",
      title: "Nail Extensions",
      important: true,
      description: "Our signature MONEY-MAKER treatments for structural length and strength.",
      services: [
        { name: "Acrylic Extensions", price: "1,999", tag: "Most Popular" },
        { name: "Gel Extensions", price: "1,799", tag: "Natural Look" },
        { name: "Polygel Extensions", price: "2,499", tag: "Ultra-Light" },
        { name: "Refills / Infill (Set)", price: "1,299", tag: "" }
      ]
    },
    {
      id: "02",
      title: "Nail Art Designs",
      important: false,
      description: "Transforming your fingertips into miniature canvases of avant-garde art.",
      services: [
        { name: "Minimal Art (Per Nail)", price: "150", tag: "" },
        { name: "3D Art (Full Set)", price: "1,499", tag: "Textured" },
        { name: "Chrome / Ombre (Set)", price: "899", tag: "Duo-Tone" },
        { name: "Custom Designs (Atelier)", price: "2,999", tag: "Unique" }
      ]
    },
    {
      id: "03",
      title: "Manicure & Pedicure",
      important: false,
      description: "Essential maintenance for the modern soul. Entry-level luxury.",
      services: [
        { name: "Basic Manicure", price: "599", tag: "" },
        { name: "Spa Pedicure", price: "1,199", tag: "Relaxation" },
        { name: "Gel Manicure (Set)", price: "999", tag: "Long-Lasting" }
      ]
    },
    {
      id: "04",
      title: "Bridal & Occasion",
      important: true,
      description: "High-value bundles for your most significant moments.",
      services: [
        { name: "Bridal Nails Package", price: "4,999", tag: "Premium" },
        { name: "Festive / Party Nails", price: "3,499", tag: "Luxury" },
        { name: "Full Custom Bridal Set", price: "6,999", tag: "Atelier" }
      ]
    },
    {
      id: "05",
      title: "Removal & Maintenance",
      important: false,
      description: "Necessary care to protect your natural nail integrity.",
      services: [
        { name: "Gel Removal", price: "399", tag: "" },
        { name: "Acrylic Removal", price: "599", tag: "" },
        { name: "Emergency Nail Repair", price: "199", tag: "" },
        { name: "Refill Maintenance", price: "899", tag: "" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-40 bg-white min-h-screen selection:bg-black selection:text-white">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Simplified Editorial Header */}
        <header className="mb-32 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-baseline gap-4 mb-4">
             <span className="text-[10px] uppercase tracking-[0.8em] text-black/30">Archives 2026 // Menu</span>
          </div>
          <h1 className="mt-7 text-6xl md:text-8xl lg:text-[12rem] font-agraham text-black leading-[0.7] lowercase tracking-tighter">
            Pricing
          </h1>
          <p className="mt-20 text-black/40 text-[10px] uppercase tracking-[0.4em] italic font-light">
             Refining the architecture of the fingertip. Starting from ₹150.
          </p>
        </header>

        {/* Pricing List - Spaced Out for Readability */}
        <div className="space-y-40">
          {categories.map((cat) => (
            <section key={cat.id} className="relative">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                
                {/* Category Sidebar */}
                <div className="w-full lg:w-1/3">
                  <div className="sticky top-32">
                    <span className="text-[10px] uppercase tracking-[0.6em] text-black/20 block mb-6">{cat.id} // Section</span>
                    <h2 className={`text-5xl lg:text-7xl font-agraham mb-8 leading-none ${cat.important ? 'text-black' : 'text-black/80'}`}>
                      {cat.title}
                    </h2>
                    <p className="text-black/40 text-xs tracking-[0.1em] leading-relaxed uppercase max-w-[280px]">
                      {cat.description}
                    </p>
                    {cat.important && (
                      <div className="mt-8 inline-block px-4 py-2 border border-black text-[9px] uppercase tracking-[0.3em] font-bold">
                         High Priority Service
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Items */}
                <div className="w-full lg:w-2/3">
                  <div className="space-y-12">
                    {cat.services.map((service, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between group border-b border-black/5 pb-8">
                        <div className="mb-4 sm:mb-0">
                          <div className="flex items-center gap-4">
                             <h4 className="text-base lg:text-lg tracking-[0.1em] text-black uppercase font-medium">{service.name}</h4>
                             {service.tag && (
                               <span className="text-[8px] uppercase tracking-[0.2em] px-2 py-1 bg-black text-white font-bold">
                                 {service.tag}
                               </span>
                             )}
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                           <span className="text-xl lg:text-2xl font-medium text-black transition-transform duration-500 tracking-tight">
                             ₹{service.price}
                           </span>
                           <button className="text-[9px] uppercase tracking-[0.3em] border border-black/10 px-6 py-3 hover:bg-black hover:text-white transition-all duration-500">
                              Book
                           </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Category Footer Note */}
                  <div className="mt-12 text-[9px] tracking-[0.4em] text-black/20 uppercase">
                    All prices are inclusive of luxury maintenance kit.
                  </div>
                </div>

              </div>
            </section>
          ))}
        </div>

        {/* Global Footer Note */}
        <div className="mt-60 pt-20 border-t border-black/5 text-center px-4">
           <h3 className="text-3xl lg:text-5xl font-agraham mb-8">Consultation Required?</h3>
           <p className="max-w-xl mx-auto text-black/40 text-xs tracking-widest leading-relaxed uppercase mb-12">
             For bridal and custom designs, we recommend a 15-minute digital consultation to perfectly match your aesthetic vision with our technical expertise.
           </p>
           <button className="px-16 py-6 bg-black text-white text-[10px] uppercase tracking-[0.4em] hover:bg-black/80 transition-all">
              Schedule Consultation
           </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
