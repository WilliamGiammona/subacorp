import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suba Corporation",
  description: "Suba Corporation website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
