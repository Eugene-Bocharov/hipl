import React from 'react';
import styles from './ContactInfo.module.scss';

interface ContactInfoProps {
  title: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  title,
}: ContactInfoProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.collumnDiv}>
        <div className={styles.collumn}>
          <p className={styles.subTitle}>Contact</p>
          <a className={styles.link} href="#">
            403-918-6333
          </a>
          <a className={styles.link} href="#">
            info@projectandesign.ca
          </a>
        </div>
        <div className={styles.collumn}>
          <p className={styles.subTitle}>Social Media</p>
          <a
            className={styles.link}
            href="https://www.instagram.com/projectandesign/profilecard/?igsh=dWRlaHhqNDl6Zmt2"
          >
            Instagram
          </a>
          <a
            className={styles.link}
            href="https://www.facebook.com/profile.php?id=61553015094076"
          >
            Facebook
          </a>
          <a className={styles.link} href="#">
            X
          </a>
          <a className={styles.link} href="#">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
