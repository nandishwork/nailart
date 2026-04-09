import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Architecture of the Minimalist Nail",
      category: "Design Theory",
      date: "APR 12, 2026",
      image: "https://images.unsplash.com/photo-1753285310651-6974a839c992",
      excerpt: "Exploring the intersection of structural integrity and aesthetic restraint in modern nail design."
    },
    {
      id: 2,
      title: "Avant-Garde Textures: Beyond the Gloss",
      category: "Trends",
      date: "MAR 28, 2026",
      image: "https://images.unsplash.com/photo-1698308261266-abde13a5db1f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      excerpt: "Why matte, stone, and raw textures are defining the next decade of couture nail artistry."
    },
    {
      id: 3,
      title: "The HIVNK Methodology: A Masterclass",
      category: "Editorial",
      date: "MAR 15, 2026",
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800",
      excerpt: "An inside look at how our lead artists conceive and execute one-of-a-kind masterpieces."
    }
  ];

  return (
    <div className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen selection:bg-black selection:text-white">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* New Editorial Header */}
        <header className="mb-16 lg:mb-32 relative">
          <div className="flex flex-col lg:flex-row items-end justify-between border-b border-black pb-12">
            <div className="relative">
              <span className="text-[10px] uppercase tracking-[0.8em] text-black/40 mb-2 block">Volume 01 // Archive</span>
              <h1 className="text-6xl md:text-9xl lg:text-[15rem] font-agraham text-black leading-[0.7] lowercase tracking-tighter -ml-2 lg:-ml-6">
                Muse
              </h1>
            </div>
            <div className="max-w-xs mt-12 lg:mt-0">
               <p className="text-[10px] uppercase tracking-[0.3em] leading-relaxed text-black/60 italic">
                 "A curated space for the visionaries, the bold, and the sculptors of identity."
               </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 hidden xl:block">
             <span className="[writing-mode:vertical-rl] text-[9px] uppercase tracking-[1em] text-black/20"></span>
          </div>
        </header>

        {/* Featured Post - Redesigned */}
        <section className="mb-20 lg:mb-40 group cursor-pointer relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
             <div className="w-full lg:w-3/5 relative overflow-hidden aspect-[16/10]">
                <img 
                  src="https://images.unsplash.com/photo-1709102125947-5037b0983325?q=80&w=1228&auto=format&fit=crop"
                  alt="Featured" 
                  className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000" />
             </div>
             <div className="w-full lg:w-2/5">
                <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-black/30 mb-6 block">Featured Story</span>
                <h2 className="text-4xl lg:text-7xl font-agraham leading-[1] mb-8 transition-all duration-700">
                  Ethical Luxury: The Future of Design
                </h2>
                <p className="text-black/50 leading-loose text-sm font-light mb-12">
                  Exploring the bridge between responsible sourcing and avant-garde beauty. Why the next decade of luxury depends on our ability to respect the raw materials of our art.
                </p>
                <div className="flex items-center space-x-6">
                   <button className="text-[10px] uppercase font-bold tracking-[0.4em] bg-black text-white px-10 py-5 hover:bg-black/80 transition-all">
                      Read Story
                   </button>
                </div>
             </div>
          </div>
        </section>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 lg:gap-y-24">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-zinc-100 overflow-hidden mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-1000"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] uppercase tracking-widest font-bold text-black/40">{post.category}</span>
                <span className="text-[9px] text-black/30">{post.date}</span>
              </div>
              <h3 className="text-2xl font-agraham leading-tight mb-6 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-black/50 leading-relaxed font-light mb-8 line-clamp-2">
                {post.excerpt}
              </p>
              <button className="text-[9px] uppercase tracking-[0.2em] font-bold transition-all duration-500">
                Read More +
              </button>
            </article>
          ))}
        </div>

        {/* Load More / Newsletter */}
        <div className="mt-20 lg:mt-40 pt-16 lg:pt-24 border-t border-black/5 text-center">
            <h4 className="text-3xl font-agraham mb-8">Subscribe to the Muse</h4>
            <p className="text-black/40 text-xs tracking-widest uppercase mb-12">Weekly editorial direct to your inbox</p>
            <div className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="flex-1 bg-transparent border-b border-black/10 py-4 text-xs tracking-widest focus:outline-none focus:border-black transition-colors"
              />
              <button className="ml-8 text-[10px] uppercase font-bold tracking-[0.3em] border-b border-black pb-4 hover:opacity-50 transition-opacity">
                Join
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
