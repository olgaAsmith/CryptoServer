import { FC } from 'react';
import styles from '../Advantages/Advantages.module.scss';
import { localBebas } from '@/public/fonts/fonts';

interface ListItem {
  subtitle: string;
  text: string;
  image: string;
  isAdvantage: boolean;
}

const ListItem: FC<ListItem> = (props) => {
  return (
    <li
      className={`${styles.advantages__item} ${
        props.isAdvantage ? styles.advantages__item_advantage : ''
      }`}
    >
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className={`${styles.advantages__image}`}
      ></div>
      <h3 style={localBebas.style} className={styles.advantages__subtitle}>
        {props.subtitle}
      </h3>
      <p className={styles.advantages__text}>{props.text}</p>
    </li>
  );
};
export default ListItem;
