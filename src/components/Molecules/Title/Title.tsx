import React, { useState, useEffect, useRef } from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  title: string;
  link?: string; // Optional link
}

export const Title: React.FC<TitleProps> = ({ title, link }: TitleProps) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const titleRef = useRef(null);

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
      { threshold: 0.5 } // Trigger animation when 50% of the title is visible
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <h2
        className={`${styles.title} ${isAnimated ? styles.animated : ''}`}
        ref={titleRef}
      >
        {title}
      </h2>
      {link && (
        <a
          href={link}
          className={`${styles.seeButton} ${isAnimated ? styles.animated : ''}`}
        >
          Contact Us
        </a>
      )}
    </div>
  );
};
