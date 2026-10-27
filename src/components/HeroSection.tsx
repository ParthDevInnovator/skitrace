"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Sculptural Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] sculptural-glow-underlay pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-champagne-400/40 text-[11px] font-semibold uppercase tracking-widest text-carbon-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-champagne-500 animate-pulse"></span>
            Candidate Intelligence, Reimagined
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-carbon-950 leading-[1.08]">
            Look beyond the resume.
            <br className="hidden sm:inline" />
            <span className="italic font-normal text-carbon-700"> Discover the proof.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-carbon-600 font-normal leading-relaxed tracking-tight">
            Discover the evidence behind a candidate&apos;s skills, experience, and professional work — consolidated,
            traced to primary source code, and verified in one place.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-carbon-950 text-white font-medium text-sm tracking-wide hover:bg-carbon-800 transition-all duration-200 shadow-sculpt text-center flex items-center justify-center gap-2"
              href="#evidence-preview"
            >
              Explore Skitrace Preview
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </a>
            <a
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-carbon-800 font-medium text-sm border hairline-border hover:bg-pearl transition-all duration-200 text-center"
              href="#how-it-works"
            >
              See how it works
            </a>
          </div>

          <p className="text-xs text-carbon-600 uppercase tracking-widest pt-2 font-medium">
            Built for engineering leaders &amp; technical recruiters who value evidence over assumptions.
          </p>
        </div>

        {/* Hero Dual Composition: Folded Brand Artifact + Candidate Evidentiary Card */}
        <div className="mt-14 lg:mt-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Column 1: Sculptural Mark Artifact Display */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-white/70 backdrop-blur-md rounded-2xl border hairline-border shadow-subtle-card">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center p-3">
              <div className="absolute inset-0 bg-champagne-300/20 blur-2xl rounded-full"></div>
              <Image
                alt="Skitrace emblem architectural folded S with soft champagne underlight"
                className="relative z-10 w-full h-full object-contain rounded-xl drop-shadow-2xl"
                src="/images/skitrace-emblem.png"
                width={256}
                height={256}
                priority
                unoptimized
              />
            </div>
            <div className="text-center mt-6">
              <span className="text-[11px] font-mono-code uppercase tracking-widest text-carbon-600 block">
                System Signature
              </span>
              <p className="text-xs text-carbon-700 mt-1 font-medium">
                Every verified claim carries an immutable cryptographic trace.
              </p>
            </div>
          </div>

          {/* Column 2: Candidate Live Trace Card */}
          <div className="lg:col-span-8 bg-white rounded-2xl border hairline-border shadow-sculpt p-6 sm:p-8 relative overflow-hidden">
            {/* Header of card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b hairline-border gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-carbon-900 text-white font-semibold flex items-center justify-center text-sm ring-4 ring-pearl">
                  AS
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h2 className="text-lg font-semibold text-carbon-950">Aanya Shah</h2>
                    <span className="px-2 py-0.5 text-[10px] uppercase font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded-full tracking-wider">
                      Audit Complete
                    </span>
                  </div>
                  <p className="text-xs text-carbon-600 font-medium">
                    Staff Distributed Systems Engineer • 8 Yrs Experience
                  </p>
                </div>
              </div>

              {/* Source Pills */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pearl border hairline-border text-carbon-700 font-mono-code text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-carbon-900"></span> GitHub (1,420 commits)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pearl border hairline-border text-carbon-700 font-mono-code text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Verified Tenure
                </span>
              </div>
            </div>

            {/* Evidence Breakdown Grid in Hero */}
            <div className="py-6 space-y-4">
              {/* Item 1: Verified Claim */}
              <div className="p-4 rounded-xl bg-pearl/60 border hairline-border hover:border-carbon-300 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-carbon-900 tracking-tight">
                        Raft Consensus Core Implementation
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium bg-emerald-100 text-emerald-800 rounded">
                        <svg className="w-3 h-3 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                        Supported by primary code
                      </span>
                    </div>
                    <p className="text-xs text-carbon-600 font-mono-code">
                      repo: github.com/aanya-s/raft-kv • commit{" "}
                      <span className="text-carbon-900 font-semibold underline decoration-champagne-500">
                        4e91cf2
                      </span>
                    </p>
                  </div>
                  <span className="text-xs font-mono-code text-carbon-600 shrink-0">98% confidence</span>
                </div>

                {/* Mini Code Snippet Preview */}
                <div className="mt-3 p-3 rounded-lg bg-carbon-950 text-white font-mono-code text-[11px] overflow-x-auto leading-relaxed">
                  <span className="text-carbon-600">// raft/node.go: Line 184</span>
                  <br />
                  <span className="text-champagne-300">func</span> (n *Node){" "}
                  <span className="text-blue-300">HandleAppendEntries</span>(args *AppendArgs, reply *AppendReply) &#123;
                  <br />
                  &nbsp;&nbsp;<span className="text-emerald-400">if</span> args.Term &lt; n.currentTerm &#123; reply.Success ={" "}
                  <span className="text-red-400">false</span>;{" "}
                  <span className="text-emerald-400">return</span> &#125;
                  <br />
                  &#125;
                </div>
              </div>

              {/* Item 2: Partial Claim */}
              <div className="p-4 rounded-xl bg-pearl/60 border hairline-border flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-carbon-900 tracking-tight">
                      Multi-Region Kubernetes Ingress
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium bg-amber-100 text-amber-800 rounded">
                      Partial Public Signal
                    </span>
                  </div>
                  <p className="text-xs text-carbon-600 mt-1">
                    Helm charts present; production traffic ingress configs private or redacted.
                  </p>
                </div>
                <span className="text-xs font-mono-code text-amber-700 bg-amber-50 px-2 py-1 rounded border border-amber-200">
                  Suggest Probe
                </span>
              </div>
            </div>

            {/* Footer of card */}
            <div className="pt-4 border-t hairline-border flex items-center justify-between text-xs text-carbon-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Cross-referenced against 3 external telemetry platforms
              </span>
              <span className="font-mono-code text-carbon-700">Audit ID: #TRC-8902-AS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
