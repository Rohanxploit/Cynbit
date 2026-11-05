"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Search,
  CheckCircle,
  AlertTriangle,
  Zap,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export default function AiScanner() {
  const [targetUrl, setTargetUrl] = useState("");
  const [stackType, setStackType] = useState("monolith");
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanResult, setScanResult] = useState<null | {
    score: number;
    vectorScore: number;
    apiLatencyScore: number;
    securityScore: number;
    automationPotential: number;
    findings: { status: "good" | "warn" | "opt"; title: string; desc: string }[];
  }>(null);

  const scanStepsText = [
    "Analyzing server architecture & API response latency...",
    "Scanning database schemas for vector embedding readiness...",
    "Evaluating context token throughput & concurrency limits...",
    "Benchmarking autonomous agent ROI & workflow bottlenecks...",
  ];

  const handleRunScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetUrl.trim()) return;

    setIsScanning(true);
    setScanResult(null);
    setScanStep(0);

    // Step progression animation
    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev < scanStepsText.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsScanning(false);
          // Set dynamic result
          setScanResult({
            score: stackType === "microservices" ? 86 : stackType === "serverless" ? 92 : 68,
            vectorScore: stackType === "microservices" ? 88 : 70,
            apiLatencyScore: stackType === "serverless" ? 94 : 75,
            securityScore: 89,
            automationPotential: 95,
            findings: [
              {
                status: "warn",
                title: "REST Polling Bottleneck Detected",
                desc: "Switch to WebSockets or SSE for sub-200ms autonomous agent token streaming.",
              },
              {
                status: "opt",
                title: "High Unstructured Data Volume",
                desc: "Implement hybrid dense/sparse vector search with rerankers to unlock instant 10x internal knowledge retrieval.",
              },
              {
                status: "good",
                title: "Modern Containerized Edge Gateway",
                desc: "Architecture supports low-latency routing for multi-agent tool execution loops.",
              },
            ],
          });
          return prev;
        }
      });
    }, 600);
  };

  return (
    <section id="ai-scanner" className="py-20 md:py-28 relative scroll-mt-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>INTERACTIVE FEATURE 02</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Enterprise <span className="text-gradient">AI Readiness</span> Scanner
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Audit your system’s latency profile, data ingestion pipelines, and autonomous agent integration capacity.
          </p>
        </div>

        {/* Input Bar */}
        <div className="max-w-3xl mx-auto glass-card p-4 sm:p-6 rounded-3xl border border-slate-800 mb-12 shadow-2xl">
          <form onSubmit={handleRunScan} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={targetUrl}
                  onChange={(e) => setTargetUrl(e.target.value)}
                  placeholder="Enter enterprise domain or platform URL (e.g. yourcompany.com)"
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-2xl pl-11 pr-4 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent-cyan transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isScanning}
                className="px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-accent-cyan hover:from-primary-hover hover:to-primary-light shadow-glow-teal hover:shadow-glow transition-all shrink-0 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isScanning ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                    Scanning System...
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 text-accent-cyan" />
                    Run AI Audit
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-[11px]">Underlying Architecture:</span>
                <select
                  value={stackType}
                  onChange={(e) => setStackType(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 text-xs focus:outline-none focus:border-accent-cyan"
                >
                  <option value="monolith">Traditional Monolith (Django / Express)</option>
                  <option value="microservices">Microservices (Docker / Kubernetes)</option>
                  <option value="serverless">Modern Cloud Native (Next.js / Serverless)</option>
                </select>
              </div>
              <span className="text-[11px] font-mono text-slate-500">Non-intrusive diagnostic probe</span>
            </div>
          </form>

          {/* Scanning Progress Bar */}
          {isScanning && (
            <div className="mt-6 pt-6 border-t border-slate-800 animate-fadeIn">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono text-accent-cyan flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
                  {scanStepsText[scanStep]}
                </span>
                <span className="font-mono text-slate-400">
                  {Math.round(((scanStep + 1) / scanStepsText.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-primary via-accent-cyan to-accent-emerald h-full transition-all duration-500"
                  style={{ width: `${((scanStep + 1) / scanStepsText.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Scan Results Display */}
        {scanResult && (
          <div className="glass-card max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl border border-accent-cyan/30 shadow-glow animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8 pb-8 border-b border-slate-800">
              {/* Score Gauge */}
              <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
                <div className="relative w-36 h-36 flex items-center justify-center mb-3">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#1e293b" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#00e5ff"
                      strokeWidth="8"
                      strokeDasharray="264"
                      strokeDashoffset={264 - (264 * scanResult.score) / 100}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-extrabold text-white tracking-tight">
                      {scanResult.score}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                      Readiness Score
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-emerald/10 text-accent-emerald text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  High AI Transformation Potential
                </div>
              </div>

              {/* Breakdown Bars */}
              <div className="md:col-span-7 space-y-4">
                <h4 className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent-cyan" />
                  Architectural Health Breakdown
                </h4>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Vector Search & RAG Feasibility</span>
                    <span className="font-mono text-accent-cyan font-bold">{scanResult.vectorScore}%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-accent-cyan h-full rounded-full"
                      style={{ width: `${scanResult.vectorScore}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">API Latency & Event Streaming</span>
                    <span className="font-mono text-accent-emerald font-bold">{scanResult.apiLatencyScore}%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-accent-emerald h-full rounded-full"
                      style={{ width: `${scanResult.apiLatencyScore}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Autonomous Automation ROI</span>
                    <span className="font-mono text-accent-violet font-bold">{scanResult.automationPotential}%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-accent-violet h-full rounded-full"
                      style={{ width: `${scanResult.automationPotential}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Findings & Optimization Roadmap */}
            <div>
              <h4 className="font-bold text-white text-sm mb-4">Recommended Cynbit Optimizations</h4>
              <div className="space-y-3">
                {scanResult.findings.map((f, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 flex items-start gap-3"
                  >
                    {f.status === "good" ? (
                      <CheckCircle className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                    ) : f.status === "warn" ? (
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    ) : (
                      <Zap className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="text-xs font-bold text-slate-200">{f.title}</div>
                      <div className="text-[11px] text-slate-400 leading-relaxed mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-primary/10 border border-primary/30 rounded-2xl">
                <span className="text-xs text-slate-300">
                  Ready to deploy these architectural upgrades to your platform?
                </span>
                <a
                  href="#architecture-studio"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-primary to-accent-cyan hover:shadow-glow transition-all flex items-center gap-1.5 shrink-0"
                >
                  Configure in AI Studio <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
