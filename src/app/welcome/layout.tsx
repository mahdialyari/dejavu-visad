// app/welcome/layout.tsx
export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen text-white overflow-hidden bg-transparent">
        {children}
      </body>
    </html>
  );
}