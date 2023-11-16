import Link from 'next/link';
import styles from './Presentaion.module.scss';
import { localBebas } from '@/public/fonts/fonts';
const Presentaion = () => {
  return (
    <section className={styles.presentation}>
      <div className={styles.presentation__info}>
        <h1 style={localBebas.style} className={styles.presentation__title}>
          КУПИТЬ/ПРОДАТЬ USDT
        </h1>
        <p
          style={localBebas.style}
          className={`${styles.presentation__title} ${styles.presentation__minititle}`}
        >
          Быстро и Выгодно
        </p>
        <p className={styles.presentation__text}>Открытие USDT кошелька за 5 минут</p>
        <p className={styles.presentation__text}>Простой и понятный личный кабинет</p>
        <p className={styles.presentation__text}>Мгновенное пополнение </p>
        <div className={styles.presentation__buttons}>
          <Link href="/" style={localBebas.style} className={`link button button_blue`}>
            Открыть кошелек
          </Link>
          <Link href="/" style={localBebas.style} className={`link button`}>
            Отправить заявку
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Presentaion;
