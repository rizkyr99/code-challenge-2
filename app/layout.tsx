import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Canvix',
  description: 'Strategic creator and digital innovator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={dmSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
