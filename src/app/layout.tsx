import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/styles/site-core.css";
import { SITE_ORIGIN } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: "#07090d"
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "EVERWILD · Running Club",
    template: "%s · EVERWILD"
  },
  icons: {
    icon: "/assets/images/logo/favicon.png",
    apple: "/assets/images/logo/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
