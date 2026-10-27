"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useModal } from "./ModalContext";

export default function Modals() {
  const { isEarlyAccessOpen, closeEarlyAccess } = useModal();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [earlyAccessSuccess, setEarlyAccessSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isEarlyAccessOpen) closeEarlyAccess();
      }
    };
    if (isEarlyAccessOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEarlyAccessOpen, closeEarlyAccess]);

  const handleEarlyAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEarlyAccessSuccess(true);
    setTimeout(() => {
      setEarlyAccessSuccess(false);
      setEmail("");
      setCompany("");
      closeEarlyAccess();
    }, 2200);
  };

  return (
    <>
      {/* Early Access Modal */}
      {isEarlyAccessOpen && (
        <div
          className="fixed inset-0 z-50 bg-carbon-950/70 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity animate-fade-in"
          id="early-access-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeEarlyAccess();
          }}
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border hairline-border relative">
            <button
              className="absolute top-5 right-5 text-carbon-400 hover:text-carbon-900 cursor-pointer"
              onClick={closeEarlyAccess}
              type="button"
              aria-label="Close early access modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>

            <div className="space-y-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-1 border hairline-border">
                <Image
                  alt="Skitrace Logo Mark"
                  className="w-full h-full object-cover"
                  src="/images/skitrace-emblem.png"
                  width={40}
                  height={40}
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-carbon-950">Request Early Access</h3>
              <p className="text-xs text-carbon-600">
                Join top tech companies testing evidence-first technical recruitment.
              </p>
            </div>

            {earlyAccessSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
                ✓ Thank you for requesting early access. A Skilltrace partner will reach out to schedule your pilot
                calibration.
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleEarlyAccessSubmit}>
                <div>
                  <label className="block text-xs font-semibold text-carbon-700 uppercase mb-1">Work Email</label>
                  <input
                    className="w-full text-sm rounded-lg border hairline-border px-3.5 py-2.5 focus:border-carbon-950 focus:ring-1 focus:ring-carbon-950"
                    placeholder="alex@company.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-carbon-700 uppercase mb-1">
                    Company / Organization
                  </label>
                  <input
                    className="w-full text-sm rounded-lg border hairline-border px-3.5 py-2.5 focus:border-carbon-950 focus:ring-1 focus:ring-carbon-950"
                    placeholder="Acme Engineering"
                    required
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <button
                  className="w-full py-3 bg-carbon-950 text-white font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-carbon-800 transition-colors cursor-pointer"
                  type="submit"
                >
                  Submit Pilot Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
