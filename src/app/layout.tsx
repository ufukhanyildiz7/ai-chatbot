// layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Chat Bot",
  description: "Yazılımcılar ve kodlayıcılar için tasarlanmış bir sohbetbotu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-medium dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
