import React from 'react';
import styles from './Partners.module.scss';

interface PartnersProps {
  title: string;
  pic?: string[]; // Make images optional
}

export const Partners: React.FC<PartnersProps> = ({ title, pic = [] }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {pic.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Partner ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
};
