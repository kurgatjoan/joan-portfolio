import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joan Kurgat | Data, AI & Software",
  description:
    "Portfolio of Joan Kurgat — Software Engineer working across Data Analytics, Business Intelligence and Artificial Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}