import React from 'react';
import { Calendar, History, CreditCard, Award, MessageSquare, ChevronRight, CheckCircle2 } from 'lucide-react';

const Profile = () => {
  const upcoming = [
    { id: 1, service: "Acrylic Extensions", artist: "Alessia M.", date: "12 April, 2026", time: "15:00", status: "Confirmed" }
  ];

  const history = [
    { id: 101, service: "Minimalist Art", date: "24 Feb, 2026", price: "2,499", artist: "Julian Voss" },
    { id: 102, service: "Spa Pedicure", date: "10 Jan, 2026", price: "1,199", artist: "Seraphina L." }
  ];

  const transactions = [
    { id: "TXN778", date: "12 April", amount: "999", type: "Deposit", method: "UPI" },
    { id: "TXN552", date: "24 Feb", amount: "2,499", type: "Final Payment", method: "Card" }
  ];

  return (
    <div className="pt-32 pb-40 bg-white min-h-screen selection:bg-black selection:text-white">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Profile Header */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 pb-12">
          <div>
             <span className="text-[10px] uppercase tracking-[0.6em] text-black/30 mb-4 block font-bold">Client Archive</span>
             <h1 className="text-7xl lg:text-9xl font-agraham text-black leading-none lowercase tracking-tighter">
                The Profile
             </h1>
          </div>
          <div className="mt-8 md:mt-0 text-right">
             <div className="flex items-center gap-4 justify-end mb-2">
                <Award size={18} className="text-black" />
                <span className="text-3xl font-bold tracking-tighter">1,240</span>
             </div>
             <p className="text-[9px] uppercase tracking-[0.4em] text-black/40 font-bold">Atelier Points // VIP Status</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - Main Activity */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Upcoming Section */}
            <section>
               <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[10px] uppercase tracking-[0.5em] text-black/40 font-black">Upcoming Reserve</h2>
                  <div className="h-[1px] flex-1 bg-black/5 mx-6" />
               </div>
               {upcoming.map(item => (
                  <div key={item.id} className="p-8 border border-black/10 bg-zinc-50 flex flex-col md:flex-row md:items-center justify-between relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-1 h-full bg-black" />
                     <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-serif mb-2">{item.service}</h3>
                        <p className="text-[10px] uppercase tracking-widest text-black/40">Artist // {item.artist}</p>
                     </div>
                     <div className="flex items-center gap-12">
                        <div className="text-right">
                           <span className="block text-sm font-bold tracking-tight">{item.date}</span>
                           <span className="text-[10px] uppercase tracking-widest text-black/30">{item.time}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full">
                           <CheckCircle2 size={12} />
                           <span className="text-[9px] font-bold uppercase tracking-widest">{item.status}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </section>

            {/* Past History Section */}
            <section>
               <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[10px] uppercase tracking-[0.5em] text-black/40 font-black">Treatment History</h2>
                  <div className="h-[1px] flex-1 bg-black/5 mx-6" />
               </div>
               <div className="space-y-4">
                  {history.map(item => (
                     <div key={item.id} className="flex items-center justify-between py-6 border-b border-black/5 group hover:px-4 transition-all duration-500">
                        <div className="flex items-center gap-6">
                           <div className="w-12 h-12 bg-zinc-50 border border-black/5 flex items-center justify-center">
                              <History size={16} className="text-black/20" />
                           </div>
                           <div>
                              <h4 className="text-[11px] font-black uppercase tracking-widest mb-1">{item.service}</h4>
                              <p className="text-[9px] text-black/30 tracking-widest uppercase">Artist: {item.artist} // {item.date}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-8">
                           <span className="text-sm font-bold tracking-tight">₹{item.price}</span>
                           <ChevronRight size={14} className="text-black/20" />
                        </div>
                     </div>
                  ))}
               </div>
            </section>

            {/* Transaction Archive */}
            <section>
               <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[10px] uppercase tracking-[0.5em] text-black/40 font-black">Financial Archive</h2>
                  <div className="h-[1px] flex-1 bg-black/5 mx-6" />
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-black/10">
                           <th className="py-4 text-[9px] uppercase tracking-widest text-black/30">ID</th>
                           <th className="py-4 text-[9px] uppercase tracking-widest text-black/30">Date</th>
                           <th className="py-4 text-[9px] uppercase tracking-widest text-black/30">Method</th>
                           <th className="py-4 text-right text-[9px] uppercase tracking-widest text-black/30">Amount</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-black/5">
                        {transactions.map(t => (
                           <tr key={t.id} className="hover:bg-zinc-50 transition-colors">
                              <td className="py-6 text-[10px] font-bold tracking-tighter text-black/60">{t.id}</td>
                              <td className="py-6 text-[10px] uppercase tracking-widest text-black/40 font-medium">{t.date}</td>
                              <td className="py-6 text-[10px] uppercase tracking-widest text-black/40 font-medium">{t.method}</td>
                              <td className="py-6 text-right text-[11px] font-bold tracking-widest text-black">₹{t.amount}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </section>
          </div>

          {/* Right Column - Loyalty & Feedback */}
          <div className="lg:col-span-4 space-y-16">
            
            {/* Loyalty Point Progress */}
            <div className="p-10 border border-black/5 bg-zinc-50 relative overflow-hidden">
               <div className="absolute -right-8 -bottom-8 opacity-5">
                  <Award size={160} />
               </div>
               <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-black/30 mb-8">Loyalty Meter</h3>
               <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-end">
                     <span className="text-3xl font-agraham">Gold Tier</span>
                     <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">76% to Platinum</span>
                  </div>
                  <div className="w-full h-1 bg-black/10">
                     <div className="w-3/4 h-full bg-black" />
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.2em] leading-loose text-black/40 font-medium italic">
                     EXCLUSIVE ACCESS TO ATELIER PRIVATE COLLECTIONS & PRIORITY BOOKING.
                  </p>
               </div>
            </div>

            {/* Feedback / Review Box */}
            <div className="p-10 border border-black bg-black text-white">
               <MessageSquare size={24} className="mb-6 opacity-40 text-white" />
               <h3 className="text-xl font-serif mb-6 leading-tight">Your vision matters to the atelier.</h3>
               <p className="text-[9px] uppercase tracking-[0.2em] leading-relaxed text-white/50 mb-8 font-medium">
                  HAVE FEEDBACK ON YOUR LAST TREATMENT? SHARE YOUR PERSPECTIVE WITH OUR ARTISTS.
               </p>
               <button className="w-full py-5 border border-white/20 text-[9px] font-black tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                  WRITE PERSPECTIVE
               </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;
