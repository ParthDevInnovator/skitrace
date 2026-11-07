"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useModal } from "./ModalContext";

export default function CTASection() {
  const { openEarlyAccess } = useModal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="py-24 bg-[#0E1012] text-white relative overflow-hidden">
      {/* Background Watermark Accent */}
      <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none w-[650px] h-[650px]">
        <Image
          alt="Skitrace watermark"
          className="w-full h-full object-contain filter invert"
          src="/images/skitrace-emblem.png"
          width={650}
          height={650}
          unoptimized
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-carbon-900 border border-carbon-800 text-xs font-mono-code text-champagne-300">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne-400 animate-pulse"></span>
          Now Accepting Pilot Applications
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
          Stop Reading Between the Lines.
          <br />
          <span className="font-editorial italic text-champagne-400">Discover the Proof.</span>
        </h2>

        <p className="max-w-2xl mx-auto text-carbon-400 text-sm sm:text-base leading-relaxed">
          Join forward-thinking engineering organizations moving from claim-based hiring to proof-based hiring. Cut
          interview cycles by 60% and eliminate false positives.
        </p>

        {/* Action Form or Success */}
        {submitted ? (
          <div className="max-w-md mx-auto p-4 rounded-xl bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-sm font-medium animate-fade-in">
            ✓ Thank you for requesting access. Our engineering team will contact you shortly to schedule your pilot calibration.
          </div>
        ) : (
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2" onSubmit={handleSubmit}>
            <input
              className="flex-1 rounded-full bg-[#191C20] border border-carbon-700 px-5 py-3.5 text-xs sm:text-sm text-white placeholder-carbon-500 focus:outline-none focus:border-champagne-400 focus:ring-1 focus:ring-champagne-400 font-mono-code"
              placeholder="Enter work email..."
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="px-7 py-3.5 rounded-full bg-champagne-500 text-carbon-950 font-semibold text-xs uppercase tracking-wider hover:bg-champagne-400 transition-colors shadow-lg cursor-pointer shrink-0"
              type="submit"
            >
              Request Access
            </button>
          </form>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-carbon-500 pt-2">
          <span>✓ Instant ATS integration</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ Zero code storage guarantee</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ SOC 2 &amp; GDPR compliant</span>
        </div>
      </div>
    </section>
  );
}
