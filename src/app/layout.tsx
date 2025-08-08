import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";


export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'], //800 extra bold, 700 bold, 400 regular
  variable: '--font-inter',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Elizabeth Pretto-Sotelo",
  description: "Elizabeth Pretto-Sotelo is an aspiring UI/UX designer and front-end developer studying Computer Science at the University of Central Florida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
