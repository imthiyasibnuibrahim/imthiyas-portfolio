"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, CheckCircle2, ChevronLeft, ChevronRight, Clock, Video } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Dummy data for available slots
const generateAvailableSlots = (date: Date) => {
  const slots = [];
  const startHour = 9; // 9 AM
  for (let i = 0; i < 5; i++) {
    // Randomize availability slightly for demo purposes
    if (Math.random() > 0.3) {
      slots.push(`${startHour + i}:00 ${startHour + i >= 12 ? 'PM' : 'AM'}`);
    }
  }
  return slots;
};

export default function BookingSystem() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<"calendar" | "details" | "success">("calendar");

  const availableSlots = selectedDate ? generateAvailableSlots(selectedDate) : [];

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    // Prevent selecting past dates for demo
    if (newDate >= new Date(new Date().setHours(0,0,0,0))) {
        setSelectedDate(newDate);
        setSelectedSlot(null);
    }
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <section className="flex-1 pt-32 pb-24 relative flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
          
          <div className="mb-10 text-center">
             <Link href="/" className="inline-flex flex-col items-center gap-2 text-foreground/60 hover:text-emerald-400 transition-colors mb-6 text-sm font-medium">
                <ArrowLeft size={16} />
                Back
             </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Schedule a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Consultation</span>
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              Book a 1-on-1 strategy session for digital marketing growth, software architecture review, or custom photography needs.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-2xl min-h-[500px] flex flex-col md:flex-row">
            
            {/* Sidebar Details */}
            <div className="w-full md:w-1/3 bg-black/20 p-8 border-b md:border-b-0 md:border-r border-white/5 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <Video size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Strategy Call</h3>
              <p className="text-foreground/60 mb-6">45 Minute Video Conference</p>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3 text-foreground/80">
                  <Clock size={18} className="text-emerald-500 mt-1" />
                  <div>
                     <p className="font-semibold">Duration</p>
                     <p className="text-sm text-foreground/60">45 Minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-foreground/80">
                  <Calendar size={18} className="text-emerald-500 mt-1" />
                  <div>
                     <p className="font-semibold">Date & Time</p>
                     <p className="text-sm text-foreground/60">
                       {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : 'Select a date'}
                       {selectedSlot ? `, ${selectedSlot}` : ''}
                     </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Area */}
            <div className="w-full md:w-2/3 p-4 md:p-8 relative">
              <AnimatePresence mode="wait">
                
                {bookingStep === "calendar" && (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full flex flex-col md:flex-row gap-8"
                  >
                    {/* Calendar Grid */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-6 px-2">
                        <h4 className="text-lg font-bold">
                          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </h4>
                        <div className="flex gap-2">
                          <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                            <ChevronLeft size={20} />
                          </button>
                          <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                          <div key={day} className="text-center text-xs font-semibold text-foreground/50 py-2">
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                          <div key={`empty-${i}`} className="p-2" />
                        ))}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
                          const isPast = dayDate < new Date(new Date().setHours(0,0,0,0));
                          const isSelected = selectedDate?.getDate() === i + 1 && selectedDate?.getMonth() === currentDate.getMonth();

                          return (
                            <button
                              key={`day-${i}`}
                              onClick={() => handleDateSelect(i + 1)}
                              disabled={isPast}
                              className={`
                                aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all
                                ${isPast ? 'text-foreground/20 cursor-not-allowed' : 'hover:bg-white/10'}
                                ${isSelected ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.4)]' : ''}
                              `}
                            >
                              {i + 1}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div className="w-full md:w-48 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-6">
                      <h4 className="text-lg font-bold mb-6 px-2">
                        {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' }) : 'Time'}
                      </h4>
                      {!selectedDate ? (
                        <p className="text-sm text-foreground/50 px-2">Select a date to view slots.</p>
                      ) : availableSlots.length > 0 ? (
                        <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                          {availableSlots.map((slot) => (
                            <button
                              key={slot}
                              onClick={() => setSelectedSlot(slot)}
                              className={`
                                w-full py-3 rounded-xl border text-sm font-medium transition-all
                                ${selectedSlot === slot 
                                  ? 'bg-foreground text-background border-foreground' 
                                  : 'border-emerald-500/30 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10'}
                              `}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-foreground/50 px-2">No slots available.</p>
                      )}

                      {selectedSlot && (
                         <motion.button
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           onClick={() => setBookingStep("details")}
                           className="w-full mt-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                         >
                           Next
                         </motion.button>
                      )}
                    </div>
                  </motion.div>
                )}

                {bookingStep === "details" && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full flex flex-col justify-center max-w-md mx-auto"
                  >
                    <button onClick={() => setBookingStep("calendar")} className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground mb-8 transition-colors">
                       <ArrowLeft size={14} /> Back to Calendar
                    </button>
                    <h3 className="text-2xl font-bold mb-6">Your Details</h3>
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setBookingStep("success"); }}>
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-1">Name</label>
                        <input type="text" required className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-mono" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-1">Email</label>
                        <input type="email" required className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-mono" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-1">Topic</label>
                        <textarea rows={3} required className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all resize-none font-sans" placeholder="What would you like to discuss?"></textarea>
                      </div>
                      <button type="submit" className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-[0_0_20px_rgba(16,185,129,0.3)] mt-4 transition-all">
                        Confirm Booking
                      </button>
                    </form>
                  </motion.div>
                )}

                {bookingStep === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Booking Confirmed!</h3>
                    <p className="text-foreground/70 mb-8 max-w-sm">
                      A calendar invitation has been sent to your email with the video conference link. Looking forward to speaking with you!
                    </p>
                    <Link href="/" className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-medium">
                      Return Home
                    </Link>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
