import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M3 Labs - AI-Powered Recruitment Platform",
  description: "Transform your recruitment process with M3 Labs' intelligent workflow automation. Save 15+ hours weekly with AI-powered workflows connecting 300+ tools and platforms.",
  keywords: ["recruitment", "workflow automation", "ATS", "HR tech", "recruitment software", "candidate management", "workflow builder", "AI recruitment", "HR automation"],
  authors: [{ name: "M3 Labs" }],
  creator: "M3 Labs",
  publisher: "M3 Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://m3labs.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "M3 Labs - AI-Powered Recruitment Platform",
    description: "Transform your recruitment process with intelligent workflow automation. Save 15+ hours weekly with AI-powered workflows connecting 300+ tools and platforms.",
    url: "https://m3labs.co.uk",
    siteName: "M3 Labs",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "M3 Labs - AI-Powered Recruitment Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M3 Labs - AI-Powered Recruitment Platform",
    description: "Transform your recruitment process with intelligent workflow automation. Save 15+ hours weekly with AI-powered workflows.",
    images: ["/og-image.svg"], // Same image as Open Graph
    creator: "@m3labs", // Replace with your actual Twitter handle
    site: "@m3labs", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=4', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=4', sizes: 'any' },
    ],
    shortcut: '/favicon.svg?v=4',
    apple: '/favicon.svg?v=4',
  },
  manifest: '/manifest.json', // Optional: for PWA support
  themeColor: '#6B21A8', // Primary purple from M3 Labs brand
  colorScheme: 'light',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better social sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="M3 Labs" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#6B21A8" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
