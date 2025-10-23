
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saksham | Developer & Designer",
  description: "I craft beautiful user interfaces and build elegant web experiences with modern technologies.",
  keywords: ["developer", "designer", "nextjs", "react", "typescript", "kotlin", "rust", "saksham"],
  authors: [{ name: "Saksham", url: "https://github.com/slituix" }],
  creator: "Saksham",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "slituix.vercel.app",
    title: "Saksham | Developer & Designer",
    description: "I craft beautiful user interfaces and build elegant web experiences with modern technologies.",
    siteName: "Saksham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham | Developer & Designer",
    description: "I craft beautiful user interfaces and build elegant web experiences with modern technologies.",
    creator: "@_slituix",
    site: "@_slituix",
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
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`} suppressHydrationWarning>
      <body className="font-serif antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
