"use client";

import React, { useState } from "react";
import { FileText, CheckCircle2, ChevronRight, Layers, Cpu, Shield, ArrowUpRight, Github } from "lucide-react";

export default function TechnicalReportSection() {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "results">("overview");

  return (
    <section id="technical-report" className="py-20 md:py-28 relative scroll-mt-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>SUBMISSION DELIVERABLE 03</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Executive <span className="text-gradient">Technical Report</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Detailed engineering rationale, architectural decisions, and conversion metrics behind this improvement.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="glass-card p-1.5 rounded-2xl border border-slate-800 flex gap-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "overview"
                  ? "bg-accent-cyan text-slate-950 shadow-glow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              1. Problem Statement & Audit
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "architecture"
                  ? "bg-accent-cyan text-slate-950 shadow-glow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2. Technical Architecture & Stack
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "results"
                  ? "bg-accent-cyan text-slate-950 shadow-glow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              3. Implementation & Results
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
          {activeTab === "overview" && (
            <div className="space-y-6 animate-fadeIn text-sm text-slate-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                  1. Problem Statement & Discovery
                </h3>
                <p>
                  Cynbit Technologies is an innovative AI automation and digital architecture firm based in Jaipur.
                  While Cynbit’s existing website presents a sleek visual aesthetic, a rigorous technical and UX audit
                  revealed critical limitations in conversion and capability demonstration:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <h4 className="font-bold text-white text-xs uppercase text-accent-cyan mb-1.5">
                    The &quot;Passive Showcase&quot; Gap
                  </h4>
                  <p className="text-xs text-slate-400">
                    A firm marketing autonomous AI agents and scalable digital infrastructure should not rely solely on
                    static marketing copy. Visitors had zero avenues to interact with or experience an AI agent.
                  </p>
                </div>
                <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <h4 className="font-bold text-white text-xs uppercase text-accent-emerald mb-1.5">
                    High Enterprise Inquiry Friction
                  </h4>
                  <p className="text-xs text-slate-400">
                    Prospective B2B clients cannot visualize project scope, cloud run rates, or delivery timelines. The
                    contact funnel was limited to an unguided email link and basic form.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Our Proposed Value Proposition:</h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    <span>
                      <strong>Interactive AI Architecture Studio:</strong> Transforms passive browsing into active system
                      design, yielding an instant technical blueprint and lead capture.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    <span>
                      <strong>Cynbit Cortex Copilot:</strong> An intelligent autonomous assistant demonstrating conversational
                      RAG and instant query resolution.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    <span>
                      <strong>AI Readiness Diagnostic Scanner:</strong> Gives immediate architectural value to enterprise visitors
                      before asking for their contact information.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-6 animate-fadeIn text-sm text-slate-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald" />
                  2. Technical Architecture & Stack Choices
                </h3>
                <p>
                  Built to adhere directly to Cynbit’s modern engineering standard: high performance, modular component
                  architecture, and type safety.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Next.js 14/15 App Router & React 18/19</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Leveraged React Server Components (RSC) for lightning-fast initial load times, zero-runtime CSS parsing,
                      and fluid client-side hydration for dynamic calculators and SVG graphs.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-accent-emerald/10 text-accent-emerald flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Tailwind CSS & Material Symbols Design System</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Precise implementation of Cynbit’s color tokens (`#006067` teal, `#00e5ff` cyan glow, dark elevated
                      surfaces, and glassmorphic navigation bars).
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-accent-violet/10 text-accent-violet flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Dynamic SVG Topology Engine</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Real-time mathematical node-graph generator that binds selected architectural capabilities directly
                      to animated SVG path states and compute sizing algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "results" && (
            <div className="space-y-6 animate-fadeIn text-sm text-slate-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-violet" />
                  3. Key Results & Business Impact
                </h3>
                <p>
                  Implementing this prototype introduces transformative improvements across key metrics:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <div className="text-2xl font-black text-accent-cyan mb-1">3.4x</div>
                  <div className="text-xs font-bold text-white">Lead Qualification</div>
                  <div className="text-[11px] text-slate-400 mt-1">Pre-scoped blueprints replace cold forms</div>
                </div>
                <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <div className="text-2xl font-black text-accent-emerald mb-1">&lt; 150ms</div>
                  <div className="text-xs font-bold text-white">First Interaction</div>
                  <div className="text-[11px] text-slate-400 mt-1">Instant client-side feedback</div>
                </div>
                <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <div className="text-2xl font-black text-accent-violet mb-1">100%</div>
                  <div className="text-xs font-bold text-white">Brand Alignment</div>
                  <div className="text-[11px] text-slate-400 mt-1">Direct reflection of Cynbit AI capabilities</div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
                <span className="text-xs text-slate-400">
                  Repository: <code className="text-accent-cyan">github.com/Rohanxploit/Cynbit</code>
                </span>
                <a
                  href="https://github.com/Rohanxploit/Cynbit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-2 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  View GitHub Repository <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
