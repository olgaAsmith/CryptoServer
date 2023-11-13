import { FC } from 'react';
import ListItem from '../ListItem/Listtem';
import styles from './Advantages.module.scss';
import { localBebas } from '@/public/fonts/fonts';

interface Items {
  subtitle: string,
  text: string,
  image: string,
}

interface Advantages {
  title: string;
  items: Items[];
  isAdvantage: boolean
}


const Advantages:FC<Advantages> = (props) => {
  return (
    <section className={styles.advantages}>
      <h2 style={localBebas.style} className={styles.advantages__title}>{props.title}</h2>
      <ul className={styles.advantages__list}>
        {props.items.map((item)=>{
          return (
            <ListItem subtitle={item.subtitle} text={item.text} image={item.image} isAdvantage={props.isAdvantage}></ListItem> 
          )
        })}
      </ul>
    </section>
  );
};
export default Advantages;
