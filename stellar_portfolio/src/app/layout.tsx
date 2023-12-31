import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Stars } from '@/components/stars';
import { NavBar } from '@/components/navbar.component';
import { Footer } from '@/components/footer.component';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stellar Portfolio',
  description: 'A Stellar Portfolio for Explorers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Stars />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
