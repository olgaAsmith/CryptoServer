import type { Metadata } from 'next';
import { openSans } from '@/public/fonts/fonts';
import './globals.scss';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BgMain from './components/BgMain/BgMain';

export const metadata: Metadata = {
  title: 'Crypto Sever',
  description: 'Crypto Server web app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="app__main">
          <BgMain></BgMain>
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
