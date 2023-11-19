import styles from './InfoBlock.module.scss';

const InfoBlock = () => {
  return (
    <section className={styles.info}>
      <div className={styles.info__card}>
        <p className={styles.info__name}>Ваш баланс USDT</p>
        <p className={styles.info__value}>123567.18</p>
      </div>
      <div className={styles.info__card}>
        <p className={styles.info__name}>Ваш баланс TRC</p>
        <p className={styles.info__value}>34.67</p>
      </div>
      <div className={`${styles.info__card} ${styles.info__name_course}`}>
        <p className={`${styles.info__name}`}>Актуальный курс</p>
        <ul className={styles.info__list}>
          <li className={styles.info__course}>1 BTC = 1 820 530,80 </li>
          <li className={styles.info__course}>1 USDT = 61,92 </li>
          <li className={styles.info__course}>1 USDC = 62,04 </li>
          <li className={styles.info__course}>1 ETH = 122 590,20 </li>
        </ul>
        <button className={styles.info__value}>Обновить</button>
      </div>
      <div className={`${styles.info__card} ${styles.info__name_wallet}`}>
        <p className={styles.info__name}>Ваш кошелёк</p>
        <p className={`${styles.value} ${styles.info__walletcode}`}>
          1GkQdmiGfiUPGwqDhSgoEkPCcutkLpmbMz
        </p>
        <button className={styles.info__value}>Скопировать</button>
      </div>
    </section>
  );
};

export default InfoBlock;
