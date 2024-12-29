import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './AboutUs.module.scss';
import { TypeAnimation } from 'react-type-animation';

export const AboutUs = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <h3 className={styles.subTitle}>
          His surreal photo style is juxtaposed by his simple, flat, empty, and
          minimalistic portfolio design that places all of the focus on the work
          itself. His unique series navigation, coupled with
          art-gallery-inspired introductions and perfect scrolling interactions,
          yield an experience reminiscent of that of a real gallery
        </h3>
        <div className={styles.divider}></div>
      </div>
    </>
  );
};
