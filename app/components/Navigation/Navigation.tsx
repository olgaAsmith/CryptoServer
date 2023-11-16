'use client';

import Link from 'next/link';
import styles from './Navigation.module.scss';
import { localBebas } from '@/public/fonts/fonts';
import { useState } from 'react';

const Navigation = () => {
  //* menu toggle burger
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const clickOnBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  //*close after click on nav link
  const handleClickMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  return (
    <nav className={styles.menu}>
      <div
        className={`${isBurgerMenuOpen ? styles.burger_active : styles.burger}`}
        onClick={clickOnBurgerMenu}
      ></div>
      <ul className={`${styles.nav} ${isBurgerMenuOpen ? styles.nav_active : ''}`}>
        <li>
          <Link
            href="/"
            style={localBebas.style}
            className={`${styles.nav__link} ${styles.nav__sighin} link button button_blue`}
            onClick={handleClickMenu}
          >
            Вход
          </Link>
        </li>
        <li>
          <Link
            href="/"
            style={localBebas.style}
            className={`${styles.nav__link} ${styles.nav__reg} link button`}
            onClick={handleClickMenu}
          >
            Регистрация
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
