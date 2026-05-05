import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CNNO',
  description: 'Best Cinnamon Rolls in Kuching',
  icons: { icon: "https://lh3.googleusercontent.com/d/1uBTvxQ692ep-epoK8ibErixg_AqhSSzK" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
