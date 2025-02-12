import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LaptopIcon from '@mui/icons-material/Laptop';
import { createTheme } from '@mui/material/styles';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#00b894',
    },
    secondary: {
      main: '#2d3436',
    },
  },
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
        <ThemeProvider theme={theme}>
          <div className="flex flex-col min-h-screen">
            <AppBar position="sticky" color="default" elevation={1}>
              <Toolbar className="container mx-auto">
                <div className="flex items-center gap-2">
                  <LaptopIcon color="primary" />
                  <span className="text-xl font-bold">RLappy</span>
                </div>
                <nav className="ml-auto flex gap-4">
                  <Button color="inherit" href="/">Home</Button>
                  <Button color="inherit" href="/catalog">Catalog</Button>
                  <Button color="inherit" href="/about">About</Button>
                  <Button color="inherit" href="/contact">Contact</Button>
                  <Button variant="contained" color="primary" href="/login">
                    Login 👤
                  </Button>
                </nav>
              </Toolbar>
            </AppBar>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
