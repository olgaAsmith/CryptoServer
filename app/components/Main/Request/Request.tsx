import Link from 'next/link';
import styles from './Request.module.scss';
import { localBebas } from '@/public/fonts/fonts';
import Selector from '../Selector/Selector';

const Request = () => {
  return (
    <section className={styles.request}>
      <form className={styles.request__form}>
        <Selector></Selector>
        <input type="text" placeholder="Колличество" className={`${styles.request__input} button`}></input>
        <input type="text" placeholder="Телефон" className={`${styles.request__input} button`}></input>
        <input type="text" placeholder="Телеграм" className={`${styles.request__input} button`}></input>
        <button type="submit" style={localBebas.style} className={`${styles.request__submit} button button_blue link`}>Отправить заявку</button>
      </form>
      <div className={styles.request__br}></div>
      <div className={styles.request__info}>
        <h2 style={localBebas.style} className={styles.request__title}>отправить заявку на покупку/продажу usdt</h2>
        <p className={styles.request__text}>
          Оставьте заявку на покупку/продажу/обмен USDT и менеджер свяжется с вами для согласования
          перевода
        </p>
        <p className={styles.request__text}>
          Либо зарегистрируйтесь в личном кабинете и совершите перевод USDT в режиме онлайн
        </p>
        <Link href="/" style={localBebas.style} className={`${styles.request__reg} button link`}>Регистрация</Link>
      </div>
    </section>
  );
};

export default Request;
