import React from 'react';
import styles from './DTListItem.module.scss';

interface DTListItemProps {
  title: string;
  desc: string;
  link: string;
  isButton?: boolean; // Add isButton prop
  price?: string;
}

export const DTListItem = ({
  title,
  desc,
  link,
  isButton = true,
  price,
}: DTListItemProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.dividerBox}>
          <p className={styles.title}>{title}</p>
          {price && <p className={styles.price}>From {price}$</p>}
          {isButton && ( // Conditionally render the button
            <a href={link} className={styles.seeButton}>
              See More
            </a>
          )}
        </div>
        <p className={styles.description}>{desc}</p>
      </div>
    </>
  );
};
