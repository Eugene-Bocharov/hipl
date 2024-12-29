import React from 'react';
import styles from './InfoCard.module.scss';
import classNames from 'classnames';

interface InfoCardProps {
  title: string;
  description: string;
  color: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  color,
}) => {
  return (
    <div className={classNames(styles.container, styles[color])}>
      <div className={styles.buttonBox}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.boxDivider}>
          <a href="/projects" className={styles.seeButton}>
            See more
          </a>
          <a href="/contact" className={styles.contactButton}>
            Contact Us
          </a>
        </div>
      </div>
      <h3 className={styles.description}>{description}</h3>
    </div>
  );
};
