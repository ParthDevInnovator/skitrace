"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-carbon-900 text-carbon-400 text-xs py-16 border-t border-carbon-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-carbon-800">
          {/* Logo & Mission Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md overflow-hidden bg-white p-0.5 border border-carbon-700">
                <Image
                  alt="Skitrace emblem logo mark"
                  className="w-full h-full object-cover"
                  src="/images/skitrace-emblem.png"
                  width={28}
                  height={28}
                  unoptimized
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">skitrace</span>
            </div>
            <p className="text-carbon-500 text-xs max-w-sm leading-relaxed">
              Beyond the resume. Discover the proof. Candidate intelligence built on immutable primary code signals and
              transparent verification.
            </p>
          </div>

          {/* Links: Product */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-[11px] mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white transition-colors" href="#how-it-works">
                  How it works
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#evidence-preview">
                  Audit Preview
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#for-teams">
                  For Recruiters
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#for-teams">
                  For Hiring Managers
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Methodology */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-[11px] mb-3">Trust &amp; Ethics</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white transition-colors" href="#trust">
                  Integrity Charter
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#trust">
                  Source Provenance
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#faq">
                  Candidate Rights
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#trust">
                  Security &amp; SOC 2
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Legal */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-[11px] mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Data Processing Addendum
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-carbon-500 gap-4">
          <div>&copy; 2026 Skitrace Technologies, Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>San Francisco</span>
            <span>•</span>
            <span>London</span>
            <span>•</span>
            <span>Tokyo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
