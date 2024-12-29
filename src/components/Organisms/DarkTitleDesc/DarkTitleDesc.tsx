import React from 'react';
import styles from './DarkTitleDesk.module.scss';

interface DarkTitleDeskProps {
  title: string;
  description: string;
  link: string;
}

export function DarkTitleDesk({
  title,
  description,
  link,
}: DarkTitleDeskProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.description}>{description}</h3>
      {/* <a href={link} className={styles.seeButton}>
        See more
      </a> */}
    </div>
  );
}
