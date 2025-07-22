import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Christian Thompson – Custom Websites & Lead Gen",
  description: "Book a call to get a real website, landing page, or lead gen system built by Christian Thompson. Fast, clean, no agency overhead. Southern Ontario & remote.",
  icons: {
    icon: '/icon1.ico',
    shortcut: '/icon1.ico',
    apple: '/icon1.ico',
  },
  metadataBase: new URL('https://start.ctho.work'),
  openGraph: {
    title: "Book Christian Thompson – Custom Websites & Lead Gen",
    description: "Book a call to get a real website, landing page, or lead gen system built by Christian Thompson. Fast, clean, no agency overhead. Southern Ontario & remote.",
    url: 'https://start.ctho.work',
    siteName: 'start.ctho.work',
    images: [
      {
        url: '/ctho.svg',
        width: 1200,
        height: 630,
        alt: 'ctho.work logo',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Book Christian Thompson – Custom Websites & Lead Gen",
    description: "Book a call to get a real website, landing page, or lead gen system built by Christian Thompson. Fast, clean, no agency overhead. Southern Ontario & remote.",
    images: ['/ctho.svg'],
    creator: '@43skell',
  },
  alternates: {
    canonical: 'https://start.ctho.work',
  },
  applicationName: 'start.ctho.work',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['web design', 'lead generation', 'landing page', 'Christian Thompson', 'Southern Ontario', 'book a call', 'custom website'],
  authors: [{ name: 'Christian Thompson', url: 'https://start.ctho.work' }],
  creator: 'Christian Thompson',
  publisher: 'Christian Thompson',
  category: 'Business',
};

export const viewport = {
  themeColor: '#6017EA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics (replace G-XXXXXXXXXX with real ID) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}</Script>
        {children}
      </body>
    </html>
  );
}
