import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './FullPhoto.module.scss';
import { TypeAnimation } from 'react-type-animation';

export const FullPhoto = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgBox}>
          <h1 className={styles.title}>Here we go</h1>
        </div>
      </div>
    </>
  );
};
