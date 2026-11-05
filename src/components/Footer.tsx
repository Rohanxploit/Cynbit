import React from "react";
import { Mail, Phone, MapPin, ExternalLink, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-surface/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        {/* Brand info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center font-mono font-bold text-white text-base">
              C
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              CYNBIT <span className="text-slate-400 font-normal">Technologies</span>
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Architecting scalable digital platforms, AI automation systems, and high-performance engineering labs.
            Engineered for optimism and technical precision.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://linkedin.com/company/cynbit-in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 hover:text-accent-cyan flex items-center justify-center transition-all"
              aria-label="LinkedIn"
            >
              <span className="text-xs font-mono font-bold">in</span>
            </a>
            <a
              href="https://x.com/Cynbit_in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 hover:text-accent-cyan flex items-center justify-center transition-all"
              aria-label="X"
            >
              <span className="text-xs font-mono font-bold">𝕏</span>
            </a>
            <a
              href="https://instagram.com/cynbit.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 hover:text-accent-cyan flex items-center justify-center transition-all"
              aria-label="Instagram"
            >
              <span className="text-xs font-mono font-bold">ig</span>
            </a>
            <a
              href="https://github.com/Rohanxploit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 hover:text-accent-cyan flex items-center justify-center transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Ecosystem</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="#architecture-studio" className="hover:text-accent-cyan transition-colors">
                AI Architecture Studio
              </a>
            </li>
            <li>
              <a href="#ai-scanner" className="hover:text-accent-cyan transition-colors">
                Readiness Scanner
              </a>
            </li>
            <li>
              <a href="#bitelevate" className="hover:text-accent-cyan transition-colors">
                BitElevate Ecosystem
              </a>
            </li>
            <li>
              <a href="https://cynbit.in/services" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors flex items-center gap-1">
                Services Hub <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </li>
            <li>
              <a href="https://cynbit.in/products" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors flex items-center gap-1">
                Product Suite <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </li>
          </ul>
        </div>

        {/* Deliverables */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Submission</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="#technical-report" className="hover:text-accent-cyan transition-colors text-accent-cyan font-medium">
                Technical Report
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Rohanxploit/cynbit-improvement"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-cyan transition-colors flex items-center gap-1"
              >
                GitHub Source Repo <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </li>
            <li>
              <span className="text-slate-500">Candidate: Rohan Sahu</span>
            </li>
            <li>
              <span className="text-slate-500">Institution: IIT Roorkee</span>
            </li>
          </ul>
        </div>

        {/* Location & Contacts */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Headquarters</h4>
          <div className="flex items-start gap-2 text-xs">
            <MapPin className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
            <span>32/115 Pratap Nagar, Jaipur, Rajasthan 302033</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Mail className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
            <a href="mailto:opportunities@cynbit.in" className="hover:text-white transition-colors">
              opportunities@cynbit.in
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Phone className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
            <span>+91 89479 62667</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© 2026 Cynbit Technologies. All rights reserved. Engineered for Optimism.</p>
        <p className="flex items-center gap-1.5 text-slate-400">
          Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for the Cynbit Full Stack Developer Intern Evaluation.
        </p>
      </div>
    </footer>
  );
}
