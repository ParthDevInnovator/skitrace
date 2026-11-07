"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0E1012] text-carbon-400 text-xs py-16 border-t border-carbon-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-carbon-800">
          {/* Logo & Mission Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-0.5 border border-carbon-700">
                <Image
                  alt="Skitrace Logo Mark"
                  className="w-full h-full object-cover"
                  src="/images/skitrace-emblem.png"
                  width={32}
                  height={32}
                  unoptimized
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">skitrace</span>
            </div>
            <p className="text-carbon-400 text-xs max-w-sm leading-relaxed">
              A Resume Tells You What They Claim. Discover What They Can Prove. Candidate intelligence built on immutable
              primary code signals and transparent verification.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px] mb-3">Product</h4>
            <ul className="space-y-2 text-carbon-400">
              <li>
                <a className="hover:text-white transition-colors" href="#why-skitrace">
                  Why Skitrace
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#the-gap">
                  The Evidence Gap
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#search-proof">
                  Search Proof
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#evidence-preview">
                  Dossier Preview
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px] mb-3">For Teams</h4>
            <ul className="space-y-2 text-carbon-400">
              <li>
                <a className="hover:text-white transition-colors" href="#for-teams">
                  Engineering Leaders
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#for-teams">
                  Hiring Managers
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#for-teams">
                  Technical Recruiters
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#for-teams">
                  High-Craft Candidates
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Trust */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px] mb-3">Trust &amp; Legal</h4>
            <ul className="space-y-2 text-carbon-400">
              <li>
                <a className="hover:text-white transition-colors" href="#faq">
                  Security &amp; SOC 2
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#faq">
                  GDPR &amp; Privacy
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#faq">
                  Candidate Consent Charter
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#faq">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-carbon-500 text-[11px] gap-4">
          <div>© 2026 Skitrace, Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="text-carbon-400">Candidate Intelligence, Reimagined.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
