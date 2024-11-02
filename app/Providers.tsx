"use client";
import React, { ReactNode, Suspense } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <div className="w-full relative overflow-hidden">
      <Suspense>{children}</Suspense>
    </div>
  );
}
