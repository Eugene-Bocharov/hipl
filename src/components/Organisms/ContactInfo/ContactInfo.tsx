import React, { useState, useEffect, useRef } from 'react';
import styles from './ContactInfo.module.scss';

interface ContactInfoProps {
  title: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  title,
}: ContactInfoProps) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const contactInfoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
            observer.disconnect(); // Disconnect observer after animation starts
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the component is visible
    );

    if (contactInfoRef.current) {
      observer.observe(contactInfoRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div
      ref={contactInfoRef}
      className={`${styles.container} ${isAnimated ? styles.animated : ''}`}
    >
      <h2 className={`${styles.title} ${isAnimated ? styles.animated : ''}`}>
        {title}
      </h2>
      <div className={styles.collumnDiv}>
        <div
          className={`${styles.collumn} ${isAnimated ? styles.animated : ''}`}
        >
          <p
            className={`${styles.subTitle} ${isAnimated ? styles.animated : ''}`}
          >
            Contact
          </p>
          <a
            className={`${styles.link} ${isAnimated ? styles.animated : ''}`}
            href="#"
          >
            +1 (438) 336 6420
          </a>
          <a
            className={`${styles.link} ${isAnimated ? styles.animated : ''}`}
            href="#"
          >
            4003498@gmail.com
          </a>
        </div>
        <div
          className={`${styles.collumn} ${isAnimated ? styles.animated : ''}`}
        >
          <p
            className={`${styles.subTitle} ${isAnimated ? styles.animated : ''}`}
          >
            Social Media
          </p>
          <a
            className={`${styles.link} ${isAnimated ? styles.animated : ''}`}
            href="#"
          >
            Instagram
          </a>
          <a
            className={`${styles.link} ${isAnimated ? styles.animated : ''}`}
            href="#"
          >
            Facebook
          </a>
          <a
            className={`${styles.link} ${isAnimated ? styles.animated : ''}`}
            href="#"
          >
            X
          </a>
          <a
            className={`${styles.link} ${isAnimated ? styles.animated : ''}`}
            href="#"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
