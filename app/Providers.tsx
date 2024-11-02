"use client";
import { ReactNode, useEffect } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  //Reload The Page On Window Resize
  useEffect(() => {
    if(!window)return
    window.scrollTo(0, 0);
  }, []);

  return (
    <>{children}</>
  );
}
