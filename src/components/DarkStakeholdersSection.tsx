"use client";

import React from "react";

export default function DarkStakeholdersSection() {
  const personas = [
    {
      role: "For CTOs & VPs of Eng",
      subtitle: "Eliminate Mis-Hires",
      description:
        "Cut multi-week interview loops in half while establishing an uncompromising bar for architectural rigor.",
      metric: "Save 18+ hrs per cycle",
    },
    {
      role: "For Hiring Managers",
      subtitle: "No More Guesswork",
      description:
        "Skip synthetic LeetCode trivia. Walk into interviews equipped with contextual questions grounded in the candidate's real PRs.",
      metric: "High-signal technical rounds",
    },
    {
      role: "For Technical Recruiters",
      subtitle: "Effortless Sourcing",
      description:
        "Source candidates with demonstrable skill instead of chasing the same recycled big-tech logos.",
      metric: "65% screening efficiency",
    },
    {
      role: "For High-Craft Candidates",
      subtitle: "Meritocracy First",
      description:
        "Let your actual engineering work speak louder than resume formatting, pedigree credentials, or whiteboard puzzles.",
      metric: "Zero LeetCode bias",
    },
  ];

  return (
    <section className="py-24 bg-[#0E1012] text-white relative overflow-hidden" id="for-teams">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-400 mb-3 block">
            Tailored For High-Bar Engineering Teams
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
            How Skitrace helps every stakeholder in tech hiring.
          </h2>
          <p className="mt-4 text-base text-carbon-400 leading-relaxed">
            From talent sourcers to heads of infrastructure, Skitrace replaces speculative conversations with shared,
            verifiable ground truth.
          </p>
        </div>

        {/* 4 Dark Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, idx) => (
            <div
              key={idx}
              className="bg-[#141618] rounded-2xl p-7 border hairline-border-dark flex flex-col justify-between hover:border-carbon-700 transition-all duration-200 group"
            >
              <div>
                <span className="text-[10px] font-mono-code uppercase tracking-wider text-champagne-400 block mb-3 font-semibold">
                  {persona.subtitle}
                </span>

                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight group-hover:text-champagne-300 transition-colors">
                  {persona.role}
                </h3>

                <p className="text-xs sm:text-sm text-carbon-400 leading-relaxed">{persona.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-carbon-800/80 flex items-center justify-between text-[11px] font-mono-code text-carbon-300">
                <span>Metric</span>
                <span className="text-champagne-400 font-semibold">{persona.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

