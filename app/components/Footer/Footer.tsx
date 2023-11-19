'use client';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.scss';

const Footer = () => {
  const pathname = usePathname();
  return pathname === '/cabinet' ? (
    ''
  ) : (
    <footer className={styles.footer}>
      <p className={styles.footer__copy}>&copy; 2023 Crypto-Sever - обменник электронных валют</p>
    </footer>
  );
};

export default Footer;
