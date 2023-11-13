import Advantages from './components/Main/Advantages/Advantages';
import Presentaion from './components/Main/Presentation/Presentation';
import Request from './components/Main/Request/Request';
import { advantages } from './consts/advantages';
import { advantTtitle, dealTitle } from './consts/consts';
import { dealings } from './consts/dealings';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentaion></Presentaion>
      <Advantages title={advantTtitle} items={advantages} isAdvantage={true}></Advantages>
      <Request></Request>
      <Advantages title={dealTitle} items={dealings} isAdvantage={false}></Advantages>
    </main>
  );
}
