import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ggueco-job-app.vercel.app/"),
  title: "Job Board - Find Your Dream Job",
  description:
    "Discover top job opportunities on our modern job board application.",
  keywords: "jobs, job board, careers, hiring, employment, work, recruitment",
  authors: [
    { name: "Gerard Gueco", url: "https://gerard-gueco-dev.vercel.app/" },
  ],
  openGraph: {
    title: "Job Board - Find Your Dream Job",
    description:
      "Discover top job opportunities on our modern job board application.",
    url: "https://ggueco-job-app.vercel.app/",
    siteName: "Job Board",
    type: "website",
    images: [
      {
        url: "/static/images/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Job Board Open Graph Image",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/static/images/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
