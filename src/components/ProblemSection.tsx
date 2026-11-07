"use client";

import React from "react";

export default function ProblemSection() {
  return (
    <section className="py-24 bg-[#FAF8F5] relative" id="the-gap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-600 mb-3 block">
            The Evaluation Gap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-carbon-950 leading-tight">
            A Resume Tells One Story.
            <br />
            <span className="font-editorial italic text-[#B27F33]">Proof Gives The Complete Picture.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-carbon-600 leading-relaxed">
            Hiring pipelines have relied on polished PDFs, buzzwords, and rehearsed stories. Skitrace traces candidate
            claims directly to tangible output: commit histories, technical architectures, and transparent benchmarks.
          </p>
        </div>

        {/* 3 Distinct Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: The Traditional Resume Claim (Light White Card) */}
          <div className="bg-white rounded-2xl p-7 border hairline-border shadow-elevation flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b hairline-border mb-5">
                <span className="text-[11px] font-mono-code uppercase text-carbon-500 font-semibold tracking-wider">
                  Traditional Resume
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200/60 font-semibold uppercase tracking-wider">
                  Unverified Claim
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-[#FAF8F5] rounded-xl p-4 border hairline-border">
                  <p className="text-sm text-carbon-900 font-serif italic leading-relaxed">
                    &ldquo;Architected and deployed high-throughput real-time streaming pipeline processing over 250,000
                    events per second with 99.99% fault tolerance.&rdquo;
                  </p>
                </div>

                <div className="text-xs text-carbon-600 space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>No proof of whether they authored the engine or merely tweaked config.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>No visibility into failure modes, partition rebalancing, or test rigor.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>Forces interviewers into subjective guesswork and algorithmic trivia.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t hairline-border text-[11px] text-carbon-400 font-mono-code flex items-center justify-between">
              <span>Risk: Embellishment</span>
              <span className="text-red-600 font-semibold">High Ambiguity</span>
            </div>
          </div>

          {/* Card 2: The Skitrace Proof Engine (Dark Charcoal Card with Gold Accents) */}
          <div className="bg-carbon-950 text-white rounded-2xl p-7 border border-carbon-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-champagne-500/15 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-carbon-800/80 mb-5">
                <span className="text-[11px] font-mono-code uppercase text-champagne-400 font-semibold tracking-wider">
                  Skitrace Proof Trace
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 font-semibold uppercase tracking-wider">
                  Trace Confirmed
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-carbon-400">Verified Evidence Score</span>
                  <span className="text-2xl font-bold font-mono-code text-champagne-300">96 / 100</span>
                </div>

                <div className="bg-carbon-900 rounded-xl p-4 border border-carbon-800 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white font-mono-code font-semibold">partitioner.go</span>
                    <span className="text-carbon-400 font-mono-code text-[11px]">1,820 LoC</span>
                  </div>
                  <p className="text-xs text-carbon-300 leading-relaxed">
                    Candidate authored exact partition allocation rebalancer with integrated backpressure triggers.
                  </p>
                  <div className="flex items-center gap-3 text-[11px] font-mono-code text-champagne-400 pt-1">
                    <span>✓ Solo Committer</span>
                    <span>•</span>
                    <span>✓ PR #402 Merged</span>
                  </div>
                </div>

                <div className="bg-carbon-900/60 rounded-xl p-3 border border-carbon-800/60 text-xs text-carbon-300 space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-carbon-400">Micro-benchmark</span>
                    <span className="text-emerald-400 font-mono-code">+42% throughput</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-carbon-400">AST Authorship</span>
                    <span className="text-white font-mono-code">98.4% Confidence</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-carbon-800/80 text-[11px] text-champagne-300/80 font-mono-code flex items-center justify-between">
              <span>Cryptographic Proof</span>
              <span className="text-emerald-400 font-semibold">100% Audited</span>
            </div>
          </div>

          {/* Card 3: The Hiring Outcome (Warm Champagne / Ivory Card) */}
          <div className="bg-[#FAF5E8] rounded-2xl p-7 border border-champagne-300/60 shadow-elevation flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-champagne-300/60 mb-5">
                <span className="text-[11px] font-mono-code uppercase text-champagne-700 font-semibold tracking-wider">
                  The Decision
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white text-champagne-800 border border-champagne-300 font-semibold uppercase tracking-wider">
                  High Conviction
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-white/80 rounded-xl p-4 border border-champagne-200">
                  <h3 className="text-base font-semibold text-carbon-950">Offer extended in 48 hours</h3>
                  <p className="text-xs text-carbon-600 mt-1 leading-relaxed">
                    Hiring managers cut 4 redundant interview rounds. Every team member reviewed the actual code
                    dossier beforehand.
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-carbon-700 pt-1">
                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>100% engineering leadership alignment without gut-feeling debates.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>Architecture deep-dive replaced arbitrary whiteboard coding tests.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>Candidate felt respected and accepted the offer on day 3.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-champagne-300/60 text-[11px] text-champagne-800 font-mono-code flex items-center justify-between">
              <span>Interview Cycle</span>
              <span className="font-semibold text-carbon-950">3 Days (-75%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
