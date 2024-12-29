import React from 'react';
import classNames from 'classnames';
import styles from './PicDesc.module.scss';

interface PicDescProps {
  title: string;
  description: string;
  position: string;
  pic: string;
  link?: string; // Optional link prop
}

export function PicDesc({
  title,
  description,
  position,
  pic,
  link,
}: PicDescProps) {
  return (
    <div
      className={classNames(styles.container, {
        [styles.reversed]: position === 'reversed',
      })}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.description}>{description}</h3>

        {/* Render button only if link is provided */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            See Examples
          </a>
        )}
      </div>

      <img src={pic} alt={title} />
    </div>
  );
}
