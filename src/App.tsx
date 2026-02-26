import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Building, 
  Users, 
  CreditCard, 
  Bell, 
  Shield, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Smartphone,
  PieChart
} from 'lucide-react';

// --- Slide Components ---

const Slide1Hero = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8 relative">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl z-10"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium tracking-wider text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20">
        <Building className="w-4 h-4" /> Community Management Modernized
      </div>
      <h1 className="text-5xl md:text-7xl font-serif font-semibold tracking-tight text-white mb-6 leading-tight">
        Anifowose Residential <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 italic">
          Levy Management Portal
        </span>
      </h1>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
        A unified digital platform designed to replace manual levy collection, record keeping, and community enforcement with a seamless, automated experience.
      </p>
    </motion.div>
  </div>
);

const Slide2Problem = () => {
  const painPoints = [
    "No unified property or owner registry",
    "Lost or inconsistent payment records",
    "Delayed penalties for non-payment",
    "Manual notifications & communication",
    "Lack of structured data for reporting"
  ];

  return (
    <div className="flex flex-col justify-center h-full px-12 md:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-rose-400 font-mono text-sm mb-4 tracking-wider uppercase">The Challenge</div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            The Cost of <br/><span className="italic text-slate-400">Manual Processes</span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Currently, the community relies on manual workflows to create invoices, manage resident records, and track payments. This scattered approach creates friction for both administrators and residents.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-rose-950/20 border border-rose-900/30 p-8 rounded-3xl backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="text-rose-400 w-6 h-6" />
            Current Pain Points
          </h3>
          <ul className="space-y-4">
            {painPoints.map((point, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="flex items-start gap-3 text-slate-300"
              >
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

const Slide3Benefits = () => {
  const benefits = [
    { icon: <CreditCard className="w-6 h-6 text-emerald-400" />, title: "Automated Billing & Payments", desc: "Yearly invoice generation, online payment support, and digital receipts." },
    { icon: <Users className="w-6 h-6 text-blue-400" />, title: "Resident Management", desc: "Centralized profiles linking individuals to specific property units with document uploads." },
    { icon: <Bell className="w-6 h-6 text-amber-400" />, title: "Seamless Communication", desc: "Bulk SMS and email notifications for levies, events, and payment reminders." },
    { icon: <Shield className="w-6 h-6 text-purple-400" />, title: "Rules & Enforcement", desc: "Automatic penalty computation and security documentation for community violations." }
  ];

  return (
    <div className="flex flex-col justify-center h-full px-12 md:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-emerald-400 font-mono text-sm mb-4 tracking-wider uppercase">The Solution</div>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white mb-4"
        >
          A Unified Digital Ecosystem
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.1 }}
            className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-colors group"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-900/80 flex items-center justify-center mb-6 border border-slate-700 group-hover:scale-110 transition-transform">
              {benefit.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">{benefit.title}</h3>
            <p className="text-slate-400 leading-relaxed text-lg">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide4Flows = () => {
  return (
    <div className="flex flex-col justify-center h-full px-12 md:px-24 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white mb-4"
        >
          How It Works
        </motion.h2>
        <p className="text-slate-400 text-lg">Intuitive user journeys for both residents and administrators.</p>
      </div>

      <div className="space-y-12">
        {/* Resident Flow */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <Smartphone className="text-blue-400 w-6 h-6" /> Resident Payment Flow
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 hidden md:block z-0" />
            
            {[
              { step: "Login", desc: "Secure Access" },
              { step: "View Levies", desc: "Check Outstanding" },
              { step: "Pay Online", desc: "Card or Transfer" },
              { step: "Confirmation", desc: "Instant Digital Receipt" }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center bg-slate-900 p-4 rounded-2xl border border-slate-700 w-full md:w-48 shadow-xl">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-3 border border-blue-500/30">
                  {idx + 1}
                </div>
                <div className="font-semibold text-white mb-1">{item.step}</div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Admin Flow */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <PieChart className="text-emerald-400 w-6 h-6" /> Admin Management Flow
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 hidden md:block z-0" />
            
            {[
              { step: "Dashboard", desc: "System Overview" },
              { step: "Select Property", desc: "Locate Resident" },
              { step: "Generate Invoice", desc: "Apply Rules/Penalties" },
              { step: "Notify User", desc: "Automated SMS/Email" }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center bg-slate-900 p-4 rounded-2xl border border-slate-700 w-full md:w-48 shadow-xl">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-3 border border-emerald-500/30">
                  {idx + 1}
                </div>
                <div className="font-semibold text-white mb-1">{item.step}</div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Slide5Stakeholders = () => {
  const roles = [
    { title: "Super Admin", desc: "Full control; manage users, roles, rules, and system settings." },
    { title: "Admin", desc: "Monitor payments, create invoices, manage records and reports." },
    { title: "Editor/Clerk", desc: "Issue invoices, receipts, and upload records (pictures, videos)." },
    { title: "Resident / Owner", desc: "View levies, pay online securely, and update personal profiles." },
    { title: "Security Team", desc: "Document violations and record on-site media securely." }
  ];

  return (
    <div className="flex flex-col justify-center h-full px-12 md:px-24 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-serif text-white mb-12 text-center"
      >
        Empowering Every Stakeholder
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * idx }}
            className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="text-emerald-400 w-5 h-5" />
              <h3 className="text-xl font-semibold text-white">{role.title}</h3>
            </div>
            <p className="text-slate-400">{role.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide6CTA = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-12 rounded-3xl border border-slate-700 backdrop-blur-md"
    >
      <Building className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
      <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
        Ready to Transform Anifowose?
      </h2>
      <p className="text-xl text-slate-400 mb-10 font-light">
        A scalable, secure, and organized Levy Management Portal built to serve your community's unique needs today and tomorrow.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold text-lg hover:bg-emerald-600 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-emerald-500/20">
          Approve Project Scope <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  </div>
);

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <Slide1Hero key="slide1" />,
    <Slide2Problem key="slide2" />,
    <Slide3Benefits key="slide3" />,
    <Slide4Flows key="slide4" />,
    <Slide5Stakeholders key="slide5" />,
    <Slide6CTA key="slide6" />
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans overflow-hidden relative selection:bg-emerald-500/30">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      {/* Header / Logo Area */}
      <header className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-center">
        <div className="text-xl font-serif font-bold tracking-widest text-white flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <Building className="w-5 h-5 text-white" />
          </div>
          ANIFOWOSE
        </div>
        <div className="text-sm font-mono text-slate-500 tracking-widest uppercase bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
          {currentSlide + 1} / {slides.length}
        </div>
      </header>

      {/* Slide Content */}
      <main className="relative z-10 h-screen w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full w-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-slate-900/80 backdrop-blur-md p-2 rounded-full border border-slate-700/50 shadow-2xl">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2 px-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-emerald-400 w-6' : 'bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-white"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
