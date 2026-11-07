"use client";

import React from "react";

export default function WhySkitraceSection() {
  return (
    <section className="py-24 bg-white border-y hairline-border" id="why-skitrace">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-600 mb-2 block">
              Why Skitrace
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-carbon-950 leading-tight">
              Most Resumes Claim to be in the Top 1%.{" "}
              <span className="font-editorial italic text-[#B27F33]">Prove It.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-carbon-600 leading-relaxed">
              Traditional hiring relies on polished PDFs and rehearsed interview answers. Skitrace automates the
              extraction and validation of real work artifacts so you can evaluate true engineering craftsmanship.
            </p>
          </div>
        </div>

        {/* 4 Feature Columns with Visual Diagrams */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Code Provenance */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border hairline-border shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-carbon-950 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="font-mono-code text-xs text-carbon-400 font-semibold">01</span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-carbon-950 mb-1.5 tracking-tight">Code Provenance</h3>
                <p className="text-xs text-carbon-600 leading-relaxed">
                  Trace pull requests, commit velocities, and authorship attribution down to exact lines and diffs written.
                </p>
              </div>

              {/* Visual Mini Mockup: Git Commit Graph */}
              <div className="bg-white rounded-xl p-3 border hairline-border space-y-2 font-mono-code text-[10px]">
                <div className="flex items-center justify-between text-carbon-400 border-b hairline-border pb-1.5">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Verified Commits
                  </span>
                  <span>SHA: 4f1a8c</span>
                </div>

                <div className="space-y-1.5 pt-0.5">
                  <div className="flex items-center gap-2 text-carbon-700">
                    <span className="w-2 h-2 rounded-full bg-carbon-900 shrink-0"></span>
                    <span className="truncate">feat: zero-copy raft buffer</span>
                  </div>
                  <div className="flex items-center gap-2 text-carbon-700 pl-2 border-l border-carbon-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 shrink-0"></span>
                    <span className="truncate">fix: partition leader election</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span>1,840 LoC solo authored</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t hairline-border flex items-center justify-between text-[10px] font-mono-code">
              <span className="text-carbon-400 uppercase">Signal</span>
              <span className="text-champagne-700 font-semibold bg-champagne-100/70 px-2 py-0.5 rounded">
                AST Authorship
              </span>
            </div>
          </div>

          {/* Card 2: System Architecture */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border hairline-border shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-carbon-950 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="font-mono-code text-xs text-carbon-400 font-semibold">02</span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-carbon-950 mb-1.5 tracking-tight">System Architecture</h3>
                <p className="text-xs text-carbon-600 leading-relaxed">
                  Evaluate how candidates design distributed topologies, manage failure boundaries, and structure resilient codebases.
                </p>
              </div>

              {/* Visual Mini Mockup: Topology Diagram */}
              <div className="bg-white rounded-xl p-3 border hairline-border space-y-2 text-[10px] font-mono-code">
                <div className="flex items-center justify-between text-carbon-400 border-b hairline-border pb-1.5">
                  <span className="text-carbon-700 font-semibold">Topology Mesh</span>
                  <span className="text-emerald-600 font-bold">99.99% SLA</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                  <div className="bg-[#FAF8F5] p-1.5 rounded border hairline-border">
                    <div className="text-[9px] text-carbon-400">Gateway</div>
                    <div className="font-bold text-carbon-900">gRPC</div>
                  </div>
                  <div className="bg-champagne-50 p-1.5 rounded border border-champagne-200">
                    <div className="text-[9px] text-champagne-700">Consensus</div>
                    <div className="font-bold text-champagne-900">Raft Quorum</div>
                  </div>
                  <div className="bg-[#FAF8F5] p-1.5 rounded border hairline-border">
                    <div className="text-[9px] text-carbon-400">Store</div>
                    <div className="font-bold text-carbon-900">Postgres</div>
                  </div>
                </div>

                <div className="text-[9px] text-carbon-500 text-center pt-0.5">
                  Multi-region failover topology verified
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t hairline-border flex items-center justify-between text-[10px] font-mono-code">
              <span className="text-carbon-400 uppercase">Analysis</span>
              <span className="text-champagne-700 font-semibold bg-champagne-100/70 px-2 py-0.5 rounded">
                Topology Review
              </span>
            </div>
          </div>

          {/* Card 3: Impact Benchmarks */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border hairline-border shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-carbon-950 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="font-mono-code text-xs text-carbon-400 font-semibold">03</span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-carbon-950 mb-1.5 tracking-tight">Impact Benchmarks</h3>
                <p className="text-xs text-carbon-600 leading-relaxed">
                  Verify tangible production outcomes: latency drops, query optimizations, memory leak fixes, and SLA guarantees.
                </p>
              </div>

              {/* Visual Mini Mockup: Benchmark Metrics */}
              <div className="bg-white rounded-xl p-3 border hairline-border space-y-2 text-[10px] font-mono-code">
                <div className="flex items-center justify-between text-carbon-400 border-b hairline-border pb-1.5">
                  <span className="text-carbon-700 font-semibold">p99 Latency</span>
                  <span className="text-emerald-600 font-bold">-42% Drop</span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-carbon-500">
                    <span>Baseline:</span>
                    <span>340ms</span>
                  </div>
                  <div className="w-full bg-[#FAF8F5] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-carbon-400 h-full w-[85%]"></div>
                  </div>

                  <div className="flex justify-between items-center text-emerald-600 font-bold">
                    <span>Optimized:</span>
                    <span>48ms (Verified)</span>
                  </div>
                  <div className="w-full bg-[#FAF8F5] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[25%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t hairline-border flex items-center justify-between text-[10px] font-mono-code">
              <span className="text-carbon-400 uppercase">Metrics</span>
              <span className="text-champagne-700 font-semibold bg-champagne-100/70 px-2 py-0.5 rounded">
                Telemetry Audit
              </span>
            </div>
          </div>

          {/* Card 4: AI & Fraud Shield */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border hairline-border shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-carbon-950 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="font-mono-code text-xs text-carbon-400 font-semibold">04</span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-carbon-950 mb-1.5 tracking-tight">AI &amp; Fraud Shield</h3>
                <p className="text-xs text-carbon-600 leading-relaxed">
                  Detect synthetic AI-generated resumes, inflated GitHub activity graphs, and ghostwritten take-home solutions.
                </p>
              </div>

              {/* Visual Mini Mockup: Authenticity Scanner */}
              <div className="bg-white rounded-xl p-3 border hairline-border space-y-2 text-[10px] font-mono-code">
                <div className="flex items-center justify-between text-carbon-400 border-b hairline-border pb-1.5">
                  <span className="text-carbon-700 font-semibold">Cadence Scan</span>
                  <span className="text-emerald-600 font-bold">100% Human</span>
                </div>

                <div className="space-y-1 text-carbon-600">
                  <div className="flex justify-between">
                    <span>Keystroke Signature:</span>
                    <span className="text-carbon-950 font-bold">Organic</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LLM Puffery Risk:</span>
                    <span className="text-emerald-600 font-bold">0.1% (Safe)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Repo Authorship:</span>
                    <span className="text-champagne-700 font-bold">Cryptographic</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t hairline-border flex items-center justify-between text-[10px] font-mono-code">
              <span className="text-carbon-400 uppercase">Protection</span>
              <span className="text-champagne-700 font-semibold bg-champagne-100/70 px-2 py-0.5 rounded">
                Anti-Plagiarism
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
