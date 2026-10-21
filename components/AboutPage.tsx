import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, Building, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070e1b] text-white">
      {/* Hero Header with Background Poster */}
      <section className="relative overflow-hidden py-24 md:py-32 border-b border-slate-800">
        {/* Real Workforce Background Poster */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 filter brightness-90 contrast-110"
          style={{ backgroundImage: "url('/images/about-hero-poster.jpg')" }}
        />
        {/* Smooth Dark Gradient Overlays for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e1b] via-[#070e1b]/85 to-[#070e1b]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-transparent to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-4">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <span>/</span>
            <span className="text-blue-400">About Us</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Gauri Prassan</span>
          </h1>

          <p className="max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed">
            A registered Private Limited company based in Bihar, building a workforce and facility management brand with trust, compliance, and technology at its core.
          </p>
        </div>
      </section>

      {/* Rest of the About Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              India's Emerging Workforce Partner
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Gauriprassan Ventures Private Limited, operating as Gauri Prassan, is a Private Limited Company incorporated on 4 March 2024 and registered in Bihar, India. We are building our presence as a professional manpower outsourcing and facility management company across 13 districts.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image 
                src="/images/about-hero-poster.jpg" 
                alt="Workforce Team" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
