import Link from 'next/link';
import styles from './Header.module.scss';
import Navigation from '../../Navigation/Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="#" className={styles.header__logo}></Link>
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
