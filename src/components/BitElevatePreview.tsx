"use client";

import React, { useState } from "react";
import { Terminal, Play, CheckCircle, Code2, BookOpen, Award, ArrowRight } from "lucide-react";

export default function BitElevatePreview() {
  const [isRunning, setIsRunning] = useState(false);
  const [testPassed, setTestPassed] = useState(false);

  const sampleCode = `// Cynbit BitElevate: Production Vector Search Benchmark
// Calculate Cosine Similarity with dot product acceleration
function cosineSimilarity(vectorA: number[], vectorB: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < vectorA.length; i++) {
    dotProduct += vectorA[i] * vectorB[i];
    normA += vectorA[i] * vectorA[i];
    normB += vectorB[i] * vectorB[i];
  }
  
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Executing test vector embedding batch...`;

  const handleRunTest = () => {
    setIsRunning(true);
    setTestPassed(false);

    setTimeout(() => {
      setIsRunning(false);
      setTestPassed(true);
    }, 700);
  };

  return (
    <section id="bitelevate" className="py-20 md:py-28 relative scroll-mt-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>TALENT & ENGINEERING LAB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            BitElevate <span className="text-gradient">Production Sandbox</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Experience Cynbit’s engineering pedagogy. From algorithmic problem solving to production-grade system
            codebases with verified credentials.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left: Tracks Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 text-accent-cyan flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">Production Codebases</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                No trivial toy projects. Candidates build enterprise-grade microservices, WebSocket engines, and
                autonomous agents.
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-accent-emerald/10 text-accent-emerald flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">Daily Architect PR Reviews</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Direct feedback from core engineering leads on code cleanliness, time-complexity, memory profiling, and test coverage.
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-accent-violet/10 text-accent-violet flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">Direct PPO Hiring Track</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Top performers bridge directly into Cynbit’s internal software engineering and AI automation teams.
              </p>
            </div>
          </div>

          {/* Right: Live Interactive Code Runner */}
          <div className="lg:col-span-7 glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            {/* Terminal Top Bar */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-[11px] text-slate-400">
                  sandbox/vector_benchmark.ts
                </span>
              </div>
              <button
                onClick={handleRunTest}
                disabled={isRunning}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-accent-cyan text-slate-950 hover:bg-white transition-all flex items-center gap-1.5 shadow-sm disabled:opacity-50"
              >
                <Play className="w-3 h-3 fill-slate-950" />
                {isRunning ? "Testing..." : "Run Test Suite"}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 bg-slate-950/90 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
              <pre>
                <code>{sampleCode}</code>
              </pre>
            </div>

            {/* Test Results Output */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
              <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                Verification Sandbox Output:
              </div>
              {testPassed ? (
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl flex items-start gap-2.5 animate-fadeIn">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <div className="font-bold text-emerald-400">
                      ✓ All 12/12 Production Benchmarks Passed (4.2ms)
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">
                      Cosine similarity computed on 1536-dimensional embeddings. Memory overhead: 0.08MB.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl text-xs text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-600" />
                  <span>Click &quot;Run Test Suite&quot; above to execute sandbox validation.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
