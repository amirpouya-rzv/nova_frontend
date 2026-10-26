// app/layout.tsx
import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import StoreProvider from "@/components/providers/StoreProvider";
import { themeScript } from "@/constants/themeScript";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "نام سایت",
  description: "توضیحات سایت",
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
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Suspense fallback={null}>
          <StoreProvider>{children}</StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}