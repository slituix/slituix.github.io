// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'My Next.js Docs-style Site',
  description: 'A beautiful code & docs notebook with Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#161618] text-zinc-100">{children}</body>
    </html>
  );
}
