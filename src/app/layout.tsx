import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  display: 'swap',
});

const spacerR = localFont({
  variable: '--font-spacer-r',
  src: '../../public/fonts/SPACERR-Regular.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mind the Machine',
  description: 'Telling the story of clever tools.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${spacerR.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
