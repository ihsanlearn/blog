import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iihn.fun"),
  title: {
    default: "MyKisahGua | Cybersecurity Research & Writeups",
    template: "%s | MyKisahGua"
  },
  description:
    "Cybersecurity Research & Writeups - Ihsan Restu Adi. Ethical Hacking, Bug Bounty Hunting, and Secure Development.",
  keywords: [
    "Ihsan Restu Adi",
    "Cyber Security",
    "Ethical Hacker",
    "Bug Bounty",
    "Portfolio",
    "Developer",
    "Writeups",
    "Blog",
    "Research"
  ],
  authors: [{ name: "Ihsan" }],
  creator: "Ihsan",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.iihn.fun",
    title: "MyKisahGue | Cybersecurity Research",
    description: "In-depth technical writeups and security research findings.",
    siteName: "MyKisahGue",
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://blog.iihn.fun"
  },
  twitter: {
    card: "summary_large_image",
    title: "MyKisahGue | Cybersecurity Research",
    description: "In-depth technical writeups and security research findings.",
    creator: "@iihsann",
    images: "https://blog.iihn.fun/opengraph-image.jpg",
  },
  verification: {
    google: "UPKAQQYkH1hUNYYGd4YFZZtGdEMAcvbLp1lRCa_htqQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.iihn.fun/#about",
                  "name": "Ihsan Restu Adi",
                  "alternateName": "Ihsan",
                  "description": "Cyber Security Enthusiast, Ethical Hacker, Bug Bounty Hunter, Undergraduate Computer Science Student, and Developer.",
                  "url": "https://blog.iihn.fun",
                  "image": "https://www.iihn.fun/opengraph-image.jpg",
                  "sameAs": [
                    "https://github.com/ihsanlearn",
                    "https://www.linkedin.com/in/ihsanrestuadi/",
                    "https://x.com/Ihsan0958761111"
                  ],
                  "jobTitle": "Cyber Security Enthusiast",
                  "affiliation": {
                    "@type": "CollegeOrUniversity",
                    "name": "Universitas Sebelas Maret",
                    "description": "Undergraduate Informatics Student"
                  },
                  "knowsAbout": [
                    "Web Application Penetration Testing",
                    "Vulnerability Assessment",
                    "Exploit Research",
                    "Bug Bounty Hunting",
                    "Next.js",
                    "TypeScript",
                    "Python",
                    "Go (Golang)",
                    "Docker",
                    "Linux System Administration",
                    "Burp Suite"
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.iihn.fun/#hero",
                  "name": "MyKisahGue",
                  "url": "https://www.iihn.fun",
                  "logo": "https://www.iihn.fun/opengraph-image.jpg",
                  "founder": { "@id": "https://www.iihn.fun/#about" },
                  "foundingDate": "2024",
                  "description": "Cybersecurity research platform and portfolio.",
                  "sameAs": [
                    "https://github.com/ihsanlearn",
                    "https://x.com/Ihsan0958761111"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.iihn.fun/#hero",
                  "url": "https://www.iihn.fun",
                  "name": "MyKisahGue | Cybersecurity Research",
                  "description":
                    "Portfolio and research website of Ihsan Restu Adi, Cyber Security Enthusiast and Developer.",
                  "publisher": {
                    "@id": "https://www.iihn.fun/#hero"
                  },
                  "inLanguage": "en-US"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased bg-background text-foreground font-body`}
      >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
      </body>
    </html>
  );
}
