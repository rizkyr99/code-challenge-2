import type { Metadata } from 'next';
import { DM_Sans, Roboto_Serif } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  variable: '--font-roboto-serif',
});

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
      <body
        className={`${dmSans.className} ${robotoSerif.variable} w-screen overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
