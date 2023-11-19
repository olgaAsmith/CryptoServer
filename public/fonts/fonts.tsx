import { Open_Sans, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700']
});

export const localBebas = localFont({ src: './Bebas.ttf' });

export const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600']
});
