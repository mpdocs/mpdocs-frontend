import "./globals.scss";

import { Inter } from "next/font/google";
import { Providers } from "@/utils/components/Providers";
import Navbar from "@/app/components/Navbar";
import React from "react";
import UserDataFetcher from "@/app/components/UserDataFetcher";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <UserDataFetcher />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
