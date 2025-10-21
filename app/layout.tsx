import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
  title: "@2f1b08e | Developer & Designer",
  description:
    "I craft beautiful user interfaces and build elegant web experiences with modern technologies.",
  keywords: [
    "developer",
    "designer",
    "nextjs",
    "react",
    "typescript",
    "kotlin",
    "rust",
  ],
  authors: [{ name: "@2f1b08e" }],
  creator: "@2f1b08e",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://2f2f1b08e.vercel.app",
    title: "@2f1b08e | Developer & Designer",
    description:
      "I craft beautiful user interfaces and build elegant web experiences with modern technologies.",
    siteName: "@2f1b08e Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "@2f1b08e | Developer & Designer",
    description:
      "I craft beautiful user interfaces and build elegant web experiences with modern technologies.",
    creator: "@2f1b08e",
  },
  robots: {
    index: true,
    follow: true,
  },

  appleWebApp: {
    title: "2f1b08e",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${crimsonPro.variable}`}
      suppressHydrationWarning
    >
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
