import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vie Beauty Salon — Kuwait",
  description:
    "A chic and modern beauty destination in Shaab, Hawalli, Kuwait. Expert hair, makeup, facials, nails & more. Open daily 10am–8pm. Book: +965 9901 2207.",
  keywords: [
    "Vie Beauty Salon",
    "salon Kuwait",
    "beauty salon Hawalli",
    "hair salon Kuwait",
    "makeup Kuwait",
    "nail salon Kuwait",
    "Shaab salon",
  ],
  openGraph: {
    title: "Vie Beauty Salon — Kuwait",
    description:
      "Expert beauty services in the heart of Shaab, Hawalli. Hair · Makeup · Facials · Nails · Waxing.",
    url: "https://viebeauty.kw",
    siteName: "Vie Beauty Salon",
    locale: "en_KW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vie Beauty Salon — Kuwait",
    description: "Chic & modern beauty salon in Shaab, Kuwait. Open daily 10am–8pm.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
