import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <section className="relative h-[80vh] lg:h-screen w-full overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1709102125947-5037b0983325?q=80&w=1200&auto=format&fit=crop" 
            alt="HIVNK Couture" 
            className="w-full h-full object-cover scale-[1.02] grayscale"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block" />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] lg:hidden z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10 lg:hidden" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-24 relative z-20 flex flex-col justify-center h-full">
          <div className="max-w-4xl">
            <span className="block text-xs uppercase tracking-[0.5em] text-black/60 mb-6 bg-white/40 lg:bg-transparent w-fit px-2 py-1">
              The New Era of Aesthetic
            </span>
            
            <h1 className="text-[20vw] sm:text-[15vw] lg:text-[10rem] font-agraham leading-[0.8] mb-8 text-black transition-all duration-1000">
              HIVNK
            </h1>
            
            <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-8">
              <p className="max-w-md text-xs sm:text-sm lg:text-base text-black/60 leading-relaxed font-light tracking-wide">
                Where avant-garde design meets the architecture of the fingertip. 
                We don't just paint—we sculpt identity through the art of couture nail design.
              </p>
              
              <div className="flex items-center space-x-4 lg:space-x-6">
                <div className="w-8 lg:w-12 h-[1px] bg-black hidden sm:block" />
                <button className="text-[9px] lg:text-[10px] uppercase font-bold tracking-[0.2em] lg:tracking-[0.3em] text-black hover:opacity-50 transition-all border-b border-black pb-1 whitespace-nowrap">
                  Discover the Collection
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Vertical Text */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block">
          <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[1em] text-black/20 font-light">
            Couture · Minimal · Avant-Garde
          </span>
        </div>
        
        {/* Bottom Decorative Element */}
        <div className="absolute bottom-12 left-6 lg:left-24 flex items-center space-x-4">
           <div className="flex space-x-1">
             {[1, 2, 3].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full border border-black/20" />
             ))}
           </div>
           <span className="text-[9px] uppercase tracking-[0.2em] text-black/50">EST. 2026</span>
        </div>
      </section>

      {/* About Section - Redesigned to White Aesthetic */}
      <section className="py-20 lg:py-56 bg-white text-black px-6 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-32 mb-16 lg:mb-32">
            <div className="w-full lg:w-1/2">
              <span className="text-[10px] uppercase tracking-[0.5em] text-black/30 mb-8 block">Atelier Philosophy</span>
              <h2 className="text-5xl lg:text-[10rem] font-agraham mb-12 leading-[0.8] tracking-tighter">Beyond <br/>Perfection</h2>
              <div className="flex items-center space-x-8 mt-12">
                <div className="w-16 h-[1px] bg-black" />
                <p className="text-black/50 leading-relaxed text-sm lg:text-base font-light max-w-sm italic">
                  "Our atelier is a sanctuary for those who seek the extraordinary. Every stroke is intentional, 
                  every texture is curated."
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 pt-12">
              <p className="text-black/60 leading-loose text-lg font-light mb-12">
                We believe that nails are more than just an accessory—they are the final punctuation mark of your personal style. 
                At HIVNK, we combine clinical precision with avant-garde artistic vision to create masterpieces that are uniquely yours.
              </p>
              <a href="/services" className="inline-block px-12 py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] hover:bg-black/80 transition-all duration-500">
                Explore Treatments
              </a>
            </div>
          </div>

          {/* Unique Photo Layout */}
          <div className="grid grid-cols-12 gap-4 lg:gap-8 items-stretch mb-20 lg:mb-40">
            <div className="col-span-12 lg:col-span-7 aspect-[4/5] lg:aspect-square overflow-hidden">
               <img src="https://images.unsplash.com/photo-1659990668491-9bcdc5b06338?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Main Art" />
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 lg:gap-8">
               <div className="h-1/2 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1537510600747-0c6dd8dbcd2f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Detail 1" />
               </div>
               <div className="h-1/2 grid grid-cols-2 gap-4 lg:gap-8">
                  <div className="overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Detail 2" />
                  </div>
                  <div className="overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1537510600747-0c6dd8dbcd2f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Detail 3" />
                  </div>
               </div>
            </div>
          </div>

          {/* Why Choose Us (Trust Section) */}
          <section className="py-12 lg:py-24 border-t border-black/5">
             <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
                <div className="lg:w-1/3">
                   <span className="text-[10px] uppercase tracking-[0.5em] text-black/30 mb-6 block font-bold">The Standard</span>
                   <h2 className="text-5xl lg:text-7xl font-agraham text-black leading-none lowercase tracking-tighter mb-8">
                      Why <br/>HIVNK?
                   </h2>
                </div>
                
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                   {[
                      { title: "Certified Artists", detail: "Our sculptors are globally certified in avant-garde structural design." },
                      { title: "Premium Products", detail: "Exclusively using clinical-grade, high-pigment couture polymers." },
                      { title: "Hygienic Tools", detail: "Medical-grade sterilization for every session. Zero compromise." },
                      { title: "1000+ Clients", detail: "A growing community of visionaries who value the architecture of beauty." }
                   ].map((item, index) => (
                      <div key={index} className="group">
                         <div className="w-8 h-[1px] bg-black mb-6 group-hover:w-16 transition-all duration-700" />
                         <h4 className="text-base lg:text-lg tracking-[0.2em] font-medium text-black uppercase mb-4">{item.title}</h4>
                         <p className="text-black/50 text-xs lg:text-sm leading-loose font-light uppercase tracking-widest">
                            {item.detail}
                         </p>
                      </div>
                   ))}
                </div>
             </div>
          </section>

          {/* Rating / Testimonials Section */}
          <section className="py-16 lg:py-24 border-t border-black/5">
             <div className="text-center mb-12 lg:mb-20">
                <span className="text-[10px] uppercase tracking-[0.6em] text-black/30 mb-6 block font-bold">Client Testimonials</span>
                <div className="flex justify-center space-x-1 mb-6">
                   {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                   ))}
                </div>
                <h3 className="text-4xl lg:text-7xl font-agraham text-black leading-none tracking-tighter">Excellent 4.9/5</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                {[
                   { name: "Alessia M.", quote: "The structural integrity of my extensions is unmatched. A true architectural feat for the hands." },
                   { name: "Julian Voss", quote: "Minimalist, precise, and breathtakingly aesthetic. HIVNK is in a category of its own." },
                   { name: "Seraphina L.", quote: "The editorial experience from start to finish. My nails have never felt more like a piece of art." }
                ].map((review, i) => (
                   <div key={i} className="text-center md:text-left">
                      <p className="text-black/60 text-sm lg:text-base leading-loose font-light italic mb-6">
                         "{review.quote}"
                      </p>
                      <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-black/40">— {review.name}</span>
                   </div>
                ))}
             </div>
          </section>

        </div>
      </section>
    </div>
  )
}

export default Home;
