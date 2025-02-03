import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ui/themeprovider";

export const metadata: Metadata = {
  title: "SUBA CORP",
  description: "SUBA Corporation website",
  icons: {
    icon: "/images/favicon.ico",
  },
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
