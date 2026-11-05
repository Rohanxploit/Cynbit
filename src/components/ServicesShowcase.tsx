"use client";

import React from "react";
import { Bot, Terminal, Cpu, Database, Cloud, Sparkles, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    desc: "Self-governing agent swarms capable of complex multi-step reasoning, external tool execution, and stateful human-in-the-loop oversight.",
    badge: "Core Specialty",
  },
  {
    icon: Cpu,
    title: "Custom LLM Integrations & RAG",
    desc: "Domain-specific fine-tuning (LoRA/QLoRA) and enterprise hybrid RAG pipelines designed for zero data leakage and high retrieval precision.",
    badge: "Enterprise",
  },
  {
    icon: Terminal,
    title: "Full-Stack Web & SaaS Platforms",
    desc: "High-performance React/Next.js frontends paired with reactive FastAPI, Go, or Node.js microservices built to scale to millions of requests.",
    badge: "Production Ready",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    desc: "Automated Kubernetes orchestration, multi-region failover, serverless edge networks, and continuous security compliance (SOC2/HIPAA).",
    badge: "High Availability",
  },
  {
    icon: Database,
    title: "Data Pipelines & Modern Lakehouses",
    desc: "Streaming and batch ETL with BigQuery, Dataproc, Snowflake, and automated vector embeddings ingestion pipelines.",
    badge: "Scalable Data",
  },
  {
    icon: Sparkles,
    title: "Proprietary SaaS Solutions",
    desc: "Turnkey enterprise platforms including TenantEase (multi-tenant management) and Cynbit Studio AI workflow orchestration.",
    badge: "In-House Products",
  },
];

export default function ServicesShowcase() {
  return (
    <section id="services" className="py-20 md:py-28 relative scroll-mt-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-accent-cyan text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>DOMAIN MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cynbit <span className="text-gradient">Services Hub</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The speed of a startup. The rigor of an enterprise. Delivering next-generation software platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-card-interactive p-6 rounded-3xl border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-primary/20 border border-primary/40 text-accent-cyan flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-base mb-2 group-hover:text-accent-cyan transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>
                <a
                  href="#architecture-studio"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-cyan hover:text-white transition-colors"
                >
                  Scope in AI Studio <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
