
import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";


const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "My Website",
  description: "Next.js site using Lexend font with black background",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
