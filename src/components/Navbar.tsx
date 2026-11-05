"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Terminal, Cpu, ShieldCheck, ExternalLink, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300 ${
          scrolled
            ? "glass-nav mt-3 rounded-2xl shadow-2xl border border-slate-800/80"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-primary-hover to-accent-cyan flex items-center justify-center shadow-glow-teal group-hover:scale-105 transition-transform duration-200">
              <span className="font-mono font-black text-white text-lg tracking-tighter">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                CYNBIT
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 -mt-1">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-surface/70 px-3 py-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            <a
              href="#architecture-studio"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
              AI Architect
            </a>
            <a
              href="#ai-scanner"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-accent-emerald" />
              Readiness Scanner
            </a>
            <a
              href="#bitelevate"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-accent-violet" />
              BitElevate
            </a>
            <a
              href="#services"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              Services Hub
            </a>
            <a
              href="#technical-report"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-accent-cyan bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 transition-all"
            >
              Task Report
            </a>
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://cynbit.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              cynbit.in <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="#architecture-studio"
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary to-primary-light hover:from-primary-hover hover:to-accent-cyan text-white shadow-glow-teal hover:shadow-glow transition-all duration-300 flex items-center gap-1.5 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Launch Studio
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-surface border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 glass-card rounded-2xl border border-slate-800 flex flex-col gap-3 animate-fadeIn">
            <a
              href="#architecture-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-cyan" /> AI Architecture Studio
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <a
              href="#ai-scanner"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-emerald" /> Readiness Scanner
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <a
              href="#bitelevate"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent-violet" /> BitElevate Sandbox
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <a
              href="#technical-report"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl text-sm font-medium text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-between"
            >
              <span>Technical Submission Report</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
