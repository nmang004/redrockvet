import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pet X Veterinary - Compassionate Care for Your Beloved Pets",
  description: "Professional veterinary services with state-of-the-art facilities. Wellness exams, surgery, dental care, and emergency services for dogs, cats, and exotic pets.",
  keywords: "veterinary, pet care, animal hospital, dog, cat, surgery, wellness exam, emergency vet",
  openGraph: {
    title: "Pet X Veterinary - Compassionate Care for Your Beloved Pets",
    description: "Professional veterinary services with state-of-the-art facilities.",
    url: "https://petxvet.com",
    siteName: "Pet X Veterinary",
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
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
