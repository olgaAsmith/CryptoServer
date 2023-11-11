import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
        <Link href="/" className={`${styles.nav__link} ${styles.nav__sighin} link button button_blue`}>Вход</Link>
        <Link href="/" className={`${styles.nav__link} ${styles.nav__reg} link button`}>Регистрация</Link>
    </nav>
  )
};

export default Navigation;
