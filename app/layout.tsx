
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { sfPro } from './fonts';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Saksham | Developer & Designer",
  description: "I craft beautiful user interfaces and build elegant web experiences with modern technologies.",
  keywords: ["developer", "designer", "nextjs", "react", "typescript", "kotlin", "rust", "saksham"],
  authors: [{ name: "Saksham", url: "https://github.com/slituix" }],
  creator: "Saksham",
  openGraph: {
    title: 'Saksham | Developer & Designer',
    description: 'I craft beautiful user interfaces and build elegant web experiences with modern technologies',
    url: 'https://slituix.vercel.app',
    siteName: 'Saksham Portfolio',
    images: [
      {
        url: 'https://slituix.vercel.app/icon0.svg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://slituix.vercel.app/icon1.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'alt image',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sfPro.className} suppressHydrationWarning>
      <body className="font-serif antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
