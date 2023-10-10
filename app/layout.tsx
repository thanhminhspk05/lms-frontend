"use client";

import { Josefin_Sans, Poppins } from "next/font/google";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "./utils/theme-provider";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
