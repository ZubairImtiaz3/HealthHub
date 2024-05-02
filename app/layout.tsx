import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welfare Frontend",
  description: "A Nextjs Frontend",
};

const navItems = [
  {
    name: "Find Doctor",
    link: "#findDoc",
  },
  {
    name: "Reports",
    link: "#reports",
  },
  {
    name: "Serivces",
    link: "#serivces",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
