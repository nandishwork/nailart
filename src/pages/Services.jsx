import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Nail Extensions",
      price: "1,799",
      description: "Our core structural mastery. Whether you choose Acrylic, Gel, or Polygel, we sculpt each extension to complement the unique architecture of your hands.",
      image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Nail Art Designs",
      price: "150",
      description: "From minimalist lines to complex 3D structures. Our artists treat every nail as a miniature canvas for avant-garde expression.",
      image: "https://images.unsplash.com/photo-1684609365994-a144ee021c88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Manicure & Pedicure",
      price: "599",
      description: "The foundation of hand health. We combine medical-grade precision with luxury spa rituals for the ultimate maintenance experience.",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Bridal & Occasion",
      price: "4,999",
      description: "Bespoke packages designed for your most significant moments. Includes detailed consultation and specialized sets for brides and festive events.",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Removal & Maintenance",
      price: "199",
      description: "Gentle removal and meticulous repair. We ensure the long-term integrity of your natural nails through expert maintenance.",
      image: "https://images.unsplash.com/photo-1613380833630-2b2c708b1814?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="pt-32 pb-40 bg-white min-h-screen selection:bg-black selection:text-white">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Editorial Header */}
        <header className="mb-32">
          <span className="text-[10px] uppercase tracking-[0.5em] text-black/30 mb-4 block">The Experience</span>
          <h1 className="text-7xl lg:text-[10rem] font-agraham text-black leading-none lowercase tracking-tighter">
            Treatments
          </h1>
          <p className="mt-8 text-black/50 text-[10px] uppercase tracking-[0.4em] italic max-w-sm">
             A curation of structural artistry and clinical precision.
          </p>
        </header>

        {/* Services List - Staggered Editorial Layout */}
        <div className="space-y-48 lg:space-y-64">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Container with Hover Scaling */}
              <div className="w-full lg:w-3/5 overflow-hidden aspect-[16/10] bg-zinc-100 relative group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000" />
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-2/5">
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-[0.8em] text-black/20 block mb-4">0{index + 1} //</span>
                  <h2 className="text-4xl lg:text-7xl font-agraham mb-6 text-black lowercase leading-tight">
                    {service.title}
                  </h2>
                  <div className="w-12 h-[1px] bg-black/20" />
                </div>
                
                <p className="text-black/60 leading-relaxed font-light text-base lg:text-lg mb-12">
                   {service.description}
                </p>
                
                <div className="flex flex-col gap-8">
                   <a href="/pricing" className="inline-block w-fit text-[10px] uppercase font-bold tracking-[0.4em] border-b border-black pb-1 hover:opacity-50 transition-all">
                      View Detailed Menu
                   </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-60 py-32 border-t border-black/5 text-center">
            <span className="text-[10px] uppercase tracking-[0.6em] text-black/30 mb-8 block">Ready for the transformation?</span>
            <h3 className="text-4xl lg:text-8xl font-agraham mb-12">Book Your Session</h3>
            <button className="px-16 py-6 bg-black text-white text-[10px] uppercase tracking-[0.5em] hover:px-20 transition-all duration-700">
               Secure Appointment
            </button>
        </div>

      </div>
    </div>
  );
};

export default Services;
