import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building, Users, CreditCard, Bell, Shield, FileText, ArrowRight,
  CheckCircle2, AlertCircle, Smartphone, PieChart, Lock, Settings,
  UserCog, User, Camera, XCircle, Check, MessageSquare,
  LockKeyhole, ChevronLeft, ChevronRight
} from 'lucide-react';

// Shared padding for every slide — clears fixed header (top) and fixed nav (bottom)
const S = "min-h-full w-full flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-16 sm:pt-20 pb-16 sm:pb-20 max-w-7xl mx-auto";

// ─── Slide 1 · Hero ───────────────────────────────────────────────────────────
const Slide1Hero = () => (
  <div className="min-h-full w-full flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-16 sm:pt-20 pb-16 sm:pb-20">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl w-full z-10"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-xs font-medium tracking-wider text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20">
        <Building className="w-3 h-3" /> Client Presentation
      </div>

      <h1 className="text-2xl sm:text-4xl md:text-6xl font-serif font-semibold tracking-tight text-white mb-5 leading-tight">
        Anifowose Residential <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 italic">
          Levy Management Portal
        </span>
      </h1>

      <div className="bg-slate-800/50 border border-slate-700/50 p-4 sm:p-6 rounded-2xl max-w-3xl mx-auto mb-5 backdrop-blur-sm">
        <p className="text-sm sm:text-lg text-slate-300 font-light leading-relaxed italic">
          "Transforming how the Anifowose community collects, tracks, and enforces levies — from paper trails and phone calls to a single, powerful digital platform."
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-left bg-slate-900/40 p-4 sm:p-8 rounded-3xl border border-slate-800/60">
        <h3 className="text-sm sm:text-xl font-semibold text-white mb-3 flex items-center gap-2">
          <CheckCircle2 className="text-emerald-400 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          Welcome to a Smarter Community
        </h3>
        <p className="text-slate-400 leading-relaxed text-xs sm:text-base">
          The Anifowose Residential Levy Management Portal is a purpose-built digital platform that brings the full lifecycle of community levy management — billing, payments, communication, enforcement, and reporting — into one secure, organised system.
        </p>
        <p className="text-emerald-400 mt-3 font-medium text-xs sm:text-base">
          This is not just software. It is a community operations upgrade.
        </p>
      </div>
    </motion.div>
  </div>
);

