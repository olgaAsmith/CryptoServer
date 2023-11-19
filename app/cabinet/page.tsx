import { montserrat } from '@/public/fonts/fonts';
import InfoBlock from '../components/Cabinet/InfoBlock/InfoBlock';
import styles from './page.module.scss';

const Cabinet = () => {
  return (
    <main style={montserrat.style} className={styles.main}>
      <InfoBlock></InfoBlock>
    </main>
  );
};

export default Cabinet;
