import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './OurClients.module.scss';
import { TypeAnimation } from 'react-type-animation';

export const OurClients = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Clients</h1>
        <div className={styles.clientBox}></div>
      </div>
    </>
  );
};
