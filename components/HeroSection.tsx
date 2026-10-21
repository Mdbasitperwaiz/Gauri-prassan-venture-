import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Users, Building2, HardHat } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#070e1b] overflow-hidden text-white border-b border-slate-800">
      {/* Real Manpower Background Poster with Natural Cinematic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 filter brightness-90 contrast-110"
        style={{ backgroundImage: "url('/images/manpower-hero-poster.jpg')" }}
      />
      {/* Smooth gradient: dark on left for text legibility, transparent on right to show the workforce */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070e1b] via-[#070e1b]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Core Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            Licensed Manpower & Facility Partner — Inc. 2024
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Reliable People. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Verified Operations.
            </span> <br />
            Proven Progress.
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
            Supplying skilled, semi-skilled, and technical personnel alongside turnkey facility management solutions across 13 Bihar districts with 100% statutory labor compliance.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition flex items-center gap-2 text-sm"
            >
              Explore Manpower Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-[#0d1829] hover:bg-slate-800 border border-slate-700 text-white font-medium rounded-xl transition text-sm"
            >
              Request Workforce Quote
            </Link>
          </div>

          {/* Real Trust & Statutory Badges */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-center gap-2 bg-[#0d1829]/70 p-2.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>MCA CIN: U78300BR2024PTC068100</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0d1829]/70 p-2.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% EPF & ESIC Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0d1829]/70 p-2.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ISO 9001:2015 & 45001:2018</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Workforce Card Instead of Blank Box */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0d1829] shadow-2xl">
            {/* Real photo replacing abstract lines */}
            <div className="relative h-64 sm:h-72 w-full bg-slate-800">
              <Image
                src="/images/manpower-hero-poster.jpg"
                alt="Field Operations and Workforce Deployment"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1829] via-[#0d1829]/20 to-transparent" />
              <span className="absolute top-4 right-4 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-semibold px-3 py-1 rounded-full uppercase flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Deployments: 13 Districts
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  Workforce & Facility Network
                </span>
                <h4 className="text-lg font-bold text-white">
                  Gauriprassan Operations Center
                </h4>
              </div>

              <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800 text-center">
                <div>
                  <div className="text-base font-black text-white">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase">Police Verified</div>
                </div>
                <div>
                  <div className="text-base font-black text-white">24/7</div>
                  <div className="text-[10px] text-slate-400 uppercase">Supervision</div>
                </div>
                <div>
                  <div className="text-base font-black text-white">13</div>
                  <div className="text-[10px] text-slate-400 uppercase">Bihar Districts</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Principal Office: Arrah, Bhojpur</span>
                <Link href="/documents" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Verify Credentials →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
