import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RLappy - Laptop Rental Services",
  description: "Discover top-quality laptops for rent from leading brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <header className="header p-4 flex justify-between items-center">
            <div className="logo">RLappy</div>
            <nav>
              <a href="/">Home</a>
              <a href="/catalog">Catalog</a>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
            </nav>
          </header>
          <main className="main-content flex-grow">
            {children}
          </main>
          <footer className="footer p-4 flex justify-between items-center">
            <div>© Blockchain Band</div>
            <nav>
              <a href="/">Home</a>
              <a href="/catalog">Catalog</a>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
