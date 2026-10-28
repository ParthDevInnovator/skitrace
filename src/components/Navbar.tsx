"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useModal } from "./ModalContext";

export default function Navbar() {
  const { openEarlyAccess } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav border-b hairline-border transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        {/* Brand Logo & Wordmark */}
        <a aria-label="Skitrace Home" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0" href="#">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 border border-carbon-900/10 bg-white shrink-0">
            <Image
              alt="Skitrace Sculptural S Emblem"
              className="w-full h-full object-cover scale-110"
              src="/images/skitrace-emblem.png"
              width={36}
              height={36}
              priority
              unoptimized
            />
          </div>
          <div className="flex items-baseline tracking-tight font-medium text-carbon-900 shrink-0">
            <span className="text-xl sm:text-2xl font-bold tracking-[-0.04em]">skitrace</span>
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 ml-1 shrink-0"></span>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-carbon-700 font-medium tracking-tight">
          <a className="hover:text-carbon-950 transition-colors" href="#how-it-works">
            How it works
          </a>
          <a className="hover:text-carbon-950 transition-colors" href="#problem">
            The Problem
          </a>
          <a className="hover:text-carbon-950 transition-colors" href="#evidence-preview">
            Product Preview
          </a>
          <a className="hover:text-carbon-950 transition-colors" href="#for-teams">
            For Recruiters
          </a>
          <a className="hover:text-carbon-950 transition-colors" href="#trust">
            Trust &amp; Integrity
          </a>
          <a className="hover:text-carbon-950 transition-colors" href="#faq">
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            className="hidden sm:inline-flex relative group items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-carbon-950 rounded-full hover:bg-carbon-800 transition-all duration-200 shadow-sm hover:shadow-md border border-carbon-800 cursor-pointer"
            onClick={openEarlyAccess}
            type="button"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get early access
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
        <div className="md:hidden glass-nav border-b hairline-border px-4 py-4 space-y-3">
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950 py-1"
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
          >
            How it works
          </a>
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950 py-1"
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
          >
            The Problem
          </a>
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950 py-1"
            href="#evidence-preview"
            onClick={() => setMobileMenuOpen(false)}
          >
            Product Preview
          </a>
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950 py-1"
            href="#for-teams"
            onClick={() => setMobileMenuOpen(false)}
          >
            For Recruiters
          </a>
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950 py-1"
            href="#trust"
            onClick={() => setMobileMenuOpen(false)}
          >
            Trust &amp; Integrity
          </a>
          <a
            className="block text-sm font-medium text-carbon-700 hover:text-carbon-950 py-1"
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <div className="pt-3 border-t hairline-border sm:hidden">
            <button
              className="w-full inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-carbon-950 rounded-full hover:bg-carbon-800 transition-all duration-200 shadow-sm cursor-pointer"
              onClick={() => {
                setMobileMenuOpen(false);
                openEarlyAccess();
              }}
              type="button"
            >
              Get early access &rarr;
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
