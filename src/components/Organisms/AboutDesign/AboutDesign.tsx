import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './AboutDesign.module.scss';

export const AboutDesign = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgBox}></div>
        <div className={styles.divider}>
          <h2 className={styles.title}>Here we go</h2>
          <h3 className={styles.subTitle}>
            His surreal photo style is juxtaposed by his simple, flat, empty,
            and minimalistic portfolio design that places all of the focus on
            the work itself. His unique series navigation, coupled with
            art-gallery-inspired introductions and perfect scrolling
            interactions, yield an experience reminiscent of that of a real
            gallery art-gallery-inspired introductions and perfect scrolling
            interactions, yield an experience reminiscent of that of a real
            gallery
          </h3>
        </div>
      </div>
    </>
  );
};
