import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://foxdog1011.github.io/stock-ledger-showcase/"),
  title: "Stock Ledger — Production Engineering Case Study",
  description:
    "How Eason Lin built, operated, audited, and hardened a production Taiwan-equity decision system.",
  openGraph: {
    title: "Stock Ledger — Production Engineering Case Study",
    description:
      "A private decision workspace, a public research pipeline, and the engineering decisions that keep them trustworthy.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07090d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
