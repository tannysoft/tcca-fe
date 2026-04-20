import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getBootstrap, mergeCms } from "@/lib/cms";
import { fbBootstrap } from "@/lib/cms-fallback";

// DB Heavent is loaded via plain @font-face in globals.css — not next/font —
// because next/font's auto-generated metric overrides (ascent/descent) shift
// Thai tone marks and upper vowels away from their base letters. Using native
// font metrics via a plain @font-face keeps the diacritics anchored correctly.

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plexThai = IBM_Plex_Sans_Thai_Looped({
  variable: "--font-plex-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tcca.or.th"),
  title: {
    default: "TCCA · Thailand Content Creator Associaton",
    template: "%s · TCCA",
  },
  description:
    "สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทย (Thailand Content Creator Associaton) — บ้านของคอนเทนต์ครีเอเตอร์ อินฟลูเอนเซอร์ และนักขายออนไลน์ไทย ที่ยกระดับมาตรฐานวิชาชีพให้เติบโตอย่างยั่งยืน",
  keywords: [
    "TCCA",
    "Thailand Content Creator",
    "สมาคมคอนเทนต์ครีเอเตอร์",
    "Creator Economy Thailand",
    "Influencer Thailand",
  ],
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://tcca.or.th",
    siteName: "TCCA",
    title: "TCCA · สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทย",
    description:
      "บ้านของคอนเทนต์ครีเอเตอร์ อินฟลูเอนเซอร์ และนักขายออนไลน์ไทย",
    images: ["/img/logo.svg"],
  },
  icons: {
    icon: [
      { url: "/img/logo-no-text.svg", type: "image/svg+xml" },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bootstrap = mergeCms(await getBootstrap(), fbBootstrap);
  const nav = bootstrap.navigation;
  const footer = bootstrap.footer;

  return (
    <html
      lang="th"
      className={`${jakarta.variable} ${plexThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy-700 selection:bg-orange-tcca selection:text-white">
        <Navbar nav={nav} />
        <main className="flex-1">{children}</main>
        <Footer identity={bootstrap.identity} footer={footer} />
      </body>
    </html>
  );
}
