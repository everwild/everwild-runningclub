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
    default: "ERC · EVERWILD Running Club · TOKYO",
    template: "%s"
  },
  icons: {
    icon: [
      {
        url: "/assets/images/logo/favicon.png",
        type: "image/png",
        sizes: "512x512"
      }
    ],
    shortcut: ["/assets/images/logo/favicon.png"],
    apple: [
      {
        url: "/assets/images/logo/favicon.png",
        sizes: "512x512"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const earlyHtmlAttrsScript = `
    (function () {
      try {
        var p = (window.location && window.location.pathname) || "/";
        var m = p.match(/^\\/(ja|en|zh)(?:\\/|$)/i);
        var lang = m ? m[1].toLowerCase() : "ja";
        document.documentElement.lang =
          lang === "zh" ? "zh-CN" : lang === "ja" ? "ja-JP" : "en";
        var platform = (navigator.platform || "");
        var ua = (navigator.userAgent || "");
        var isApple = /Mac|iPhone|iPad|iPod/i.test(platform) || /Macintosh|Mac OS X|iPhone|iPad|iPod/i.test(ua);
        if (isApple) {
          document.documentElement.dataset.platform = "apple";
        } else {
          delete document.documentElement.dataset.platform;
        }
      } catch (e) {}
    })();
  `;

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyHtmlAttrsScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
