import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
        <div className="flex flex-col min-h-screen">
          <header className="bg-secondary-color text-accent-color p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-xl font-bold">RLappy</div>
              <nav>
                <ul className="flex space-x-4">
                  <li><a href="/" className="hover:text-primary-color">Home</a></li>
                  <li><a href="/catalog" className="hover:text-primary-color">Catalog</a></li>
                  <li><a href="/about" className="hover:text-primary-color">About Us</a></li>
                  <li><a href="/contact" className="hover:text-primary-color">Contact Us</a></li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="flex-grow container mx-auto py-8">
            {children}
          </main>
          <footer className="bg-secondary-color text-accent-color p-4">
            <div className="container mx-auto text-center">
              <p>© 2024 Blockchain Band. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
