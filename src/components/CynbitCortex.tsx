"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  Cpu,
  Layers,
  ChevronDown,
} from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
  action?: {
    label: string;
    link: string;
  };
}

const INITIAL_MESSAGES: Message[] = [
  {
    sender: "bot",
    text: "Hello! I am **Cynbit Cortex**, Cynbit’s autonomous solutions engine. How can I assist you with your AI automation, cloud architecture, or BitElevate engineering inquiry today?",
  },
];

const PROMPT_SUGGESTIONS = [
  "How do Cynbit's autonomous agents work?",
  "What is the cost for an enterprise RAG pipeline?",
  "Tell me about BitElevate learning tracks",
  "How can I request a technical discovery audit?",
];

const BOT_KNOWLEDGE: Record<string, { reply: string; action?: { label: string; link: string } }> = {
  agents: {
    reply:
      "Cynbit architects **Autonomous Agent Swarms** combining a supervisor reasoning loop with specialized tool-calling workers. Built on top of FastAPI and LangGraph, our agents operate asynchronously with self-healing retries, human-in-the-loop controls, and sub-300ms streaming responses.",
    action: { label: "Simulate Agent in Studio", link: "#architecture-studio" },
  },
  rag: {
    reply:
      "For enterprise knowledge bases, Cynbit deploys **Hybrid RAG** merging dense vector embeddings (OpenAI/Cohere) with sparse BM25 retrieval and Cross-Encoder rerankers. This minimizes hallucinations and achieves >97% retrieval accuracy across unstructured enterprise data.",
    action: { label: "Estimate RAG in Studio", link: "#architecture-studio" },
  },
  bitelevate: {
    reply:
      "**BitElevate** is Cynbit’s flagship educational ecosystem. Rather than passive video courses, students engineer real-world production codebases, receive daily code reviews from senior architects, and access direct PPO hiring tracks.",
    action: { label: "View BitElevate Sandbox", link: "#bitelevate" },
  },
  cost: {
    reply:
      "Our AI solutions are sized dynamically based on inference requirements and concurrency. Startup MVPs typically begin at $150–$300/mo in cloud infrastructure with a 3–4 week sprint, while enterprise HA clusters scale dynamically with autoscaling worker pools.",
    action: { label: "Configure Project Scope", link: "#architecture-studio" },
  },
  audit: {
    reply:
      "You can run an instant non-intrusive diagnostic right now using our **AI Readiness Scanner**, or request a tailored 24-hour engineering blueprint from our architecture team.",
    action: { label: "Run AI Readiness Scan", link: "#ai-scanner" },
  },
};

export default function CynbitCortex() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: Message = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse: Message = {
        sender: "bot",
        text: "I can help you construct this solution! Check out our interactive AI Architecture Studio above to simulate your custom stack and run-rate, or connect directly with our engineering architects.",
        action: { label: "Open Architecture Studio", link: "#architecture-studio" },
      };

      const lower = query.toLowerCase();
      if (lower.includes("agent") || lower.includes("swarm") || lower.includes("autonomous")) {
        botResponse = { sender: "bot", text: BOT_KNOWLEDGE.agents.reply, action: BOT_KNOWLEDGE.agents.action };
      } else if (lower.includes("rag") || lower.includes("search") || lower.includes("vector")) {
        botResponse = { sender: "bot", text: BOT_KNOWLEDGE.rag.reply, action: BOT_KNOWLEDGE.rag.action };
      } else if (lower.includes("bitelevate") || lower.includes("intern") || lower.includes("student") || lower.includes("track")) {
        botResponse = { sender: "bot", text: BOT_KNOWLEDGE.bitelevate.reply, action: BOT_KNOWLEDGE.bitelevate.action };
      } else if (lower.includes("cost") || lower.includes("price") || lower.includes("estimate") || lower.includes("fee")) {
        botResponse = { sender: "bot", text: BOT_KNOWLEDGE.cost.reply, action: BOT_KNOWLEDGE.cost.action };
      } else if (lower.includes("audit") || lower.includes("scanner") || lower.includes("readiness")) {
        botResponse = { sender: "bot", text: BOT_KNOWLEDGE.audit.reply, action: BOT_KNOWLEDGE.audit.action };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-gradient-to-r from-primary to-accent-cyan text-white shadow-glow hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
          aria-label="Open Cynbit Cortex Assistant"
        >
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-cyan rounded-full border-2 border-background animate-ping" />
          <Sparkles className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          <span className="sr-only">Open Cynbit Cortex</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="glass-card w-[350px] sm:w-[400px] h-[520px] rounded-3xl border border-accent-cyan/40 shadow-2xl flex flex-col overflow-hidden animate-fadeIn backdrop-blur-2xl">
          {/* Header */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center shadow-sm">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  Cynbit Cortex
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                </div>
                <div className="text-[10px] text-slate-400 font-mono">Autonomous Solutions AI</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-6 h-6 rounded-lg bg-primary/30 border border-primary/50 text-accent-cyan flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-tr-none font-medium"
                      : "bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none leading-relaxed"
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.action && (
                    <a
                      href={msg.action.link}
                      onClick={() => setIsOpen(false)}
                      className="mt-2.5 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan text-[11px] font-bold transition-all"
                    >
                      {msg.action.label} <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
                {msg.sender === "user" && (
                  <div className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-[11px] italic pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-bounce [animation-delay:0.4s]" />
                <span>Cortex is formulating architecture...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-slate-950/60 border-t border-slate-800/80 overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
            {PROMPT_SUGGESTIONS.map((sug, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(sug)}
                className="px-2.5 py-1 rounded-full text-[10px] bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all shrink-0"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Cynbit Cortex about AI & systems..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent-cyan transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-accent-cyan text-slate-950 hover:bg-white transition-all disabled:opacity-40 disabled:hover:bg-accent-cyan"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
