'use client'
import Link from 'next/link';
import styles from './Header.module.scss';
import Navigation from '../../Navigation/Navigation';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className={`${pathname === '/cabinet' ? styles.header_cabinet : styles.header }`}>
      <Link href="#" className={styles.header__logo}></Link>
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
