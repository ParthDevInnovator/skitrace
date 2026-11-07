"use client";

import React from "react";

export default function LogoMarquee() {
  const logos = [
    { name: "Vercel", label: "VERCEL" },
    { name: "Stripe", label: "stripe" },
    { name: "Supabase", label: "supabase" },
    { name: "Linear", label: "Linear" },
    { name: "Datadog", label: "DATADOG" },
    { name: "Cloudflare", label: "CLOUDFLARE" },
    { name: "Raycast", label: "Raycast" },
  ];

  return (
    <section className="py-10 bg-white border-y hairline-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-carbon-400 mb-8">
          EVALUATING CANDIDATES FROM LEADING HIGH-BAR ENGINEERING ORGANIZATIONS
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-carbon-700 hover:text-carbon-950 transition-colors font-semibold tracking-tight text-sm sm:text-base cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-champagne-400/80"></div>
              <span>{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

