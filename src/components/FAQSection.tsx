"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does Skitrace verify candidate code and claims?",
    answer:
      "Skitrace ingests candidate-authorized repositories, public commits, RFCs, and code contributions. Our engine performs AST syntax tree analysis, authorship attribution checks, and commit timestamp verification to trace exactly who wrote the core logic versus boilerplate or dependencies.",
  },
  {
    question: "What repositories and version control systems do you support?",
    answer:
      "We support GitHub, GitLab, Bitbucket, self-hosted Enterprise instances, and public open-source project mirrors. Candidates can securely authorize access through OAuth with read-only scopes.",
  },
  {
    question: "How do you handle private or proprietary client codebases under NDA?",
    answer:
      "We strictly respect IP confidentiality. Skitrace never stores private source code. For proprietary enterprise backgrounds, we calculate zero-knowledge AST diff signatures locally, analyze architecture system designs, and generate targeted technical probe questions for interviewers rather than exposing proprietary IP.",
  },
  {
    question: "Does Skitrace replace technical screening interviews or live rounds?",
    answer:
      "No. Skitrace replaces arbitrary whiteboard LeetCode puzzles with real architectural discussions. By reviewing the candidate's verified proof dossier beforehand, hiring managers can spend technical rounds diving deep into real trade-offs and system decisions.",
  },
  {
    question: "How does this integrate with our existing ATS (Greenhouse, Ashby, Lever)?",
    answer:
      "Skitrace integrates seamlessly with leading ATS platforms including Greenhouse, Ashby, and Lever. Once a candidate submits their proof profile or authorized handles, a verified evidence report is attached directly to their ATS candidate profile.",
  },
  {
    question: "Is candidate consent required, and how do you comply with GDPR?",
    answer:
      "Yes. Candidate consent is fundamental. Candidates explicitly choose which accounts and portfolios to connect, can preview their own evidence dossier, and have full rights to redact or revoke data under GDPR and CCPA standards.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-y hairline-border" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-600 mb-2 block">
            Questions &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-carbon-950">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-carbon-600 text-sm sm:text-base">
            Everything you need to know about proof-driven technical hiring.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "bg-[#FAF8F5] border-carbon-300 shadow-xs" : "bg-white hairline-border hover:border-carbon-300"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between text-left p-6 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  type="button"
                >
                  <h3 className="text-sm sm:text-base font-semibold text-carbon-950 pr-4">{faq.question}</h3>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs transition-transform duration-200 ${
                      isOpen ? "bg-carbon-950 text-white" : "bg-[#FAF8F5] text-carbon-700 border hairline-border"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-carbon-600 leading-relaxed border-t hairline-border">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
