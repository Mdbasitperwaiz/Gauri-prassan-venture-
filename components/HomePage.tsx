import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const districts = [
    "Bhojpur", "Arwal", "Patna", "Jehanabad", "Rohtas", "Kaimur", 
    "Nawada", "Saran", "Gopalganj", "Gaya", "Siwan", "Buxar", "Aurangabad"
  ];

  return (
    <div className="bg-[#070e1b] min-h-screen text-white">
      {/* Hiring Notification Bar */}
      <div className="bg-[#0b1b33] border-b border-blue-900/40 text-xs py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold uppercase tracking-wider text-[11px]">We Are Hiring</span>
            <span className="text-slate-300 hidden md:inline">| Active Openings across 13 Bihar Districts:</span>
            <span className="text-slate-400 text-[11px] truncate max-w-xl hidden lg:inline">
              {districts.join(" • ")}
            </span>
          </div>
          <Link
            href="/contact"
            className="text-xs bg-blue-600 hover:bg-blue-500 text-white font-semibold px-3 py-1 rounded-full transition inline-flex items-center gap-1"
          >
            Apply Now <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Hero Section: Single Crisp Background, No Duplicate Right Card */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-slate-800">
        {/* Background Poster: साफ़ दिखेगा, कोई अतिरिक्त ब्लर नहीं */}
        <div 
          className="absolute inset-0 bg-cover bg-right md:bg-center opacity-45 filter brightness-95 contrast-105"
          style={{ backgroundImage: "url('/images/manpower-hero-poster.jpg')" }}
        />
        {/* टेक्स्ट पढ़ने के लिए हल्का ग्रेडिएंट */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e1b] via-[#070e1b]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Gauriprassan Ventures Private Limited — Inc. 2024
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight tracking-tight">
              People. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Operations.
              </span> <br />
              Progress.
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Delivering verified workforce outsourcing and integrated facility management solutions with total statutory labor compliance, reliability, and technology-enabled operations across Bihar & India.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition flex items-center gap-2 text-sm"
              >
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-[#0d1829] hover:bg-slate-800 border border-slate-700 text-white font-medium rounded-xl transition text-sm"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-[#0d1829]/70 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>MCA Registered (CIN: U78300BR2024PTC068100)</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0d1829]/70 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% EPF & ESIC Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0d1829]/70 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 9001 & 45001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
