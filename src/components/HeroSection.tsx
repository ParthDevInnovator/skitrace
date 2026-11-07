"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "./ModalContext";

export default function HeroSection() {
  const { openEarlyAccess } = useModal();

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#FAF8F5]">
      {/* Warm Sculptural Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] sculptural-glow-underlay pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border hairline-border shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 animate-pulse"></span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-carbon-700">
                A Candidate Verification Platform
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-carbon-950 leading-[1.12]">
              A Resume Tells You What They Claim.{" "}
              <span className="font-editorial italic text-[#B27F33] font-normal block sm:inline">
                Discover
              </span>{" "}
              <span className="text-[#A5752C] font-normal">What They Can Prove.</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-xl text-base sm:text-lg text-carbon-600 font-normal leading-relaxed">
              Verify technical competence with real work artifacts, code proof, and verified portfolio traces before you
              make an offer.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={openEarlyAccess}
                className="px-7 py-3.5 rounded-full bg-carbon-950 text-white font-medium text-xs uppercase tracking-wider hover:bg-carbon-800 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                type="button"
              >
                Request Access
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>

              <a
                href="#evidence-preview"
                className="px-7 py-3.5 rounded-full bg-white text-carbon-800 font-medium text-xs uppercase tracking-wider border hairline-border hover:bg-carbon-50 transition-all duration-200 shadow-xs flex items-center justify-center gap-2"
              >
                <svg className="w-3.5 h-3.5 text-champagne-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Explore Live Trace
              </a>
            </div>

            {/* Rating & Social Proof */}
            <div className="pt-3 flex items-center gap-3">
              <div className="flex items-center text-amber-500 text-sm">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-[#C5A059]">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-carbon-500 font-medium">
                4.9/5 from 200+ engineering leaders at fast-scaling tech companies
              </span>
            </div>
          </div>

          {/* Right Column: Floating Candidate Evidence Card Mockup */}
          <div className="lg:col-span-5 relative">
            {/* Glow backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-champagne-300/30 to-transparent rounded-3xl blur-xl opacity-60"></div>

            {/* Main Interactive Preview Card */}
            <div className="relative bg-white rounded-2xl border hairline-border shadow-elevation p-6 sm:p-7 space-y-5">
              {/* Profile Header */}
              <div className="flex items-start justify-between pb-4 border-b hairline-border">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#FAF8F5] shadow-xs relative bg-carbon-900">
                      <Image
                        src="/images/alex-rivera.jpg"
                        alt="Alex Rivera"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[9px] text-white font-bold shadow-xs">
                      ✓
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-semibold text-carbon-950">Alex Rivera</h2>
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/60 rounded-full">
                        Verified
                      </span>
                    </div>
                    <p className="text-xs text-carbon-500 font-medium">Staff Systems Architect • 9 Yrs Exp</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-champagne-50 border border-champagne-200/80">
                    <span className="text-[11px] font-bold text-champagne-700 font-mono-code">98% Match</span>
                  </div>
                </div>
              </div>

              {/* Verified Evidence Metric Grid */}
              <div className="grid grid-cols-3 gap-2.5 py-1">
                <div className="bg-[#FAF8F5] rounded-xl p-2.5 border hairline-border text-center">
                  <div className="text-sm font-bold text-carbon-950 font-mono-code">148</div>
                  <div className="text-[10px] text-carbon-500 uppercase tracking-tight">Prod Commits</div>
                </div>
                <div className="bg-[#FAF8F5] rounded-xl p-2.5 border hairline-border text-center">
                  <div className="text-sm font-bold text-carbon-950 font-mono-code">4</div>
                  <div className="text-[10px] text-carbon-500 uppercase tracking-tight">System RFCs</div>
                </div>
                <div className="bg-[#FAF8F5] rounded-xl p-2.5 border hairline-border text-center">
                  <div className="text-sm font-bold text-emerald-600 font-mono-code">0</div>
                  <div className="text-[10px] text-carbon-500 uppercase tracking-tight">Unverified Claims</div>
                </div>
              </div>

              {/* Shipped Pull Request Trace */}
              <div className="bg-carbon-950 text-white rounded-xl p-4 border border-carbon-800 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] border-b border-carbon-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="font-mono-code text-champagne-300">PR #1042: Raft Quorum Rebalance</span>
                  </div>
                  <span className="text-carbon-400 font-mono-code text-[10px]">MERGED</span>
                </div>

                <p className="text-[11px] text-carbon-300 leading-relaxed">
                  Solo author for deterministic leader election &amp; snapshot compaction under network split-brain.
                </p>

                <div className="bg-carbon-900 rounded-lg p-2.5 font-mono-code text-[10px] text-carbon-300 border border-carbon-800/60 overflow-x-auto">
                  <span className="text-purple-300">func</span>{" "}
                  <span className="text-blue-300">(r *Raft)</span>{" "}
                  <span className="text-yellow-200">RequestVoteQuorum</span>
                  <span className="text-carbon-400">(term uint64) bool</span> {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-emerald-400">+ r.persistState(term, candidateID)</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-emerald-400">+ return r.majorityGranted(term)</span>
                  <br />
                  {"}"}
                </div>
              </div>

              {/* Verification Tags */}
              <div className="flex flex-wrap items-center justify-between pt-1 gap-2 text-[11px]">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border hairline-border text-carbon-700 font-mono-code text-[10px]">
                    Go
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border hairline-border text-carbon-700 font-mono-code text-[10px]">
                    Raft
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border hairline-border text-carbon-700 font-mono-code text-[10px]">
                    Distributed Systems
                  </span>
                </div>
                <span className="text-carbon-400 text-[10px] font-mono-code">Audit Hash: #c4f910a</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
