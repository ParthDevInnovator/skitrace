"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isEarlyAccessOpen: boolean;
  openEarlyAccess: () => void;
  closeEarlyAccess: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  const openEarlyAccess = () => setIsEarlyAccessOpen(true);
  const closeEarlyAccess = () => setIsEarlyAccessOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isEarlyAccessOpen,
        openEarlyAccess,
        closeEarlyAccess,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
