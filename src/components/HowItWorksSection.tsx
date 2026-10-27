"use client";

import React from "react";

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-pearl relative" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600 mb-2 block">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-carbon-950">
            From scattered signals to complete clarity.
          </h2>
          <p className="mt-4 text-carbon-600 text-base sm:text-lg">
            Skitrace synthesizes distributed repositories, pull requests, verified certifications, and published
            engineering work into a cohesive, auditable intelligence report.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Stage 01 */}
          <div className="bg-white rounded-2xl p-8 border hairline-border shadow-subtle-card flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pearl flex items-center justify-center font-mono-code text-sm font-semibold text-carbon-900 border hairline-border mb-6">
                01
              </div>
              <h3 className="text-xl font-semibold text-carbon-950 mb-3 tracking-tight">Gather</h3>
              <p className="text-sm text-carbon-600 leading-relaxed">
                Connect candidate inputs or public identities — GitHub handles, open-source commits, technical papers,
                and benchmark profiles into one aggregation engine.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t hairline-border">
              <span className="text-xs font-mono-code text-carbon-600 block mb-2">Ingestion Sources:</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded bg-pearl font-mono-code text-carbon-700">
                  Git Commits
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-pearl font-mono-code text-carbon-700">PR Diffs</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-pearl font-mono-code text-carbon-700">
                  Public RFCs
                </span>
              </div>
            </div>
          </div>

          {/* Stage 02 */}
          <div className="bg-white rounded-2xl p-8 border hairline-border shadow-subtle-card flex flex-col justify-between hover:shadow-md transition-shadow relative">
            <div className="absolute -top-3 right-6 px-2.5 py-0.5 rounded-full bg-champagne-100 text-champagne-700 border border-champagne-300 text-[10px] font-semibold uppercase tracking-wider">
              Core Trace Engine
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-pearl flex items-center justify-center font-mono-code text-sm font-semibold text-carbon-900 border hairline-border mb-6">
                02
              </div>
              <h3 className="text-xl font-semibold text-carbon-950 mb-3 tracking-tight">Connect</h3>
              <p className="text-sm text-carbon-600 leading-relaxed">
                Skitrace maps claimed competencies to concrete code snippets, PR discussions, and project architecture
                diagrams, constructing an end-to-end evidence graph.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t hairline-border">
              <span className="text-xs font-mono-code text-carbon-600 block mb-2">Trace Engine:</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded bg-pearl font-mono-code text-carbon-700">
                  AST Analysis
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-pearl font-mono-code text-carbon-700">
                  Authorship Weight
                </span>
              </div>
            </div>
          </div>

          {/* Stage 03 */}
          <div className="bg-white rounded-2xl p-8 border hairline-border shadow-subtle-card flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pearl flex items-center justify-center font-mono-code text-sm font-semibold text-carbon-900 border hairline-border mb-6">
                03
              </div>
              <h3 className="text-xl font-semibold text-carbon-950 mb-3 tracking-tight">Understand</h3>
              <p className="text-sm text-carbon-600 leading-relaxed">
                Review verified strengths and identify blind spots. Generate targeted interview prompts for areas where
                public evidence is partial or absent.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t hairline-border">
              <span className="text-xs font-mono-code text-carbon-600 block mb-2">Output Package:</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-mono-code">
                  Audited Dossier
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-champagne-50 text-champagne-800 font-mono-code">
                  Custom Probe Guide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
