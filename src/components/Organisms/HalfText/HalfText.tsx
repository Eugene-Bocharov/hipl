import React from 'react';
import styles from './HalfText.module.scss';

interface HalfTextProps {
  title: string;
  description: string;
}

export const HalfText: React.FC<HalfTextProps> = ({
  title,
  description,
}: HalfTextProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.description}>{description}</h3>
    </div>
  );
};
