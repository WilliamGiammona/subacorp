import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ui/themeprovider";

export const metadata: Metadata = {
  title: "SUBA Corporation",
  description: "SUBA Corporation website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
