import React from 'react';
import classNames from 'classnames';
import styles from './RewiewComp.module.scss';

interface RewiewComp {
  title: string;
  description: string;
  position: string;
  pic: string;
  link?: string; // Optional link prop
  author: string; // Optional author
}

export function RewiewComp({
  title,
  description,
  position,
  pic,
  author,
}: RewiewComp) {
  return (
    <div
      className={classNames(styles.container, {
        [styles.reversed]: position === 'reversed',
      })}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.description}>{description}</h3>
        <h3 className={styles.author}>{author}</h3>
      </div>

      <img src={pic} alt={title} />
    </div>
  );
}
