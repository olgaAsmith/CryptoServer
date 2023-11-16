'use client';

import styles from './Selector.module.scss';
import { useState, MouseEvent } from 'react';

const Selector = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Продаю (RUB/USDT)');

  const clickOnSelect = () => {
    setToggleOpen(!toggleOpen);
  };

  const clickOnSelectItem = (e: MouseEvent<HTMLElement>) => {
    const prevValue = selectedValue;
    const nextValue = (e.target as HTMLInputElement).textContent || '';
    setToggleOpen(false);
    setSelectedValue(nextValue);
    (e.target as HTMLInputElement).textContent = prevValue;
  };

  return (
    <div className={`${styles.select} ${toggleOpen ? styles.select_active : ''} button`}>
      <div onClick={clickOnSelect} className={`${styles.select__header}`}>
        <span className={styles.select__current}>{selectedValue}</span>
        <div className={styles.select__icon}></div>
      </div>
      <div className={`${styles.select__body} ${toggleOpen ? styles.select__body_active : ''}`}>
        <div onClick={clickOnSelectItem} className={`${styles.select__item} button`}>
          Покупаю (USDT/RUB)
        </div>
        <div onClick={clickOnSelectItem} className={`${styles.select__item} button`}>
          Продаю (USDT/RUB)
        </div>
        <div onClick={clickOnSelectItem} className={`${styles.select__item} button`}>
          Покупаю (RUB/USDT)
        </div>
      </div>
    </div>
  );
};

export default Selector;
