import Link from 'next/link';
import styles from './Navigation.module.scss';
import { localBebas } from '@/public/fonts/fonts';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
        <Link href="/" style={localBebas.style} className={`${styles.nav__link} ${styles.nav__sighin} link button button_blue`}>Вход</Link>
        <Link href="/" style={localBebas.style} className={`${styles.nav__link} ${styles.nav__reg} link button`}>Регистрация</Link>
    </nav>
  )
};

export default Navigation;
