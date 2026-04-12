import type { Viewport } from "next";

import "./globals.css";

export const metadata = {
  title: "StanfordPlace",
  description: "A Stanford-only collaborative canvas."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
