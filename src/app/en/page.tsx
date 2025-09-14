"use client";

import Hero from "@/app/en/components/Hero";
import Stats from "@/app/en/components/Stats";
import Destinations from "@/app/en/components/Destinations";
import Features from "@/app/en/components/Features";  
import Articles from "@/app/en/components/Articles";  
import FAQ from "@/app/en/components/FAQ";
import FloatingChat from "@/app/en/components/FloatingChat";

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