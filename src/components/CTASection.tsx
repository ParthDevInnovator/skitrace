"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function CTASection() {
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
    <section className="py-24 bg-carbon-950 text-white relative overflow-hidden">
      {/* Sculptural Watermark Accent in Dark CTA */}
      <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none w-[650px] h-[650px]">
        <Image
          alt="Skitrace folded logo watermark background"
          className="w-full h-full object-contain filter invert"
          src="/images/skitrace-emblem.png"
          width={650}
          height={650}
          unoptimized
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-carbon-800/80 border border-carbon-700 text-xs font-mono-code text-champagne-300">
          Limited Pilot Release
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
          See beyond the resume.
          <br />
          <span className="text-champagne-400 font-normal italic">Make hiring decisions based on real proof.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-carbon-400 text-base sm:text-lg">
          Join leading technology companies using Skitrace to bring candidate signals into focus and replace resume
          ambiguity with transparent truth.
        </p>

        {/* CTA Form */}
        {submitted ? (
          <div className="max-w-md mx-auto p-4 rounded-xl bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-sm font-medium animate-fade-in">
            ✓ Thank you for requesting early access. A Skilltrace partner will reach out to schedule your pilot calibration.
          </div>
        ) : (
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-4" onSubmit={handleSubmit}>
            <input
              className="flex-1 rounded-full bg-carbon-900 border border-carbon-700 px-5 py-3.5 text-sm text-white placeholder-carbon-500 focus:outline-none focus:border-champagne-400 focus:ring-1 focus:ring-champagne-400"
              placeholder="Enter work email..."
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="px-7 py-3.5 rounded-full bg-champagne-500 text-carbon-950 font-semibold text-xs uppercase tracking-wider hover:bg-champagne-400 transition-colors shadow-lg cursor-pointer"
              type="submit"
            >
              Get Early Access
            </button>
          </form>
        )}

        <p className="text-xs text-carbon-500">No credit card required. Prioritized for technical hiring teams.</p>
      </div>
    </section>
  );
}
