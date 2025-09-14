// app/en/ClientLayout.tsx
"use client";

import Header from "@/app/en/components/Header";
import Footer from "@/app/en/components/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAiPage = pathname?.startsWith("/en/ai");

  return (
    <>
      <Header />
      <main>{children}</main>
      {!isAiPage && <Footer />}
    </>
  );
}