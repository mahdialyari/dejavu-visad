// app/en/layout.tsx
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout"; // Import ClientLayout مخصوص انگلیسی

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Dejavu International Holding",
      template: "%s | Dejavu International Holding",
    },
    description: "Specialized immigration, visa, and business consulting services by Dejavu.",
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}