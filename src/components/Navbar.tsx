"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useModal } from "./ModalContext";

export default function Navbar() {
  const { openEarlyAccess } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav border-b hairline-border transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Wordmark */}
        <a aria-label="Skitrace Home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0" href="#">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 border hairline-border bg-white shrink-0">
            <Image
              alt="Skitrace Logo Mark"
              className="w-full h-full object-cover scale-105"
              src="/images/skitrace-emblem.png"
              width={36}
              height={36}
              priority
              unoptimized
            />
          </div>
          <div className="flex items-baseline tracking-tight font-medium text-carbon-950 shrink-0">
            <span className="text-xl sm:text-2xl font-bold tracking-[-0.03em]">skitrace</span>
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 ml-1 shrink-0"></span>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 text-[13.5px] text-carbon-700 font-medium tracking-tight">
          <a className="hover:text-carbon-950 transition-colors" href="#why-skitrace">
            Why Skitrace
          </a>
          <a className="hover:text-carbon-950 transition-colors" href="#the-gap">
            The Evidence Gap
          </a>
          <a className="hover:text-carbon-950 transition-colors" href="#search-proof">
            Search Proof
          </a>
          <a className="hover:text-carbon-950 transition-colors" href="#evidence-preview">
            Dossier Preview
          </a>
          <a className="hover:text-carbon-950 transition-colors" href="#for-teams">
            For Teams
          </a>
          <a className="hover:text-carbon-950 transition-colors" href="#faq">
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={openEarlyAccess}
            className="hidden sm:inline-flex text-[13.5px] font-medium text-carbon-700 hover:text-carbon-950 px-3 py-2 transition-colors cursor-pointer"
            type="button"
          >
            Log in
          </button>
          <button
            className="inline-flex relative group items-center justify-center px-4 sm:px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-carbon-950 rounded-full hover:bg-carbon-800 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
            onClick={openEarlyAccess}
            type="button"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request Access
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-carbon-700 hover:text-carbon-950 hover:bg-carbon-900/5 focus:outline-none transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b hairline-border px-6 py-5 space-y-4">
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950"
            href="#why-skitrace"
            onClick={() => setMobileMenuOpen(false)}
          >
            Why Skitrace
          </a>
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950"
            href="#the-gap"
            onClick={() => setMobileMenuOpen(false)}
          >
            The Evidence Gap
          </a>
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950"
            href="#search-proof"
            onClick={() => setMobileMenuOpen(false)}
          >
            Search Proof
          </a>
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950"
            href="#evidence-preview"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dossier Preview
          </a>
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950"
            href="#for-teams"
            onClick={() => setMobileMenuOpen(false)}
          >
            For Teams
          </a>
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950"
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <div className="pt-3 border-t hairline-border flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEarlyAccess();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-carbon-950 rounded-full"
            >
              Request Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
