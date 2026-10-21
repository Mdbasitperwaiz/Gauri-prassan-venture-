"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Users, Building2, SearchCheck, MonitorDot } from "lucide-react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const manpowerServices = [
    { name: "Manpower Outsourcing", href: "/services#manpower", icon: Users },
    { name: "Facility Management", href: "/services#facility", icon: Building2 },
    { name: "Recruitment Support", href: "/services#recruitment", icon: SearchCheck },
    { name: "ICT Lab Solutions", href: "/services#ict", icon: MonitorDot },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#070e1b]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section - GP emblem crisp and prominently sized */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-11 overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 flex items-center justify-center p-0.5 shadow-lg group-hover:border-blue-400/50 transition">
            <Image
              src="/images/logo.png"
              alt="Gauriprassan Ventures Logo"
              width={56}
              height={44}
              className="object-contain mix-blend-screen transform scale-105 group-hover:scale-115 transition-transform duration-300"
            />
          </div>
          <div>
            <span className="text-lg md:text-xl font-black text-white tracking-tight block leading-none transition group-hover:text-blue-400">
              Gauriprassan Ventures
            </span>
            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-1 block">
              Private Limited • Inc. 2024
            </span>
          </div>
        </Link>

        {/* Navigation Links with Services Dropdown Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link 
              href="/services" 
              className="flex items-center gap-1 hover:text-blue-400 py-2 transition"
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-blue-400" : ""}`} />
            </Link>

            {/* Dropdown Menu Box */}
            {servicesOpen && (
              <div className="absolute top-full -left-4 w-64 bg-[#0d1829] border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in duration-150">
                <div className="px-3 py-2 text-[11px] font-bold uppercase text-slate-400 tracking-wider border-b border-slate-800/80 mb-1">
                  Manpower Solutions
                </div>
                {manpowerServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={idx}
                      href={service.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-600/10 text-slate-300 hover:text-white transition group"
                    >
                      <Icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 shrink-0" />
                      <span className="text-xs font-medium">{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/industries" className="hover:text-blue-400 transition">Industries</Link>
          <Link href="/directors" className="hover:text-blue-400 transition">Directors</Link>
          <Link href="/documents" className="hover:text-blue-400 transition">Documents</Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-md shadow-blue-600/30"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </header>
  );
}
