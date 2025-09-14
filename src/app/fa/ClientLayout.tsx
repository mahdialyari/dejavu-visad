// app/fa/ClientLayout.tsx
"use client";

import Header from "@/app/fa/components/Header";
import Footer from "@/app/fa/components/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAiPage = pathname?.startsWith("/fa/ai");

  return (
    <>
      <Header />
      <main>{children}</main>
      {!isAiPage && <Footer />}
    </>
  );
}