import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.midContainer}>
          <div className={styles.titleBox}>
            <div className={styles.logoImgBox}>
              <div className={styles.logoImg}></div>
            </div>
          </div>
          <div className={styles.dividerBox}>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Pages</p>

              <a className={styles.link} href="/">
                Home
              </a>
              <a className={styles.link} href="/portfolio">
                Portfolio
              </a>
              <a className={styles.link} href="/contact">
                Contact
              </a>
            </div>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Social Media</p>
              <a
                className={styles.link}
                href="https://www.instagram.com/kaza_health_beauty/"
              >
                Instagram
              </a>
              <a
                className={styles.link}
                href="https://www.facebook.com/profile.php?id=61567144888475"
              >
                Facebook
              </a>
              <a className={styles.link} href="https://x.com/KhealthNbeauty">
                X
              </a>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/kaza-health-n-beauty-04739933a/"
              >
                LinkedIn
              </a>
            </div>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Contact</p>
              <a className={styles.link} href="#">
                +1 (438) 336 6420
              </a>
              <a className={styles.link} href="#">
                4003498@gmail.com
              </a>
              <a className={styles.link} href="/contact#form">
                Write us
              </a>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.midContainer}>
          <p className={styles.rightT}>
            Copyright © 2025 HIPL - All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};
