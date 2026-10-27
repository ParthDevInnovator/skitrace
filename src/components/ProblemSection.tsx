"use client";

import React from "react";

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white border-y hairline-border" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600 mb-2 block">
            The Fundamental Disconnect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-carbon-950 leading-tight">
            A resume is a self-reported claim.
            <br />
            Engineering requires real evidence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-carbon-600">
            For decades, hiring pipelines have relied on polished bullet points and keyword stuffing. Skitrace connects
            candidate claims directly to tangible output: commit histories, technical architectures, and transparent
            benchmarks.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Side 1: The Traditional Resume */}
          <div className="rounded-2xl p-8 bg-pearl/70 border hairline-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b hairline-border mb-6">
                <span className="text-xs font-mono-code uppercase text-carbon-600 font-semibold tracking-wider">
                  Traditional Resume Bullet
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-red-50 text-red-700 border border-red-200 font-medium">
                  Unverifiable text
                </span>
              </div>
              <div className="space-y-4">
                <p className="text-base text-carbon-900 font-serif italic border-l-2 border-carbon-300 pl-4 py-1">
                  &ldquo;Architected and deployed high-throughput real-time streaming pipeline processing over 250,000
                  events per second with 99.99% fault tolerance.&rdquo;
                </p>
                <div className="text-xs text-carbon-600 space-y-2 pt-2">
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    Did they write the engine, or just configure a dashboard?
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    No access to architecture, partition strategies, or failure modes.
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    Subject to subjective resume embellishment.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t hairline-border text-xs text-carbon-600 font-mono-code">
              Status: Ambiguous claim without primary ground truth
            </div>
          </div>

          {/* Side 2: Skilltrace Evidentiary View */}
          <div className="rounded-2xl p-8 bg-carbon-950 text-white border border-carbon-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-carbon-800 mb-6">
                <span className="text-xs font-mono-code uppercase text-champagne-400 font-semibold tracking-wider">
                  Skitrace Verification Trace
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800 font-medium">
                  Trace Confirmed
                </span>
              </div>
              <div className="space-y-4">
                <div className="bg-carbon-900 rounded-xl p-4 border border-carbon-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-champagne-300 font-mono-code font-medium">
                      Pipeline: Apache Kafka / Flink Engine
                    </span>
                    <span className="text-carbon-600 font-mono-code">SHA: e8f901a</span>
                  </div>
                  <p className="text-xs text-carbon-300">
                    Candidate authored exact partition allocation rebalancer (
                    <span className="font-mono-code text-white">partitioner.go</span>) with integrated backpressure
                    triggers.
                  </p>
                  <div className="flex items-center gap-4 text-[11px] font-mono-code text-carbon-600 pt-2 border-t border-carbon-800/60">
                    <span>42 PR reviews completed</span>
                    <span>•</span>
                    <span>1,820 lines of Go</span>
                  </div>
                </div>
                <div className="p-3 bg-emerald-950/30 rounded-lg border border-emerald-800/40 text-xs text-emerald-300 flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      clipRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span>Empirical evidence confirms direct ownership and authoring of core stream topology.</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-carbon-800 text-xs text-carbon-600 font-mono-code flex items-center justify-between">
              <span>Auditable primary artifacts attached</span>
              <span className="text-champagne-400">100% Provenance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
