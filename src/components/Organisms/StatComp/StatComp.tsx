import React, { useState, useEffect, useRef } from 'react';
import styles from './StatComp.module.scss';

export function StatComp() {
  const [isAnimated, setIsAnimated] = useState(false);
  const statsRef = useRef(null);

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
      { threshold: 0.5 } // Trigger animation when 50% of the stats are visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div className={styles.container} ref={statsRef}>
        <div className={`${styles.stat} ${isAnimated ? styles.animated : ''}`}>
          <span className={styles.value}>600+</span>
          <span className={styles.label}>Completed projects</span>
        </div>
        <div className={`${styles.stat} ${isAnimated ? styles.animated : ''}`}>
          <span className={styles.value}>13+</span>
          <span className={styles.label}>Years in business</span>
        </div>
        <div className={`${styles.stat} ${isAnimated ? styles.animated : ''}`}>
          <span className={styles.value}>97%</span>
          <span className={styles.label}>Client Statisfaction Rate</span>
        </div>
        <div className={`${styles.stat} ${isAnimated ? styles.animated : ''}`}>
          <span className={styles.value}>97%</span>
          <span className={styles.label}>Client Statisfaction Rate</span>
        </div>
      </div>
      <div
        className={`${styles.dividerline} ${isAnimated ? styles.animated : ''}`}
      ></div>
    </>
  );
}
