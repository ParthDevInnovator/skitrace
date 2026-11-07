"use client";

import React from "react";

export default function ComparisonSection() {
  const traditionalPoints = [
    "Resumes filled with unverified self-reported buzzwords",
    "4 to 6 rounds of generic whiteboard algorithmic puzzles",
    "Subjective interviewer gut feelings and pedigree bias",
    "30+ engineering hours spent per candidate screened",
    "High mis-hire rate due to superficial evaluation",
  ];

  const skitracePoints = [
    "Cryptographically traced pull requests and commit diffs",
    "1 or 2 focused architectural reviews grounded in real work",
    "Objective AST authorship and code craftsmanship rubrics",
    "Cut 18+ senior engineering hours out of every loop",
    "Near-zero false positives with 100% auditable proof",
  ];

  return (
    <section className="py-24 bg-white border-y hairline-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-600 mb-2 block">
            Side-By-Side Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-carbon-950">
            Traditional Hiring vs. Skitrace Proof
          </h2>
          <p className="mt-3 text-carbon-600 text-sm sm:text-base">
            Why modern engineering cultures are retiring resume screening forever.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Side-by-side Table/Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Traditional Card */}
            <div className="bg-[#FAF8F5] rounded-2xl p-7 border hairline-border space-y-6">
              <div className="pb-4 border-b hairline-border">
                <span className="text-[10px] font-mono-code uppercase font-semibold text-carbon-500 tracking-wider">
                  The Old Way
                </span>
                <h3 className="text-lg font-semibold text-carbon-950 mt-1">Traditional Resume Loops</h3>
              </div>

              <ul className="space-y-3.5 text-xs text-carbon-600">
                {traditionalPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skitrace Card */}
            <div className="bg-[#FAF5E8] rounded-2xl p-7 border border-champagne-300 shadow-elevation space-y-6 relative overflow-hidden">
              <div className="pb-4 border-b border-champagne-200">
                <span className="text-[10px] font-mono-code uppercase font-semibold text-champagne-700 tracking-wider">
                  The Skitrace Standard
                </span>
                <h3 className="text-lg font-semibold text-carbon-950 mt-1">Proof-Driven Hiring</h3>
              </div>

              <ul className="space-y-3.5 text-xs text-carbon-800 font-medium">
                {skitracePoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Stat Spotlight Card */}
          <div className="lg:col-span-4 bg-[#0E1012] text-white rounded-2xl p-8 border border-carbon-800 shadow-xl space-y-6 text-left relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-44 h-44 bg-champagne-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <span className="text-[11px] font-mono-code uppercase text-champagne-400 font-semibold tracking-wider block">
              Engineering Velocity
            </span>

            <div className="space-y-2">
              <div className="text-5xl font-bold font-mono-code text-champagne-300">18+ hrs</div>
              <h4 className="text-base font-semibold text-white">Saved Per Candidate Interview Loop</h4>
            </div>

            <p className="text-xs text-carbon-400 leading-relaxed">
              Eliminate preliminary phone screens and generic coding tests. Enable senior engineers to evaluate
              pre-verified candidate work in minutes.
            </p>

            <div className="pt-2 border-t border-carbon-800/80 flex items-center justify-between text-[11px] font-mono-code text-carbon-300">
              <span>Time-to-Offer</span>
              <span className="text-emerald-400 font-semibold">Reduced by 68%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

