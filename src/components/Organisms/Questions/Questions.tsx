import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './Questions.module.scss';
import { TypeAnimation } from 'react-type-animation';

export const Questions = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
      </div>
    </>
  );
};
