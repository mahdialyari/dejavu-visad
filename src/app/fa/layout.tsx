// app/fa/layout.tsx
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout"; // Import ClientLayout

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "هلدینگ بین‌المللی دژاوو",
      template: "%s | هلدینگ بین‌المللی دژاوو",
    },
    description: "ارائه خدمات تخصصی مهاجرت، ویزا و تجارت با تیم مجرب دژاوو.",
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {/* ClientLayout را اضافه کنید */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}