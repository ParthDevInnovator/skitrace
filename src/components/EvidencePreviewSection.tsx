"use client";

import React, { useState } from "react";

export default function EvidencePreviewSection() {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section className="py-24 bg-white border-b hairline-border" id="evidence-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600 mb-2 block">
              Live Product Demonstration
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-carbon-950">
              See the evidence behind the claims.
            </h2>
            <p className="mt-2 text-carbon-600 text-sm sm:text-base">
              Illustrative candidate assessment for demonstration purposes. Click each claim below to inspect primary
              evidentiary proof.
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-mono-code text-xs text-carbon-600">
            Candidate: <strong className="text-carbon-950 font-semibold">Aanya Shah</strong> • Role: Staff
            Infrastructure
          </div>
        </div>

        {/* Interactive Tabs Interface */}
        <div className="bg-pearl rounded-2xl border hairline-border overflow-hidden shadow-sculpt">
          {/* Tab Selector Bar */}
          <div className="flex flex-col sm:flex-row border-b hairline-border bg-white text-xs font-medium" role="tablist">
            <button
              aria-selected={activeTab === 1}
              className={`flex-1 py-4 px-6 text-left border-b-2 flex items-center justify-between transition-all cursor-pointer ${
                activeTab === 1
                  ? "border-carbon-950 bg-pearl/40 font-semibold text-carbon-950"
                  : "border-transparent text-carbon-600 hover:text-carbon-900"
              }`}
              id="tab-btn-1"
              onClick={() => setActiveTab(1)}
              role="tab"
              type="button"
            >
              <span>1. Distributed Consensus (Go)</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </button>
            <button
              aria-selected={activeTab === 2}
              className={`flex-1 py-4 px-6 text-left border-b-2 flex items-center justify-between transition-all cursor-pointer ${
                activeTab === 2
                  ? "border-carbon-950 bg-pearl/40 font-semibold text-carbon-950"
                  : "border-transparent text-carbon-600 hover:text-carbon-900"
              }`}
              id="tab-btn-2"
              onClick={() => setActiveTab(2)}
              role="tab"
              type="button"
            >
              <span>2. Multi-Region Kubernetes</span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            </button>
            <button
              aria-selected={activeTab === 3}
              className={`flex-1 py-4 px-6 text-left border-b-2 flex items-center justify-between transition-all cursor-pointer ${
                activeTab === 3
                  ? "border-carbon-950 bg-pearl/40 font-semibold text-carbon-950"
                  : "border-transparent text-carbon-600 hover:text-carbon-900"
              }`}
              id="tab-btn-3"
              onClick={() => setActiveTab(3)}
              role="tab"
              type="button"
            >
              <span>3. High-Throughput GraphQL (50k req/s)</span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
            </button>
          </div>

          {/* Tab Content Panes */}
          <div className="p-6 sm:p-10">
            {/* Pane 1: Supported by Evidence */}
            {activeTab === 1 && (
              <div className="space-y-6 block" id="tab-pane-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b hairline-border">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                        Supported by available evidence
                      </span>
                      <span className="text-xs text-carbon-600 font-mono-code">Confidence: 96%</span>
                    </div>
                    <h3 className="text-xl font-bold text-carbon-950 mt-2">
                      Claimed: &ldquo;Engineered high-concurrency Raft consensus engine in Go handling cluster leader election
                      and log replication.&rdquo;
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-carbon-600 block">Source Artifact</span>
                    <a
                      className="text-xs font-mono-code text-carbon-950 underline decoration-champagne-500 font-medium"
                      href="#"
                    >
                      github.com/aanya-s/raft-core
                    </a>
                  </div>
                </div>

                {/* Evidence Details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Code Preview Drawer */}
                  <div className="lg:col-span-8 bg-carbon-950 rounded-xl p-5 text-white font-mono-code text-xs leading-relaxed overflow-x-auto shadow-inner">
                    <div className="flex items-center justify-between text-carbon-600 border-b border-carbon-800 pb-3 mb-3 text-[11px]">
                      <span>raft/election.go • commit sha: 4e91cf28b9</span>
                      <span className="text-emerald-400">Verified Commit Timestamp: 2024-03-12</span>
                    </div>
                    <pre className="text-carbon-300">
                      <code>
                        <span className="text-carbon-600">// Leader election loop with randomized heartbeat intervals</span>
                        {"\n"}
                        <span className="text-champagne-300">func</span> (rf *Raft){" "}
                        <span className="text-blue-300">startElection</span>() &#123;
                        {"\n"}
                        {"    "}rf.currentTerm++
                        {"\n"}
                        {"    "}rf.votedFor = rf.me
                        {"\n"}
                        {"    "}rf.state = LeaderCandidate
                        {"\n"}
                        {"    "}
                        <span className="text-champagne-300">votesReceived</span> := 1
                        {"\n\n"}
                        {"    "}
                        <span className="text-emerald-400">for</span> peer :={" "}
                        <span className="text-champagne-300">range</span> rf.peers &#123;
                        {"\n"}
                        {"        "}
                        <span className="text-emerald-400">if</span> peer != rf.me &#123;
                        {"\n"}
                        {"            "}
                        <span className="text-champagne-300">go</span> rf.sendRequestVote(peer, &amp;votesReceived)
                        {"\n"}
                        {"        "}&#125;
                        {"\n"}
                        {"    "}&#125;
                        {"\n"}
                        &#125;
                      </code>
                    </pre>
                  </div>

                  {/* Analysis Sidebar */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="bg-white p-5 rounded-xl border hairline-border">
                      <h4 className="text-xs font-semibold text-carbon-950 uppercase tracking-wider mb-2">
                        Automated Audit Summary
                      </h4>
                      <p className="text-xs text-carbon-600 leading-normal">
                        Candidate wrote 87% of all commits in the Raft state-machine module. Extensive race-condition
                        testing suite passes with zero thread deadlocks.
                      </p>
                    </div>
                    <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200/60">
                      <span className="text-[11px] font-semibold text-emerald-900 block mb-1">
                        Recommended Interview Probe:
                      </span>
                      <p className="text-xs text-emerald-800">
                        &ldquo;Walk through how you handled partition healing when network split occurs across 5 nodes
                        during active snapshot creation.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pane 2: Partial Evidence */}
            {activeTab === 2 && (
              <div className="space-y-6 block" id="tab-pane-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b hairline-border">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
                        Partial evidence identified
                      </span>
                      <span className="text-xs text-carbon-600 font-mono-code">Confidence: 54%</span>
                    </div>
                    <h3 className="text-xl font-bold text-carbon-950 mt-2">
                      Claimed: &ldquo;Designed zero-downtime multi-region Kubernetes deployment spanning AWS eu-west and
                      us-east.&rdquo;
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-carbon-600 block">Source Artifact</span>
                    <span className="text-xs font-mono-code text-carbon-700">Internal enterprise tenure</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 bg-white p-6 rounded-xl border hairline-border space-y-4">
                    <h4 className="text-sm font-semibold text-carbon-950">Discrepancy &amp; Evidence Analysis</h4>
                    <p className="text-sm text-carbon-600 leading-relaxed">
                      Public traces show verified contributions to open-source Terraform AWS modules and Kubernetes
                      ingress controller configurations. However, production multi-region failover automation is
                      contained inside private repositories from past employer.
                    </p>
                    <div className="p-4 rounded-lg bg-pearl text-xs font-mono-code space-y-1">
                      <div className="text-carbon-700">
                        Public Terraform Helm config:{" "}
                        <span className="text-emerald-700 font-semibold">Confirmed</span>
                      </div>
                      <div className="text-carbon-700">
                        Multi-region DNS failover script:{" "}
                        <span className="text-amber-700 font-semibold">Private / Unverified</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4 bg-amber-50/70 p-5 rounded-xl border border-amber-200">
                    <span className="text-[11px] font-semibold text-amber-900 block mb-2">
                      Recommended Interview Inquiry:
                    </span>
                    <p className="text-xs text-amber-900 leading-relaxed">
                      &ldquo;Since the multi-region topology is proprietary, ask the candidate to diagram their Route53
                      latency-based routing logic and how they resolved split-brain database syncs during region
                      failover.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Pane 3: Not Established */}
            {activeTab === 3 && (
              <div className="space-y-6 block" id="tab-pane-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b hairline-border">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-slate-200 text-carbon-800 text-xs font-semibold">
                        Not yet established in public signals
                      </span>
                      <span className="text-xs text-carbon-600 font-mono-code">Confidence: Uncalibrated</span>
                    </div>
                    <h3 className="text-xl font-bold text-carbon-950 mt-2">
                      Claimed: &ldquo;Architected high-throughput GraphQL Gateway handling 50,000+ requests/sec under
                      SLA.&rdquo;
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-carbon-600 block">Assessment Target</span>
                    <span className="text-xs font-mono-code text-carbon-700">Resume claim only</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 bg-white p-6 rounded-xl border hairline-border space-y-4">
                    <h4 className="text-sm font-semibold text-carbon-950">Audit Evaluation</h4>
                    <p className="text-sm text-carbon-600 leading-relaxed">
                      No public benchmarks or load test configs found for this specific volumetric scale. Skilltrace
                      classifies this as an unverified quantitative metric that requires targeted technical debriefing.
                    </p>
                    <div className="flex items-center gap-3 p-3 bg-pearl rounded-lg text-xs text-carbon-700">
                      <svg
                        className="w-4 h-4 text-carbon-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                      </svg>
                      <span>
                        Skitrace never rejects candidates automatically. Unverified claims simply flag targeted probing
                        opportunities.
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-4 bg-pearl p-5 rounded-xl border hairline-border">
                    <span className="text-[11px] font-semibold text-carbon-900 block mb-2">Probe Recommendation:</span>
                    <p className="text-xs text-carbon-600 leading-relaxed">
                      &ldquo;Request candidate to explain the caching layer, DataLoader batching strategy, and connection
                      pooling techniques required to sustain 50,000 req/s without saturating downstream database
                      replicas.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
