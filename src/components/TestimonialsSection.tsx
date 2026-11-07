"use client";

import React from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      highlight: true,
      quote:
        "Skitrace cut our senior infrastructure hiring loop from 4 weeks to 3 days. Instead of 5 rounds of whiteboard trivia, our team reviewed their real PR traces in the first 15 minutes.",
      author: "Sarah Jenkins",
      role: "VP of Engineering",
      company: "ScaleStack",
      avatarImg: "/images/sarah-jenkins.jpg",
      stat: "60% faster offers",
    },
    {
      highlight: false,
      quote:
        "The AST authorship attribution is unmatched. We identified two candidates with AI-ghostwritten repos before extending offers, and uncovered an exceptional self-taught systems builder.",
      author: "David Kim",
      role: "Chief Technology Officer",
      company: "Hyperlane Systems",
      avatarImg: "/images/david-kim.jpg",
      stat: "100% false positive prevention",
    },
    {
      highlight: false,
      quote:
        "Candidates love this process because they don't have to invert binary trees on a whiteboard. They get to discuss real architecture decisions they're actually proud of.",
      author: "Elena Rostova",
      role: "Head of Talent & Engineering",
      company: "Archon Robotics",
      avatarImg: "/images/elena-rostova.jpg",
      stat: "94% offer acceptance",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-600 mb-2 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-carbon-950">
            Loved by engineering teams that build fast.
          </h2>
          <p className="mt-3 text-carbon-600 text-sm sm:text-base">
            See how modern engineering organizations use verified work proof to hire with conviction.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 border flex flex-col justify-between transition-all duration-200 ${
                t.highlight
                  ? "bg-[#FAF5E8] border-champagne-300 shadow-elevation"
                  : "bg-white border-hairline-border shadow-xs hover:shadow-md"
              }`}
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#C5A059] text-xs mb-4">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-carbon-800 leading-relaxed font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t hairline-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-xs relative bg-carbon-900 shrink-0">
                    <Image
                      src={t.avatarImg}
                      alt={t.author}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-carbon-950">{t.author}</h4>
                    <p className="text-[11px] text-carbon-500">
                      {t.role} • {t.company}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono-code font-semibold text-champagne-700 bg-white/80 px-2 py-0.5 rounded border hairline-border">
                  {t.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

