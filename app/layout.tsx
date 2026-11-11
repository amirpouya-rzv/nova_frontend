// app/layout.tsx
import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import StoreProvider from "@/components/providers/StoreProvider";
import { themeScript } from "@/constants/themeScript";
import "./globals.css";
import localFont from "next/font/local";
import { Geist, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "NOVA",
  description: "توضیحات سایت",

  icons: {
    icon: "/image/logo.WebP",
    shortcut: "/image/logo.WebP",
    apple: "/image/logo.WebP",
  },
};


const yekan = localFont({
  src: "./fonts/Yekan.ttf",
  variable: "--font-yekan",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="ltr" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Suspense fallback={null}>
          <StoreProvider>{children}</StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}