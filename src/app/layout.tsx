import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CherryFloatingButton from "@/components/cherry-floating-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redrockvet.com"),
  title: "Red Rock Veterinary Health - Compassionate Care for Your Beloved Pets",
  description: "Professional veterinary services with state-of-the-art facilities. Wellness exams, surgery, dental care, and emergency services for dogs, cats, and exotic pets.",
  keywords: "veterinary, pet care, animal hospital, dog, cat, surgery, wellness exam, emergency vet, Red Rock",
  icons: {
    icon: [
      { url: '/RRHVLogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/RRHVLogo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/RRHVLogo.png',
    shortcut: '/RRHVLogo.png',
  },
  openGraph: {
    title: "Red Rock Veterinary Health - Compassionate Care for Your Beloved Pets",
    description: "Professional veterinary services with state-of-the-art facilities.",
    url: "https://redrockvet.com",
    siteName: "Red Rock Veterinary Health",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <CherryFloatingButton />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
