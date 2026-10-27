"use client";

import React from "react";

export default function TrustSection() {
  return (
    <section className="py-24 bg-white border-y hairline-border" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600 block">
              Methodology &amp; Ethics
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-carbon-950 leading-tight">
              Evidence should inform decisions, not replace judgment.
            </h2>
            <p className="text-carbon-600 text-sm sm:text-base leading-relaxed">
              Skitrace is built on strict evidentiary principles. We reject automated black-box candidate ranking. Our
              system organizes factual proof so human interviewers can make informed, equitable hiring choices.
            </p>
            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-carbon-950 hover:text-champagne-600 transition-colors"
                href="#trust"
              >
                Read our complete Trust &amp; Verification Charter
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Principle 1 */}
            <div className="p-6 rounded-xl bg-pearl/60 border hairline-border space-y-2">
              <h4 className="text-base font-semibold text-carbon-950">Source Provenance</h4>
              <p className="text-xs text-carbon-600 leading-relaxed">
                Every metric or verification badge links back to raw source artifacts — commit hashes, pull requests,
                or timestamped public records.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-6 rounded-xl bg-pearl/60 border hairline-border space-y-2">
              <h4 className="text-base font-semibold text-carbon-950">Context Over Penalty</h4>
              <p className="text-xs text-carbon-600 leading-relaxed">
                We clearly separate unverified private enterprise work from negative marks. Lack of public repos
                triggers helpful questions, never rejection.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-6 rounded-xl bg-pearl/60 border hairline-border space-y-2">
              <h4 className="text-base font-semibold text-carbon-950">Zero Black-Box Filtering</h4>
              <p className="text-xs text-carbon-600 leading-relaxed">
                No automated pass/fail algorithm deciding candidate careers. Human engineers and recruiters remain the
                sole decision makers.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="p-6 rounded-xl bg-pearl/60 border hairline-border space-y-2">
              <h4 className="text-base font-semibold text-carbon-950">Candidate Consent</h4>
              <p className="text-xs text-carbon-600 leading-relaxed">
                Candidates maintain agency to connect specific repositories, spotlight private portfolios via
                authorized OAuth, and view their own dossier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
