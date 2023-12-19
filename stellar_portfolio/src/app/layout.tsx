import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Stars } from '@/components/stars';

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
        {children}
      </body>
    </html>
  );
}
