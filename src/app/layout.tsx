import "./globals.css";

import { Inter } from "next/font/google";
import { Providers } from "@/utils/components/Providers";
import Navbar from "@/app/components/Navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
