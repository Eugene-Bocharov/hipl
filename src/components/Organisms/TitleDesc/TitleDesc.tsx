import React from 'react';
import styles from './TitleDesc.module.scss';

interface TitleDescProps {
  title: string;
  description: string;
}

export function TitleDesc({ title, description }: TitleDescProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.description}>{description}</h3>
      {/* <div className={styles.divider}></div> */}
    </div>
  );
}
