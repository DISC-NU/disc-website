import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/_components/ui/toaster";
import AnnouncementBanner from "@/_components/ui/banner-announcements";
import Header from "@/_components/ui/navigation-bar";
import Footer from "@/_components/footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Develop & Innovate for Social Change",
  description:
    "DISC is a student organization at Northwestern University. We empower students through technology and innovation.",
  openGraph: {
    title: "Develop & Innovate for Social Change",
    description:
      "DISC is a student organization at Northwestern University. We empower students through technology and innovation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DISC Website Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}} ${geistMono.variable}`}>
      <body
        className={`bg-background font-sans tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden pt-0 md:pt-0">
          <Header />
          {children}
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
