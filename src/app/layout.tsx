import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanjim Hasan — Software Engineer, Frontend",
  description:
    "Frontend Engineer with 6+ years of experience building scalable, high- performance web applications using React, TypeScript, and WordPress.Proven track record of delivering complex UI systems, optimizing performance, and leading frontend development for SaaS products.Passionate about creating intuitive user experiences and maintainable architectures.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "WordPress",
    "Tanjim Hasan",
  ],
  openGraph: {
    title: "Tanjim Hasan — Software Engineer, Frontend",
    description:
      "Frontend engineer focused on building intuitive, high-performance user interfaces.",
    type: "website",
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
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
