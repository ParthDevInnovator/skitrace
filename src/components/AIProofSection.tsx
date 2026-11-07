"use client";

import React from "react";
import { useModal } from "./ModalContext";

export default function AIProofSection() {
  const { openEarlyAccess } = useModal();

  const features = [
    {
      title: "Commit Timeline & Cadence Provenance",
      description:
        "Verify genuine human iteration curves, debugging commits, and refactoring velocity over time.",
    },
    {
      title: "Deep AST Authorship Attribution",
      description:
        "Distinguish between candidates who wrote the core architectural logic versus those who copied boilerplate or generated LLM scripts.",
    },
    {
      title: "Targeted Code Deep-Dive Prompts",
      description:
        "Equip interviewers with dynamic probe questions directly targeting tricky edge-cases in the candidate's diffs.",
    },
    {
      title: "Safe Evaluation for Proprietary Work",
      description:
        "No penalty for candidates with NDA or closed-source code; evaluate architectural writeups and system design patents with zero IP leakage.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-600 block">
              Built For The Post-AI Coding Era
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-carbon-950 leading-tight">
              AI-Proof Your{" "}
              <span className="font-editorial italic text-[#B27F33]">Technical Pipeline.</span>
            </h2>

            <p className="text-base text-carbon-600 leading-relaxed">
              Generative AI has made it trivial for candidates to polish resumes, fabricate projects, and solve LeetCode
              questions in seconds. Skitrace reconstructs the immutable evidentiary chain behind true engineering
              craft.
            </p>

            <div className="pt-2">
              <button
                onClick={openEarlyAccess}
                className="px-7 py-3.5 rounded-full bg-carbon-950 text-white font-medium text-xs uppercase tracking-wider hover:bg-carbon-800 transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
                type="button"
              >
                Request Architecture Audit
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Feature Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border hairline-border shadow-xs hover:shadow-md transition-shadow space-y-2.5"
              >
                <div className="w-6 h-6 rounded-full bg-carbon-950 text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <h3 className="text-sm font-semibold text-carbon-950 pt-1">{item.title}</h3>
                <p className="text-xs text-carbon-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

