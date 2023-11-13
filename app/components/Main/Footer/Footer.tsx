import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copy}>&copy; 2023 Crypto-Sever - обменник электронных валют</p>
    </footer>
  );
};

export default Footer;
