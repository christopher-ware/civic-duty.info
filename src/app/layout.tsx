import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "civic-duty.ai | Explore Political Perspectives Through AI",
  description: "An educational tool that allows users to explore different political perspectives on various topics by selecting positions along political spectrums. Build empathy and understanding across political divides.",
  keywords: ["political perspectives", "AI", "education", "civic engagement", "political spectrum", "understanding politics"],
  authors: [{ name: "civic-duty.ai" }],
  openGraph: {
    title: "civic-duty.ai | Explore Political Perspectives Through AI",
    description: "An educational tool for exploring different political perspectives through AI-generated responses.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://civic-duty.ai",
    siteName: "civic-duty.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "civic-duty.ai | Explore Political Perspectives Through AI",
    description: "An educational tool for exploring different political perspectives through AI-generated responses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
