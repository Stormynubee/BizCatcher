import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BizCatch by The Developer",
    template: "%s | BizCatch",
  },
  description: "Discover local businesses, analyze their online presence, and track your outreach seamlessly.",
  applicationName: "BizCatch",
  authors: [{ name: "The Developer" }],
  keywords: ["local business finder", "OpenStreetMap", "lead generation", "business outreach"],
  openGraph: {
    title: "BizCatch by The Developer",
    description: "Discover local businesses, analyze their online presence, and track your outreach seamlessly.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BizCatch by The Developer",
    description: "Discover local businesses, analyze their online presence, and track your outreach seamlessly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
