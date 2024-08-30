"use client"
import Hero from "@/components/Hero";


import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    document.title = "Shopping-Figures";
  }, []);
  return (
    <main>
      <Hero />
    </main>
  );
}
