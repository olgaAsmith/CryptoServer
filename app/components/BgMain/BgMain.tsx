'use client';
import { usePathname } from 'next/navigation';
import styles from './BgMain.module.scss';

const BgMain = () => {
  const pathname = usePathname();
  return pathname === '/cabinet' ? '' : <div className={styles.bg}></div>;
};

export default BgMain;
