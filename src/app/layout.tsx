import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";


const neoSans = localFont({
  src: '../../public/fonts/NeoSansArabic.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={neoSans.className}
      >
        {children}
      </body>
    </html>
  );
}
