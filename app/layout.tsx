import "@/src/assets/globals.css";

import { Urbanist } from "next/font/google";
import LocalFont from "next/font/local";
import { Particles } from "@/src/components/Particles";

export const metadata = {
  title: "Luciano Bicaku",
  description:
    "Full Stack Developer, Blockchain Enthusiast, BigCommerce Certified Developer",
  openGraph: {
    title: "Luciano Bicaku",
    description:
      "Full Stack Developer, Blockchain Enthusiast, BigCommerce Certified Developer",
    url: "https://shotmeow.dev",
    siteName: "Luciano Bicaku",
    images: [
      {
        url: "/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.svg",
  },
};

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={
        [urbanist.variable, calSans.variable].join(" ") + "scroll-smooth"
      }
    >
      <body>
        <div id="root">
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in hidden sm:block"
            quantity={100}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
