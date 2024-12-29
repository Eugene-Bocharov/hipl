import React from 'react';
import styles from './DarkText.module.scss';
import { DTListItem } from '../../Molecules/DTListItem/DTListItem';

interface DarkTextProps {
  services: {
    title: string;
    desc: string;
    link: string;
    isButton?: boolean;
    price?: string;
  }[];
}

export const DarkText: React.FC<DarkTextProps> = ({ services }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>Our Services</h3>
        <div className={styles.listBox}>
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <DTListItem
                link={service.link}
                title={service.title}
                desc={service.desc}
                isButton={service.isButton}
                price={service.price}
              />
              {index < services.length - 1 && (
                <div className={styles.divider}></div>
              )}
            </React.Fragment>
          ))}
          <div className={styles.dividerTransperent}></div>
        </div>
      </div>
    </div>
  );
};
