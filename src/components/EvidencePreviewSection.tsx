"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useModal } from "./ModalContext";

export default function EvidencePreviewSection() {
  const { openEarlyAccess } = useModal();
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section className="py-24 bg-white border-y hairline-border" id="evidence-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-600 mb-2 block">
              Candidate Dossier Engine
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-carbon-950 leading-tight">
              See the evidence behind the claims.
            </h2>
            <p className="mt-3 text-carbon-600 text-sm sm:text-base leading-relaxed">
              Explore how Skitrace unpacks high-level resume bullets into verifiable, interactive code traces, AST
              authorship proofs, and interview probe prompts.
            </p>
          </div>

          <div className="font-mono-code text-xs text-carbon-600 bg-[#FAF8F5] px-4 py-2 rounded-xl border hairline-border shrink-0 flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-carbon-300 relative bg-carbon-900">
                <Image
                  src="/images/marcus-vance.jpg"
                  alt="Marcus Vance"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border border-white flex items-center justify-center text-[7px] text-white font-bold">
                ✓
              </span>
            </div>
            <div>
              Candidate: <strong className="text-carbon-950 font-semibold">Marcus Vance</strong>
              <span className="text-carbon-400 block text-[10px]">Staff Backend Architect</span>
            </div>
          </div>
        </div>

        {/* Browser / Application Window Mockup */}
        <div className="bg-[#FAF8F5] rounded-2xl border hairline-border overflow-hidden shadow-elevation">
          {/* Top Window Bar */}
          <div className="px-6 py-4 bg-white border-b hairline-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
              <span className="ml-3 text-xs font-mono-code text-carbon-500 hidden sm:inline">
                skitrace-dossier://candidate/marcus-vance/audit-v4
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                Audit Verified
              </span>
              <button
                onClick={openEarlyAccess}
                className="text-xs font-semibold text-carbon-900 hover:text-champagne-600 transition-colors"
              >
                Export PDF Dossier
              </button>
            </div>
          </div>

          {/* Interactive Tab Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b hairline-border bg-white text-xs font-medium" role="tablist">
            <button
              onClick={() => setActiveTab(1)}
              className={`p-4 text-left border-b-2 flex items-center justify-between transition-all cursor-pointer ${
                activeTab === 1
                  ? "border-carbon-950 bg-[#FAF8F5] font-semibold text-carbon-950"
                  : "border-transparent text-carbon-500 hover:text-carbon-900"
              }`}
            >
              <div>
                <span className="text-[10px] text-carbon-400 block font-mono-code">Artifact 01</span>
                <span>Distributed Raft Consensus (Go)</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </button>

            <button
              onClick={() => setActiveTab(2)}
              className={`p-4 text-left border-b-2 flex items-center justify-between transition-all cursor-pointer ${
                activeTab === 2
                  ? "border-carbon-950 bg-[#FAF8F5] font-semibold text-carbon-950"
                  : "border-transparent text-carbon-500 hover:text-carbon-900"
              }`}
            >
              <div>
                <span className="text-[10px] text-carbon-400 block font-mono-code">Artifact 02</span>
                <span>Multi-Region Kafka Bus (Java / Go)</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </button>

            <button
              onClick={() => setActiveTab(3)}
              className={`p-4 text-left border-b-2 flex items-center justify-between transition-all cursor-pointer ${
                activeTab === 3
                  ? "border-carbon-950 bg-[#FAF8F5] font-semibold text-carbon-950"
                  : "border-transparent text-carbon-500 hover:text-carbon-900"
              }`}
            >
              <div>
                <span className="text-[10px] text-carbon-400 block font-mono-code">Artifact 03</span>
                <span>High-Throughput Query Planner (C++)</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            </button>
          </div>

          {/* Main Inspection Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Code and Artifact Deep Dive */}
            <div className="lg:col-span-8 space-y-6">
              {activeTab === 1 && (
                <>
                  <div className="bg-white rounded-xl p-5 border hairline-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono-code uppercase text-champagne-700 font-semibold tracking-wider">
                        Resume Claim
                      </span>
                      <span className="text-xs text-emerald-600 font-mono-code font-bold">98% Verified</span>
                    </div>
                    <p className="text-sm font-semibold text-carbon-900">
                      &ldquo;Designed high-concurrency Raft consensus engine in Go handling cluster leader election, log
                      replication, and dynamic membership reconfiguration.&rdquo;
                    </p>
                  </div>

                  {/* Code Artifact Viewer */}
                  <div className="bg-carbon-950 text-white rounded-xl border border-carbon-800 overflow-hidden">
                    <div className="px-4 py-3 bg-carbon-900 border-b border-carbon-800 flex items-center justify-between text-xs font-mono-code">
                      <div className="flex items-center gap-2">
                        <span className="text-champagne-300">raft/fsm.go</span>
                        <span className="text-carbon-500">• SHA: 9f8e21a</span>
                      </div>
                      <span className="text-emerald-400">PR #412 • Merged</span>
                    </div>

                    <div className="p-4 text-xs font-mono-code text-carbon-300 overflow-x-auto space-y-1">
                      <div>
                        <span className="text-carbon-600">142</span>{" "}
                        <span className="text-purple-300">func</span>{" "}
                        <span className="text-blue-300">(f *FSM)</span>{" "}
                        <span className="text-yellow-200">Apply</span>
                        <span className="text-carbon-400">(l *raft.Log)</span>{" "}
                        <span className="text-carbon-400">interface{"{}"}</span> {"{"}
                      </div>
                      <div>
                        <span className="text-carbon-600">143</span> &nbsp;&nbsp;f.mu.Lock()
                      </div>
                      <div>
                        <span className="text-carbon-600">144</span> &nbsp;&nbsp;<span className="text-purple-300">defer</span> f.mu.Unlock()
                      </div>
                      <div>
                        <span className="text-carbon-600">145</span> &nbsp;&nbsp;<span className="text-emerald-400">// Zero copy deserialization to avoid memory allocation spike</span>
                      </div>
                      <div>
                        <span className="text-carbon-600">146</span> &nbsp;&nbsp;cmd := bufferPool.Get().(*Command)
                      </div>
                      <div>
                        <span className="text-carbon-600">147</span> &nbsp;&nbsp;<span className="text-purple-300">if</span> err := cmd.Unmarshal(l.Data); err != nil {"{"}
                      </div>
                      <div>
                        <span className="text-carbon-600">148</span> &nbsp;&nbsp;&nbsp;&nbsp;panic(fmt.Sprintf(&quot;raft: failed to unmarshal command: %v&quot;, err))
                      </div>
                      <div>
                        <span className="text-carbon-600">149</span> &nbsp;&nbsp;{"}"}
                      </div>
                      <div>
                        <span className="text-carbon-600">150</span> &nbsp;&nbsp;<span className="text-purple-300">return</span> f.state.Execute(cmd)
                      </div>
                      <div>
                        <span className="text-carbon-600">151</span> {"}"}
                      </div>
                    </div>
                  </div>

                  {/* Benchmark & Verification Findings */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 border hairline-border">
                      <span className="text-[11px] font-mono-code text-carbon-500 uppercase block mb-1">
                        Stress Test Verification
                      </span>
                      <p className="text-xs text-carbon-700 leading-relaxed">
                        Verified against simulated Jepsen partition tests: 0 stale reads recorded during split-brain
                        scenarios across 5 replica nodes.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 border hairline-border">
                      <span className="text-[11px] font-mono-code text-carbon-500 uppercase block mb-1">
                        Authorship Trace
                      </span>
                      <p className="text-xs text-carbon-700 leading-relaxed">
                        Candidate contributed 86.4% of total codebase commits in the core replication subsystem over 14
                        months.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 2 && (
                <>
                  <div className="bg-white rounded-xl p-5 border hairline-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono-code uppercase text-champagne-700 font-semibold tracking-wider">
                        Resume Claim
                      </span>
                      <span className="text-xs text-emerald-600 font-mono-code font-bold">95% Verified</span>
                    </div>
                    <p className="text-sm font-semibold text-carbon-900">
                      &ldquo;Led cross-region Kafka streaming infrastructure migration supporting 400,000 msg/sec with
                      strict ordering guarantees.&rdquo;
                    </p>
                  </div>

                  <div className="bg-carbon-950 text-white rounded-xl border border-carbon-800 p-5 space-y-3 font-mono-code text-xs">
                    <div className="flex justify-between border-b border-carbon-800 pb-2">
                      <span className="text-champagne-300">kafka/consumer_rebalance.go</span>
                      <span className="text-carbon-500">PR #882</span>
                    </div>
                    <p className="text-carbon-300 leading-relaxed">
                      Custom cooperative sticky partition assignment strategy preventing consumer group stop-the-world
                      pauses during scaling events.
                    </p>
                    <div className="text-[11px] text-emerald-400">
                      ✓ Measured latency reduction: 99th percentile dropped from 340ms to 48ms.
                    </div>
                  </div>
                </>
              )}

              {activeTab === 3 && (
                <>
                  <div className="bg-white rounded-xl p-5 border hairline-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono-code uppercase text-champagne-700 font-semibold tracking-wider">
                        Resume Claim
                      </span>
                      <span className="text-xs text-amber-600 font-mono-code font-bold">92% Verified</span>
                    </div>
                    <p className="text-sm font-semibold text-carbon-900">
                      &ldquo;Rewrote SQL query cost model planner in C++ reducing query optimization overhead by
                      35%.&rdquo;
                    </p>
                  </div>

                  <div className="bg-carbon-950 text-white rounded-xl border border-carbon-800 p-5 space-y-3 font-mono-code text-xs">
                    <div className="flex justify-between border-b border-carbon-800 pb-2">
                      <span className="text-champagne-300">engine/cost_optimizer.cpp</span>
                      <span className="text-carbon-500">PR #1209</span>
                    </div>
                    <p className="text-carbon-300 leading-relaxed">
                      Implemented dynamic programming join reordering heuristics with memoization for queries with &gt;12
                      table joins.
                    </p>
                    <div className="text-[11px] text-emerald-400">
                      ✓ Zero regression across 2,400 standard TPC-DS benchmark tests.
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right Column: Score Breakdown & Interview Probe Guide */}
            <div className="lg:col-span-4 space-y-5">
              {/* Overall Proof Score Card */}
              <div className="bg-white rounded-xl p-6 border hairline-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-carbon-500">
                    Skitrace Score
                  </span>
                  <span className="text-xs font-mono-code text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                    High Signal
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold font-mono-code text-carbon-950">96</span>
                  <span className="text-carbon-400 font-mono-code text-sm">/ 100</span>
                </div>

                {/* Progress bars */}
                <div className="space-y-3 pt-2 text-xs">
                  <div>
                    <div className="flex justify-between text-carbon-600 mb-1">
                      <span>Code Authorship Attribution</span>
                      <span className="font-mono-code font-bold text-carbon-950">98%</span>
                    </div>
                    <div className="w-full bg-[#FAF8F5] h-2 rounded-full overflow-hidden border hairline-border">
                      <div className="bg-carbon-950 h-full rounded-full" style={{ width: "98%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-carbon-600 mb-1">
                      <span>Architectural Depth</span>
                      <span className="font-mono-code font-bold text-carbon-950">95%</span>
                    </div>
                    <div className="w-full bg-[#FAF8F5] h-2 rounded-full overflow-hidden border hairline-border">
                      <div className="bg-champagne-500 h-full rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-carbon-600 mb-1">
                      <span>Production Impact</span>
                      <span className="font-mono-code font-bold text-carbon-950">94%</span>
                    </div>
                    <div className="w-full bg-[#FAF8F5] h-2 rounded-full overflow-hidden border hairline-border">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-carbon-600 mb-1">
                      <span>Synthetic / AI Risk</span>
                      <span className="font-mono-code font-bold text-emerald-600">0.2% (Safe)</span>
                    </div>
                    <div className="w-full bg-[#FAF8F5] h-2 rounded-full overflow-hidden border hairline-border">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: "2%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Generated Interviewer Probes */}
              <div className="bg-[#FAF5E8] rounded-xl p-6 border border-champagne-300/80 space-y-3">
                <span className="text-[11px] font-mono-code uppercase font-semibold text-champagne-800 block">
                  Targeted Probe Questions
                </span>
                <p className="text-xs text-carbon-700 leading-relaxed font-medium">
                  &ldquo;In <span className="font-mono-code">raft/fsm.go</span>, ask Marcus why he chose sync.Mutex
                  over a lockless channel ring buffer for log apply backpressure.&rdquo;
                </p>
                <div className="text-[10px] text-champagne-700 font-mono-code pt-1">
                  Generated automatically from code diff analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