// ─── Slide 2 · Problem ────────────────────────────────────────────────────────
const Slide2Problem = () => {
  const painPoints = [
    { point: "No unified property or owner registry", impact: "Residents are missed, records duplicated" },
    { point: "Lost or inconsistent payment records", impact: "Disputes, confusion, loss of revenue" },
    { point: "Delayed penalties for non-payment", impact: "Non-compliance goes unchecked for months" },
    { point: "Manual notifications via phone/paper", impact: "Messages don't reach everyone on time" },
    { point: "No structured data for reporting", impact: "Leadership has no clear financial picture" },
    { point: "No digital receipts", impact: "Residents can't prove payment, admins can't verify" },
  ];

  return (
    <div className={S}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">

        {/* Left column */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-4">
          <div className="text-rose-400 font-mono text-xs mb-3 tracking-wider uppercase flex items-center gap-2">
            <XCircle className="w-3 h-3" /> The Problem Today
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white mb-3 leading-tight">
            What is Happening<br /><span className="italic text-slate-400">Right Now</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mb-4 leading-relaxed">
            Every day, the Anifowose community faces the same avoidable challenges.
          </p>
          <div className="bg-rose-950/20 border border-rose-900/30 p-4 rounded-2xl">
            <h3 className="text-xs sm:text-sm font-semibold text-rose-300 mb-3">The Cost of Doing Nothing</h3>
            <ul className="space-y-2">
              {["Revenue leakage from uncollected levies", "Resident distrust due to lack of transparency", "Admin burnout from repetitive manual work", "Zero accountability trail for collections"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-rose-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-8">
          {/* Mobile: stacked cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-2">
            {painPoints.map((row, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + idx * 0.07 }}
                className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-3">
                <div className="text-slate-200 text-xs font-medium mb-1">{row.point}</div>
                <div className="text-rose-400 text-xs flex items-start gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0 mt-0.5" />{row.impact}
                </div>
              </motion.div>
            ))}
          </div>
          {/* Desktop: table */}
          <div className="hidden lg:block bg-slate-800/30 border border-slate-700/50 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-2 bg-slate-900/80 p-4 border-b border-slate-700/50">
              <div className="font-semibold text-slate-300 text-sm">Pain Point</div>
              <div className="font-semibold text-slate-300 text-sm">Real-World Impact</div>
            </div>
            <div className="divide-y divide-slate-700/30">
              {painPoints.map((row, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + idx * 0.1 }}
                  className="grid grid-cols-2 p-4 hover:bg-slate-800/50 transition-colors">
                  <div className="text-slate-300 text-sm pr-4">{row.point}</div>
                  <div className="text-slate-400 text-sm">{row.impact}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ─── Slide 3 · Solution ───────────────────────────────────────────────────────
const Slide3Solution = () => {
  const roles = [
    { icon: <Settings className="w-4 h-4" />, title: "Super Admin", desc: "Roles · Rules · Settings" },
    { icon: <UserCog className="w-4 h-4" />, title: "Administrator", desc: "Payments · Records" },
    { icon: <FileText className="w-4 h-4" />, title: "Clerk", desc: "Invoices · Uploads" },
    { icon: <User className="w-4 h-4" />, title: "Resident", desc: "View & Pay Levies" },
    { icon: <Shield className="w-4 h-4" />, title: "Security", desc: "Violations · Evidence" },
  ];

  return (
    <div className={S}>
      <div className="text-center mb-5 sm:mb-10">
        <div className="text-emerald-400 font-mono text-xs mb-3 tracking-wider uppercase flex items-center justify-center gap-2">
          <CheckCircle2 className="w-3 h-3" /> The Solution
        </div>
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mb-3">
          One Platform. Every Need Covered.
        </motion.h2>
        <p className="text-slate-300 text-xs sm:text-base max-w-3xl mx-auto leading-relaxed">
          The portal digitises the entire levy management process — from invoice creation to final payment confirmation — with full audit trails, automated reminders, and real-time reporting.
        </p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-5 sm:p-8">
        <h3 className="text-sm sm:text-xl font-semibold text-white mb-5 text-center">Five Groups. One Unified Experience.</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {roles.map((role, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-700 p-3 sm:p-5 rounded-2xl text-center hover:border-emerald-500/50 transition-colors">
              <div className="w-9 h-9 sm:w-12 sm:h-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-emerald-400 mb-3">
                {role.icon}
              </div>
              <h4 className="font-semibold text-white mb-1 text-xs sm:text-base">{role.title}</h4>
              <p className="text-xs text-slate-400">{role.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// ─── Slide 4 · Modules ────────────────────────────────────────────────────────
const Slide4Modules = () => {
  const modules = [
    { title: "Levy & Billing", icon: <FileText />, desc: "Yearly invoices auto-generated. Categories per property type. Dynamic penalty rules." },
    { title: "Payment Processing", icon: <CreditCard />, desc: "Online card/bank transfers. Real-time reconciliation. Instant digital receipts." },
    { title: "Resident & Property", icon: <Users />, desc: "Accurate registry. Rich profiles. Link individuals to units. Document uploads." },
    { title: "Communication Tools", icon: <MessageSquare />, desc: "Bulk SMS & email. Scheduled templates. Individual or group targeting." },
    { title: "Documentation", icon: <Camera />, desc: "Upload live photos/videos. Security logs violations on-site. Secure storage." },
    { title: "Roles & Permissions", icon: <LockKeyhole />, desc: "Super Admin defines roles. Granular permissions. Full audit trail." },
    { title: "Rules & Penalties", icon: <AlertCircle />, desc: "Codified community rules. Automatic penalty computation. Immediate notifications." },
    { title: "Reporting", icon: <PieChart />, desc: "Real-time financial visibility. Payments summary. CSV/PDF exports." },
  ];

  return (
    <div className={S}>
      <div className="text-center mb-5 sm:mb-8">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mb-2">
          Core Modules
        </motion.h2>
        <p className="text-slate-400 text-xs sm:text-base">Eight integrated modules covering every aspect of community management.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {modules.map((mod, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }}
            className="bg-slate-800/40 border border-slate-700/50 p-3 sm:p-5 rounded-2xl hover:bg-slate-800/60 transition-colors">
            <div className="text-emerald-400 mb-3 bg-emerald-500/10 w-8 h-8 rounded-lg flex items-center justify-center">
              {React.cloneElement(mod.icon as React.ReactElement, { className: "w-4 h-4" })}
            </div>
            <div className="text-xs text-slate-500 mb-0.5 font-mono">M{idx + 1}</div>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">{mod.title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{mod.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ─── Slide 5 · Flows ──────────────────────────────────────────────────────────
const Slide5Flows = () => {
  const [activeTab, setActiveTab] = useState(0);

  const flows = [
    { title: "Resident Pays Levy", steps: ["Resident Logs In", "View Outstanding Invoice", "Choose Payment Method", "Card or Bank Transfer", "Payment Confirmed", "Digital Receipt & SMS/Email Sent", "Balance Cleared"] },
    { title: "Admin Issues Invoice", steps: ["Admin Logs In", "Opens Billing Module", "Selects Property & Residents", "Sets Amount & Due Date", "Invoice Generated", "Resident Notified via SMS/Email", "Awaiting Payment"] },
    { title: "Penalty Enforcement", steps: ["Invoice Due Date Passes", "Payment Not Received", "Grace Period Reminder Sent", "Not Paid in Grace Period", "Penalty Applied & Notice Sent", "Visible on Resident Portal", "Escalated if Unpaid"] },
    { title: "Security Violation", steps: ["Security Logs In", "Selects Property", "Uploads Evidence & Description", "Record Saved to Dashboard", "Admin Notified", "Admin Reviews & Applies Penalty", "Marked as Actioned"] },
    { title: "Bulk Communication", steps: ["Admin Opens Module", "Selects Recipient Group", "Writes or Chooses Template", "Sends or Schedules", "SMS & Email Sent", "Delivery Report Generated"] },
  ];

  return (
    <div className={S}>
      <div className="text-center mb-4 sm:mb-6">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mb-1">
          How It Works
        </motion.h2>
        <p className="text-slate-400 text-xs sm:text-sm">Tap a flow to explore each user journey.</p>
      </div>

      {/* Mobile: horizontal scroll tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 lg:hidden" style={{ scrollbarWidth: 'none' }}>
        {flows.map((flow, idx) => (
          <button key={idx} onClick={() => setActiveTab(idx)}
            className={`shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all border ${activeTab === idx ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-slate-800/50 border-slate-700/50 text-slate-400'}`}>
            {flow.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-5">
        {/* Desktop sidebar */}
        <div className="hidden lg:flex lg:w-52 xl:w-64 flex-col gap-2 shrink-0">
          {flows.map((flow, idx) => (
            <button key={idx} onClick={() => setActiveTab(idx)}
              className={`text-left px-4 py-3 rounded-xl transition-all border text-sm ${activeTab === idx ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-slate-800/30 border-slate-700/50 text-slate-400 hover:bg-slate-800/50'}`}>
              <div className="font-semibold text-xs text-slate-500 mb-0.5">Flow {idx + 1}</div>
              <div>{flow.title}</div>
            </button>
          ))}
        </div>

        {/* Flow steps */}
        <div className="flex-1 bg-slate-900/60 border border-slate-700/50 rounded-2xl p-4 sm:p-6">
          <h3 className="text-sm sm:text-xl font-semibold text-white mb-4">{flows[activeTab].title}</h3>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-700" />
            <div className="space-y-2 sm:space-y-3">
              {flows[activeTab].steps.map((step, idx) => (
                <motion.div key={`${activeTab}-${idx}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                  className="relative pl-8">
                  <div className="absolute left-2 top-2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                  <div className="bg-slate-800/80 border border-slate-700 px-3 py-2 rounded-lg text-slate-200 text-xs sm:text-sm">{step}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Slide 6 · Benefits ───────────────────────────────────────────────────────
const Slide6Benefits = () => {
  const groups = [
    { color: "text-emerald-400", Icon: User, title: "For Residents", items: ["Pay levies from your phone, any time, any day", "Always know your balance and payment history", "Receive instant receipts — no more payment disputes", "Get notified before deadlines — no surprise penalties"] },
    { color: "text-blue-400", Icon: UserCog, title: "For Administrators", items: ["Real-time view of all payments and outstanding balances", "Auto-generated invoices — zero manual work", "Bulk notify the entire community in seconds", "Export reports for meetings or audits in one click"] },
    { color: "text-purple-400", Icon: Building, title: "For Community Leadership", items: ["Full financial transparency at all times", "Consistent, fair rule enforcement via automation", "Documented evidence trail for all violations", "Data to back every decision with numbers"] },
    { color: "text-amber-400", Icon: Users, title: "For the Community Overall", items: ["Increased levy compliance = more funds for services", "Reduced disputes through clear records", "Faster response to violations", "A professional image that builds resident trust"] },
  ];

  return (
    <div className={S}>
      <div className="text-center mb-4 sm:mb-6">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mb-3">
          What Changes When You Go Digital
        </motion.h2>
      </div>

      {/* Before → After banner */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
        <div className="bg-rose-950/30 border border-rose-900/50 p-3 rounded-xl flex items-start gap-2 text-rose-300 flex-1 text-xs">
          <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          Paper Invoices → Phone Reminders → Paper Records → Slow Collections
        </div>
        <div className="text-slate-500 font-mono text-xs text-center shrink-0">→ REPLACED BY →</div>
        <div className="bg-emerald-950/30 border border-emerald-900/50 p-3 rounded-xl flex items-start gap-2 text-emerald-300 flex-1 text-xs">
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          Auto Invoices → Bulk SMS → Central Database → Same-Day Payments
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {groups.map(({ color, Icon, title, items }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-slate-800/30 border border-slate-700/50 p-4 sm:p-5 rounded-2xl">
            <h3 className={`${color} font-semibold mb-3 flex items-center gap-2 text-xs sm:text-sm`}>
              <Icon className="w-4 h-4 shrink-0" /> {title}
            </h3>
            <ul className="space-y-1.5">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-1.5 text-xs text-slate-300">
                  <span className="mt-0.5 shrink-0 text-slate-500">•</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ─── Slide 7 · Summary & Security ────────────────────────────────────────────
const Slide7Summary = () => {
  const summary = [
    { feature: "Invoice Management", res: "View and pay online", admin: "Auto-generate and track" },
    { feature: "Payment", res: "Card or bank transfer, instant receipt", admin: "Real-time reconciliation" },
    { feature: "Notifications", res: "SMS & email alerts", admin: "Bulk messaging tools" },
    { feature: "Penalty Enforcement", res: "Clear notice with reason", admin: "Automatic, rule-based" },
    { feature: "Violation Records", res: "Transparent process", admin: "Evidence-backed decisions" },
    { feature: "Reporting", res: "Personal payment history", admin: "Full community financial view" },
    { feature: "Access Control", res: "Secure personal account", admin: "Role-based team access" },
  ];

  return (
    <div className={S}>
      <div className="text-center mb-4 sm:mb-8">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mb-2">
          Portal at a Glance & Security
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        <div className="lg:col-span-2">
          {/* Mobile: cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-2">
            {summary.map((row, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-3">
                <div className="text-white font-semibold text-xs mb-2">{row.feature}</div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-emerald-400 text-xs font-medium mb-0.5">Residents</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{row.res}</div>
                  </div>
                  <div>
                    <div className="text-blue-400 text-xs font-medium mb-0.5">Admins</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{row.admin}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop: table */}
          <div className="hidden lg:block bg-slate-900/60 border border-slate-700/50 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-800/80 p-4 border-b border-slate-700/50 text-xs font-semibold text-slate-300">
              <div>Feature</div>
              <div>What Residents Experience</div>
              <div>What Admins Experience</div>
            </div>
            <div className="divide-y divide-slate-700/30">
              {summary.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 p-3 hover:bg-slate-800/40 transition-colors text-xs sm:text-sm">
                  <div className="text-white font-medium">{row.feature}</div>
                  <div className="text-slate-400 pr-2">{row.res}</div>
                  <div className="text-slate-400">{row.admin}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security box */}
        <div className="bg-amber-950/20 border border-amber-900/30 p-4 sm:p-6 rounded-3xl">
          <div className="w-9 h-9 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mb-4">
            <Lock className="w-4 h-4" />
          </div>
          <h3 className="text-sm sm:text-lg font-semibold text-amber-400 mb-4">Your Data is Protected</h3>
          <ul className="space-y-3">
            {[
              "Every user account is secured with role-based access — no one sees what they shouldn't",
              "All payment data is encrypted end-to-end",
              "Every action in the system is logged with a permanent audit trail",
              "Only authorised personnel can approve, edit, or delete records",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <Check className="w-3 h-3 text-amber-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ─── Slide 8 · Outcome / CTA ──────────────────────────────────────────────────
const Slide8Outcome = () => (
  <div className="min-h-full w-full flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-16 sm:pt-20 pb-16 sm:pb-20">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl w-full bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 sm:p-10 rounded-3xl border border-slate-700 backdrop-blur-md relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
      <div className="text-emerald-400 font-mono text-xs mb-4 tracking-wider uppercase">The Outcome</div>
      <h2 className="text-sm sm:text-xl md:text-2xl font-serif text-white mb-6 leading-relaxed italic">
        "A community that runs on trust, transparency, and technology. Where every resident knows what they owe, when it's due, and how to pay it. Where every administrator has real-time data to make confident decisions. Where enforcement is fair, consistent, and automatic."
      </h2>
      <div className="inline-block px-5 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl mb-2">
        <p className="text-base sm:text-2xl font-semibold text-emerald-400">
          This is Anifowose — upgraded.
        </p>
      </div>
    </motion.div>

    <div className="mt-6 text-slate-500 text-xs font-mono text-center leading-relaxed">
      Prepared by CreativeMansion Digital Enterprise<br />
      for Anifowose Community Stakeholders<br />
      Confidential — Not for Public Distribution
    </div>
  </div>
);

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Slide1Hero key="s1" />,
    <Slide2Problem key="s2" />,
    <Slide3Solution key="s3" />,
    <Slide4Modules key="s4" />,
    <Slide5Flows key="s5" />,
    <Slide6Benefits key="s6" />,
    <Slide7Summary key="s7" />,
    <Slide8Outcome key="s8" />,
  ];

  const nextSlide = () => setCurrentSlide((p) => Math.min(p + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((p) => Math.max(p - 1, 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="h-screen bg-[#0B1120] text-slate-200 font-sans overflow-hidden relative selection:bg-emerald-500/30">

      {/* Ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      {/* Fixed header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 bg-[#0B1120]/90 backdrop-blur-sm border-b border-slate-800/50">
        <div className="text-sm sm:text-xl font-serif font-bold tracking-widest text-white flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shrink-0">
            <Building className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          ANIFOWOSE
        </div>
        <div className="text-xs font-mono text-slate-500 tracking-widest uppercase bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800">
          {currentSlide + 1} / {slides.length}
        </div>
      </header>

      {/* Slide viewport — each motion.div is its own scroll container */}
      <main className="relative z-10 h-full w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.98 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.02 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0 overflow-y-auto"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Fixed bottom nav */}
      <div className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md p-1.5 rounded-full border border-slate-700/50 shadow-2xl">
        <button onClick={prevSlide} disabled={currentSlide === 0}
          className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-white" aria-label="Previous">
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-1 px-1">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-emerald-400 w-4 sm:w-5' : 'bg-slate-600 hover:bg-slate-400 w-2'}`}
              aria-label={`Slide ${idx + 1}`} />
          ))}
        </div>

        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-white" aria-label="Next">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
