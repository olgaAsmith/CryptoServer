'use client';
import Link from 'next/link';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={`${pathname === '/cabinet' ? styles.header_cabinet : styles.header}`}>
      <div className={styles.header__container}>
        <Link href="#" className={styles.header__logo}></Link>
        <Navigation></Navigation>
      </div>
    </header>
  );
};

export default Header;
