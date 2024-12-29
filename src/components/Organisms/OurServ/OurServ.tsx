import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './OurServ.module.scss';
import { TypeAnimation } from 'react-type-animation';
import classNames from 'classnames';

export const OurServ = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.divider}>
          <a className={styles.picLink} href="/design">
            <div className={classNames(styles.picContainer, styles.pic1)}>
              <h4 className={styles.picTitle}>Design</h4>
            </div>
          </a>
          <a className={styles.picLink} href="#">
            <div className={classNames(styles.picContainer, styles.pic2)}>
              <h4 className={styles.picTitle}>Web Development</h4>
            </div>
          </a>
        </div>
        <div className={styles.divider}>
          <a className={styles.picLink} href="#">
            <div className={classNames(styles.picContainer, styles.pic3)}>
              <h4 className={styles.picTitle}>Mobile Development</h4>
            </div>
          </a>
          <a className={styles.picLink} href="#">
            <div className={classNames(styles.picContainer, styles.pic4)}>
              <h4 className={styles.picTitle}>Marketing</h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
