"use client";

import React from "react";

export default function PersonaRolesSection() {
  return (
    <section className="py-24 bg-pearl" id="for-teams">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600 mb-2 block">
            Who It Is For
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-carbon-950">
            Precision for every stakeholder in the hiring loop.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Persona 1 */}
          <div className="bg-white rounded-2xl p-8 border hairline-border shadow-subtle-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-pearl flex items-center justify-center text-carbon-900 mb-6 border hairline-border">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-carbon-950 mb-2">Technical Recruiters</h3>
              <p className="text-sm text-carbon-600 leading-relaxed">
                Filter out embellished resumes in seconds. Deliver shortlisted candidates backed by verifiable code and
                proven architectures to hiring managers.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t hairline-border text-xs text-carbon-600 font-medium">
              Eliminate up to 65% of resume screening ambiguity.
            </div>
          </div>

          {/* Persona 2 */}
          <div className="bg-white rounded-2xl p-8 border hairline-border shadow-subtle-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-pearl flex items-center justify-center text-carbon-900 mb-6 border hairline-border">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-carbon-950 mb-2">Hiring Managers</h3>
              <p className="text-sm text-carbon-600 leading-relaxed">
                Review candidate code before scheduling a conversation. Walk into every interview equipped with
                contextual, code-grounded probe questions.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t hairline-border text-xs text-carbon-600 font-medium">
              Turn generic technical interviews into high-signal architecture deep-dives.
            </div>
          </div>

          {/* Persona 3 */}
          <div className="bg-white rounded-2xl p-8 border hairline-border shadow-subtle-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-pearl flex items-center justify-center text-carbon-900 mb-6 border hairline-border">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-carbon-950 mb-2">Talent Operations</h3>
              <p className="text-sm text-carbon-600 leading-relaxed">
                Standardize evaluation rubrics with empirical records. Create an auditable hiring record that
                minimizes hiring bias and rewards actual craft.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t hairline-border text-xs text-carbon-600 font-medium">
              Objective, audit-ready rubrics across all engineering loops.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
