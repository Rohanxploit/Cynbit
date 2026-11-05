"use client";

import React from "react";
import { Sparkles, ArrowRight, Cpu, ShieldCheck, Zap, Activity, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient glowing radial orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-accent-cyan/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-accent-cyan/30 text-accent-cyan text-xs font-mono mb-8 backdrop-blur-md shadow-glow">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
          <Sparkles className="w-3.5 h-3.5" />
          <span>CYNBIT AI ARCHITECTURE LAB · PROTOTYPE SUITE</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Architecting Scalable <span className="text-gradient">AI Automation</span> & Optimistic Systems.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          An interactive engineering extension for Cynbit’s digital ecosystem. Simulate multi-agent architectures,
          quantify cloud infrastructure run rates, and benchmark enterprise AI readiness in real-time.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#architecture-studio"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-primary to-primary-light hover:from-primary-hover hover:to-accent-cyan text-white shadow-glow-teal hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
          >
            <Cpu className="w-4 h-4 text-accent-cyan group-hover:rotate-12 transition-transform" />
            Launch AI Solution Studio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#ai-scanner"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide bg-surface-card hover:bg-surface-border text-slate-200 border border-slate-700/80 hover:border-slate-500 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <ShieldCheck className="w-4 h-4 text-accent-emerald" />
            Run AI Readiness Scanner
          </a>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-4 rounded-2xl border border-slate-800 text-left">
            <div className="flex items-center gap-2 text-accent-cyan text-xs font-mono mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>INFERENCE SLA</span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">&lt; 120ms</div>
            <div className="text-[11px] text-slate-400">Streamed Edge Latency</div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800 text-left">
            <div className="flex items-center gap-2 text-accent-emerald text-xs font-mono mb-1">
              <Activity className="w-3.5 h-3.5" />
              <span>AUTONOMOUS AGENTS</span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">10x Speed</div>
            <div className="text-[11px] text-slate-400">Workflow Automation</div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800 text-left">
            <div className="flex items-center gap-2 text-accent-violet text-xs font-mono mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>UPTIME RELIABILITY</span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">99.98%</div>
            <div className="text-[11px] text-slate-400">Production Fault Tolerance</div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800 text-left">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ECOSYSTEM</span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">BitElevate</div>
            <div className="text-[11px] text-slate-400">Verified Talent Pipeline</div>
          </div>
        </div>
      </div>
    </section>
  );
}
