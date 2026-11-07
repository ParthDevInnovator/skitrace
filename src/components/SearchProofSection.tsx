"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useModal } from "./ModalContext";

export default function SearchProofSection() {
  const { openEarlyAccess } = useModal();
  const [searchQuery, setSearchQuery] = useState("Distributed consensus in Go with low latency");
  const [selectedTag, setSelectedTag] = useState("Go");

  const tags = ["Go", "Raft", "Distributed Systems", "Kafka", "Postgres", "Memory Optimization"];

  return (
    <section className="py-24 bg-[#FAF8F5] relative" id="search-proof">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Explanatory Content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-600 block">
              Evidence-Driven Sourcing
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-carbon-950 leading-tight">
              Search With Real Proof.{" "}
              <span className="font-editorial italic text-[#B27F33]">Not Just Keywords.</span>
            </h2>

            <p className="text-base text-carbon-600 leading-relaxed">
              Stop filtering by candidate pedigree, buzzwords, or inflated titles. Search across verified capabilities,
              production architectures, and code actually shipped to users.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-carbon-950 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-carbon-950">Query by actual shipped pull requests</h4>
                  <p className="text-xs text-carbon-600 mt-0.5">
                    Find candidates who specifically authored cache invalidation or high-throughput message brokers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-carbon-950 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-carbon-950">Bypass resume stuffing &amp; keyword gaming</h4>
                  <p className="text-xs text-carbon-600 mt-0.5">
                    Skitrace verifies Git diffs, AST parsing, and commit frequency rather than PDF buzzword counts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-carbon-950 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-carbon-950">Blind meritocratic candidate review</h4>
                  <p className="text-xs text-carbon-600 mt-0.5">
                    Evaluate pure engineering craftsmanship first to eliminate pedigree bias and uncover 10x talent.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={openEarlyAccess}
                className="px-6 py-3 rounded-full bg-carbon-950 text-white font-medium text-xs uppercase tracking-wider hover:bg-carbon-800 transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
                type="button"
              >
                Try Search Prototype
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Search Dashboard UI Mockup */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border hairline-border shadow-elevation p-6 sm:p-8 space-y-6">
              {/* Search Bar Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-carbon-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#FAF8F5] border hairline-border rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-carbon-950 font-mono-code focus:outline-none focus:border-carbon-950"
                  placeholder="Search verified engineering signals..."
                />
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2 text-xs">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    type="button"
                    className={`px-3 py-1 rounded-full text-xs font-mono-code transition-all cursor-pointer ${
                      selectedTag === tag
                        ? "bg-carbon-950 text-white font-medium shadow-xs"
                        : "bg-[#FAF8F5] text-carbon-600 border hairline-border hover:bg-carbon-100"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Matched Candidate Card Preview */}
              <div className="bg-[#FAF8F5] rounded-xl p-5 border hairline-border space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow-xs relative bg-carbon-900">
                        <Image
                          src="/images/marcus-vance.jpg"
                          alt="Marcus Vance"
                          width={44}
                          height={44}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">
                        ✓
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-carbon-950">Marcus Vance</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-bold uppercase">
                          Verified Trace
                        </span>
                      </div>
                      <span className="text-xs text-carbon-500">Staff Distributed Systems Engineer</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono-code font-bold text-champagne-700 bg-champagne-100 px-2.5 py-1 rounded-lg">
                      97% Match
                    </span>
                  </div>
                </div>

                {/* Evidence Artifacts Preview */}
                <div className="space-y-2 text-xs">
                  <div className="bg-white rounded-lg p-3 border hairline-border flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono-code">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-carbon-900 font-medium">etcd-raft / storage.go</span>
                      <span className="text-[10px] text-carbon-400">• Solved lock contention under 80k rps</span>
                    </div>
                    <span className="text-carbon-400 font-mono-code text-[11px]">Score: 98</span>
                  </div>

                  <div className="bg-white rounded-lg p-3 border hairline-border flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono-code">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-carbon-900 font-medium">wal_sync / disk_flush.go</span>
                      <span className="text-[10px] text-carbon-400">• Zero data loss crash testing suite</span>
                    </div>
                    <span className="text-carbon-400 font-mono-code text-[11px]">Score: 96</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] font-mono-code text-carbon-500">
                    42 Verified Commits • 3 Peer Reviewed RFCs
                  </span>
                  <a
                    href="#evidence-preview"
                    className="text-xs font-semibold text-carbon-950 hover:text-champagne-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    Inspect Dossier
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

