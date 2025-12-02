import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _inter = Inter({ subsets: ["latin"] });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EXCLUSIVO | Premium Barbershop",
  description:
    "Experience exclusive grooming services. Expert barbers, classic cuts, modern styles. Book your appointment today.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#141414",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider>
            {children}
            <ToastViewport />
          </ToastProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
