import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "oneplace.hr",
  description: "oneplace.hr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/oneplaceIcon.svg" />
      </head>

      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
