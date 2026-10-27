"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What if an exceptional candidate worked primarily in closed-source private codebases?",
    answer:
      'Skitrace explicitly differentiates between "disproven" and "unverified public signal." For candidates with proprietary backgrounds, Skitrace highlights verified system design patents, architecture writeups, and generates tailored interview probe questions so your team can evaluate their work directly during technical rounds.',
  },
  {
    question: "Does Skitrace replace technical screening interviews or coding take-homes?",
    answer:
      "No. Skitrace enhances interviews by grounding them in real work. Rather than asking candidates to invert binary trees in artificial environments, hiring managers use Skitrace to discuss actual architecture decisions and production commits the candidate made.",
  },
  {
    question: "How does Skitrace safeguard candidate privacy and platform compliance?",
    answer:
      "Skitrace only parses candidate-authorized accounts or publicly accessible developer contributions. All data complies with GDPR, SOC 2, and CCPA specifications. We never sell candidate telemetry to third-party data brokers.",
  },
];

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2]);

  const toggleFAQ = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="py-24 bg-pearl" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600 mb-2 block">
            Questions &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-carbon-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="rounded-xl bg-white border hairline-border p-6 shadow-subtle-card transition-all"
              >
                <button
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  type="button"
                >
                  <h3 className="text-base font-semibold text-carbon-950 pr-4">{faq.question}</h3>
                  <span className="shrink-0 text-carbon-500 group-hover:text-carbon-900 transition-transform">
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm text-carbon-600 leading-relaxed pt-2 border-t hairline-border">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
