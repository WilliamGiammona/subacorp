import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ui/themeprovider";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "SUBA",
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
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
