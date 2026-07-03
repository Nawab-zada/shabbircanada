import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canada Work Visa 2026 | Free Visa & Ticket | Apply Now – Canada Visa Apply",
  description:
    "Get your Canada Work Visa in 2026 with FREE visa and ticket charges. No age limit, no degree required, no IELTS needed. Apply for Security Guard, Driver, Cook, Cashier, Electrician & more high-paying jobs in Canada. Trusted by 1000+ applicants. Contact us on WhatsApp now!",
  keywords: [
    "Canada work visa",
    "Canada visa apply",
    "free Canada visa",
    "work permit Canada",
    "Canada jobs 2026",
    "Canada immigration",
    "no IELTS visa Canada",
    "skilled worker visa Canada",
    "Canada work visa from Pakistan",
    "Canada work visa from India",
    "Canada work visa from Nepal",
    "Canada work visa from Bangladesh",
  ],
  openGraph: {
    title: "Canada Work Visa 2026 | Free Visa & Ticket | Apply Now",
    description:
      "Apply for Canada Work Visa with FREE visa and ticket charges. No age limit, no degree, no IELTS. High-paying jobs available. Contact us today!",
    type: "website",
    locale: "en_US",
    url: "https://www.sukhchainsing.com",
    siteName: "Canada Visa Apply",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Canada Work Visa - Apply Now",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada Work Visa 2026 | Free Visa & Ticket | Apply Now",
    description:
      "Apply for Canada Work Visa with FREE visa and ticket charges. No age limit, no degree, no IELTS.",
    images: ["/banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.sukhchainsing.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Ads Global Site Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17043254930"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17043254930');
          `}
        </Script>
        {/* Google Ads Conversion Tracking - fires on WhatsApp click */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank');
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17043254930/CONVERSION_LABEL',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} antialiased font-sans overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
