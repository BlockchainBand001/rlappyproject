import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import NavBar from '@/components/layout/NavBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RLappy - Laptop Rental Services',
  description: 'Discover top-quality laptops for rent from leading brands.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.className}>
      <body className={geistMono.className}>
        <ThemeRegistry>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="bg-white shadow-md p-8">
              <div className="container mx-auto text-center">
                <p>© 2024-2025 Blockchain Band. All rights reserved.</p>
                <nav>
                  <ul className="flex justify-center space-x-4">
                    <li><a href="/" className="hover:text-primary-color">Home</a></li>
                    <li><a href="/catalog" className="hover:text-primary-color">Catalog</a></li>
                    <li><a href="/about" className="hover:text-primary-color">About Us</a></li>
                    <li><a href="/contact" className="hover:text-primary-color">Contact Us</a></li>
                  </ul>
                </nav>
              </div>
            </footer>
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
