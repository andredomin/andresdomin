import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "andresdomin",
  description: "Full-Stack Developer, aprendiz de Data Science e IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
