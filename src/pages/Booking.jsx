import React, { useState } from 'react';
import { CreditCard, Calendar, Clock, Check, Smartphone, Landmark, Wallet, ChevronRight } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [bookingData, setBookingData] = useState({
    service: '',
    artist: '',
    date: '',
    time: ''
  });

  const services = [
    "Acrylic Extensions", "Gel Extensions", "Polygel Extensions", 
    "Minimalist Art", "3D Avant-Garde", "Bridal Package"
  ];

  const artists = ["Alessia M.", "Julian Voss", "Seraphina L."];

  const paymentOptions = [
    { id: 'upi', label: 'UPI (GPay/PhonePe)', icon: <Smartphone size={16} /> },
    { id: 'card', label: 'Credit / Debit Card', icon: <CreditCard size={16} /> },
    { id: 'netbanking', label: 'Net Banking', icon: <Landmark size={16} /> },
    { id: 'wallets', label: 'Wallets (Paytm/Mobikwik)', icon: <Wallet size={16} /> }
  ];

  return (
    <div className="pt-32 pb-40 bg-zinc-50 min-h-screen selection:bg-black selection:text-white">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Editorial Header */}
        <header className="mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.6em] text-black/30 mb-4 block font-bold">Atelier Reserve</span>
          <h1 className="text-6xl lg:text-[10rem] font-agraham text-black leading-none lowercase tracking-tighter">
            Booking
          </h1>
          <div className="mt-12 flex justify-center items-center gap-8">
             {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-4">
                   <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] ${step >= s ? 'bg-black text-white border-black' : 'border-black/10 text-black/20'}`}>
                      {step > s ? <Check size={12} /> : s}
                   </div>
                   {s < 3 && <div className="w-8 md:w-12 h-[1px] bg-black/5" />}
                </div>
             ))}
          </div>
        </header>

        <div className="max-w-6xl mx-auto bg-white border border-black/5 shadow-2xl flex flex-col lg:flex-row overflow-hidden">
          
          {/* Main Form Area */}
          <div className="flex-1 p-6 lg:p-16 border-r border-black/5">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-2xl lg:text-3xl font-serif mb-12 tracking-tight">Select your treatment and artist.</h2>
                <div className="space-y-12">
                   <div>
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-4 block">Service</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {services.map(s => (
                            <button 
                              key={s}
                              onClick={() => setBookingData({...bookingData, service: s})}
                              className={`text-left px-6 py-4 border text-[10px] tracking-widest uppercase transition-all ${bookingData.service === s ? 'border-black bg-black text-white' : 'border-black/5 hover:border-black/20'}`}
                            >
                               {s}
                            </button>
                         ))}
                      </div>
                   </div>
                   <div>
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-4 block">Artist Preferred</label>
                      <div className="flex flex-wrap gap-4">
                         {artists.map(a => (
                            <button 
                              key={a}
                              onClick={() => setBookingData({...bookingData, artist: a})}
                              className={`px-8 py-3 border text-[10px] tracking-[0.2em] uppercase transition-all ${bookingData.artist === a ? 'border-black bg-black text-white' : 'border-black/5 hover:border-black/20'}`}
                            >
                               {a}
                            </button>
                         ))}
                      </div>
                   </div>
                   <button 
                     onClick={() => setStep(2)}
                     disabled={!bookingData.service || !bookingData.artist}
                     className="mt-12 w-full py-6 bg-black text-white text-[10px] font-bold tracking-[0.5em] disabled:bg-zinc-100 disabled:text-zinc-400 transition-all"
                   >
                      Next: DateTime Selection
                   </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-2xl lg:text-3xl font-serif mb-12 tracking-tight">Curation of time.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div>
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-4 block">Select Date</label>
                      <input 
                        type="date" 
                        onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                        className="w-full border-b border-black/10 py-4 text-sm focus:border-black outline-none transition-all bg-transparent" 
                      />
                   </div>
                   <div>
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-4 block">Select Time</label>
                      <div className="grid grid-cols-3 gap-2">
                         {["10:00", "12:30", "15:00", "17:30", "19:00"].map(t => (
                            <button 
                              key={t}
                              onClick={() => setBookingData({...bookingData, time: t})}
                              className={`py-3 border text-[9px] font-bold tracking-[0.1em] transition-all ${bookingData.time === t ? 'border-black bg-black text-white' : 'border-black/5 hover:border-black/20'}`}
                            >
                               {t}
                            </button>
                         ))}
                      </div>
                   </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-20">
                   <button onClick={() => setStep(1)} className="w-full sm:w-1/3 py-6 border border-black/10 text-[10px] font-bold tracking-[0.4em] uppercase">Back</button>
                   <button 
                     onClick={() => setStep(3)}
                     disabled={!bookingData.date || !bookingData.time}
                     className="w-full sm:flex-1 py-6 bg-black text-white text-[10px] font-bold tracking-[0.5em] disabled:bg-zinc-100 transition-all font-black"
                   >
                     Go to Secure Checkout
                   </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-2xl lg:text-3xl font-serif mb-8 tracking-tight">Payment Method</h2>
                
                {/* Indian Payment Method Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
                   {paymentOptions.map((opt) => (
                      <button 
                        key={opt.id}
                        onClick={() => setPaymentMethod(opt.id)}
                        className={`flex flex-col items-center justify-center p-4 border transition-all gap-3 ${paymentMethod === opt.id ? 'border-black bg-black text-white' : 'border-black/5 text-black/40 hover:border-black/20'}`}
                      >
                         {opt.icon}
                         <span className="text-[8px] font-black uppercase tracking-widest text-center">{opt.label}</span>
                      </button>
                   ))}
                </div>

                <div className="p-8 bg-zinc-50 border border-black/5">
                   
                   {/* UPI Form */}
                   {paymentMethod === 'upi' && (
                      <div className="space-y-6">
                         <div className="flex gap-4 mb-4">
                            {['gpay', 'phonepe', 'paytm'].map(app => (
                               <div key={app} className="w-10 h-10 border border-black/10 bg-white flex items-center justify-center rounded grayscale opacity-50">
                                  <span className="text-[8px] font-black uppercase">{app}</span>
                               </div>
                            ))}
                         </div>
                         <div className="relative">
                            <label className="text-[8px] uppercase tracking-[0.2em] font-bold text-black/30 mb-2 block">Enter VPA / UPI ID</label>
                            <input 
                              type="text" 
                              placeholder="vimal@okaxis" 
                              className="w-full bg-white border border-black/10 px-4 py-4 text-[10px] tracking-[0.3em] outline-none focus:border-black transition-all" 
                            />
                            <div className="absolute right-4 top-[38px] text-[8px] font-black text-black/20">VERIFY</div>
                         </div>
                      </div>
                   )}

                   {/* Card Form */}
                   {paymentMethod === 'card' && (
                      <div className="space-y-6">
                         <div>
                            <label className="text-[8px] uppercase tracking-[0.2em] font-bold text-black/30 mb-2 block">Card Details</label>
                            <div className="relative mb-4">
                               <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white border border-black/10 px-4 py-4 text-[10px] tracking-[0.3em] outline-none focus:border-black transition-all" />
                               <CreditCard size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-black/20" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                               <input type="text" placeholder="MM/YY" className="bg-white border border-black/10 px-4 py-4 text-[10px] tracking-[0.3em] outline-none focus:border-black" />
                               <input type="password" placeholder="CVC" className="bg-white border border-black/10 px-4 py-4 text-[10px] tracking-[0.3em] outline-none focus:border-black" />
                            </div>
                         </div>
                      </div>
                   )}

                   {/* Net Banking Form */}
                   {paymentMethod === 'netbanking' && (
                      <div className="space-y-6">
                         <label className="text-[8px] uppercase tracking-[0.2em] font-bold text-black/30 mb-2 block">Popular Banks</label>
                         <div className="grid grid-cols-3 gap-2">
                            {["HDFC", "SBI", "ICICI", "AXIS", "KOTAK", "YES"].map(bank => (
                               <button key={bank} className="py-3 border border-black/10 bg-white text-[9px] font-black tracking-widest hover:border-black transition-all">
                                  {bank}
                               </button>
                            ))}
                         </div>
                         <select className="w-full mt-4 bg-white border border-black/10 px-4 py-4 text-[10px] tracking-[0.3em] outline-none focus:border-black appearance-none">
                            <option>SEARCH ALL BANKS...</option>
                            <option>State Bank of India</option>
                            <option>HDFC Bank</option>
                            <option>ICICI Bank</option>
                         </select>
                      </div>
                   )}

                   {/* Wallets Form */}
                   {paymentMethod === 'wallets' && (
                      <div className="space-y-4">
                         {["Paytm", "PhonePe Wallet", "Amazon Pay", "MobiKwik"].map(w => (
                            <div key={w} className="flex items-center justify-between p-4 border border-black/5 bg-white hover:border-black/20 cursor-pointer transition-all group">
                               <span className="text-[10px] font-bold tracking-widest text-black/60 group-hover:text-black uppercase">{w}</span>
                               <ChevronRight size={14} className="text-black/10" />
                            </div>
                         ))}
                      </div>
                   )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-12">
                   <button onClick={() => setStep(2)} className="w-full sm:w-1/3 py-6 border border-black/10 text-[10px] font-bold tracking-[0.4em] uppercase">Back</button>
                   <button onClick={() => alert("Payment Initiated via " + paymentMethod.toUpperCase())} className="w-full sm:flex-1 py-6 bg-black text-white text-[11px] font-black tracking-[0.6em] shadow-xl hover:bg-zinc-900 transition-all">
                      FINALIZE & PAY ₹999
                   </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Summary */}
          <div className="w-full lg:w-[400px] bg-zinc-50 p-8 lg:p-12">
            <h3 className="text-xl font-serif mb-8 tracking-tight border-b border-black/5 pb-4">Reservation Summary</h3>
            <div className="space-y-6">
               <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-black/40 font-bold mt-1">Service</span>
                  <span className="text-[11px] uppercase tracking-[0.1em] font-black text-right max-w-[150px] leading-tight">
                    {bookingData.service || 'NOT SELECTED'}
                  </span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-black/40 font-bold">Artist</span>
                  <span className="text-[11px] uppercase tracking-[0.1em] font-black text-right">
                    {bookingData.artist || 'TBD'}
                  </span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-black/40 font-bold">DateTime</span>
                  <span className="text-[11px] uppercase tracking-[0.1em] font-black text-right">
                    {bookingData.date ? `${bookingData.date} | ${bookingData.time}` : 'PHASE 02'}
                  </span>
               </div>
               
               <div className="pt-12 border-t border-black/5 mt-12">
                  <div className="flex justify-between items-baseline mb-3">
                     <span className="text-xs font-black tracking-widest text-black">Deposit Total</span>
                     <span className="text-4xl font-bold">₹999</span>
                  </div>
                  <div className="p-4 bg-zinc-100 rounded text-[8px] uppercase tracking-[0.15em] text-black/40 leading-relaxed font-medium">
                     The ₹999 reserve deposit is non-refundable and will be deducted from your final billing at the atelier session.
                  </div>
               </div>
            </div>

            <div className="mt-24 pt-12 border-t border-black/5 hidden lg:block">
               <span className="text-4xl font-agraham text-black/5 block mb-6">HIVNK</span>
               <p className="text-[8px] uppercase tracking-[0.2em] text-black/30 leading-loose font-medium">
                  HIVNK ATELIER // 2026 EDITION <br/>A CLINICAL CURATION OF THE FINGERTIP.
               </p>
            </div>
          </div>

        </div>

        {/* Support Link */}
        <div className="mt-16 text-center">
           <p className="text-black/30 text-[9px] uppercase tracking-widest font-black">
              SECURE LINK // ENCRYPTION ENABLED <br/>
              <a href="#" className="text-black inline-block mt-4 border-b border-black/20 pb-0.5">CONTACT CONCIERGE</a>
           </p>
        </div>

      </div>
    </div>
  );
};

export default Booking;
