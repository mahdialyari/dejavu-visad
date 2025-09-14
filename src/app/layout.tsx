// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dejavu International Holding",
    template: "%s | Dejavu International Holding",
  },
  description: "Specialized immigration, visa, and business consulting services by Dejavu.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ 
  children,
}: { 
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}