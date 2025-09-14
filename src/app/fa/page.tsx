"use client";

import Hero from "@/app/fa/components/Hero";
import Stats from "@/app/fa/components/Stats";
import Destinations from "@/app/fa/components/Destinations";
import Features from "@/app/fa/components/Features";  
import Articles from "@/app/fa/components/Articles";  
import FAQ from "@/app/fa/components/FAQ";
import FloatingChat from "@/app/fa/components/FloatingChat";

export default function Page() {
  return (
    <>
      <Hero />
      <Stats />
      <Destinations />
      <Features />  
      <Articles />  
      <FAQ />  
      <FloatingChat /> 
    </>
  );
}