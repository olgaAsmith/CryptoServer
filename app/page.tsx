import Advantages from './components/Main/Advantages/Advantages';
import Presentaion from './components/Main/Presentation/Presentation';
import { advantages } from './consts/advantages';
import { dealings } from './consts/dealings';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentaion></Presentaion>
      <Advantages title="Преимущества использования crypto sever" items={advantages} isAdvantage={true}></Advantages>
      <Advantages title="оформление сделки crypto sever" items={dealings} isAdvantage={false}></Advantages>
    </main>
  );
}
