import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanketh Harnoorkar - Backend Engineer",
  description: "Backend engineer specializing in distributed systems, scalability, and Rust. 5 years experience at Myntra building high-throughput services.",
  keywords: ["backend engineer", "distributed systems", "Rust", "Java", "Kubernetes", "databases"],
  authors: [{ name: "Sanketh Harnoorkar" }],
  openGraph: {
    title: "Sanketh Harnoorkar - Backend Engineer",
    description: "Backend engineer specializing in distributed systems and scalable architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
