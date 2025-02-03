import React, { useState, useEffect, useRef } from 'react';
import styles from './StatComp.module.scss';

interface Stat {
  value: string;
  label: string;
}

interface StatCompProps {
  stats: Stat[];
  isMarginTop?: boolean; // Optional prop for top margin
}

export function StatComp({ stats, isMarginTop = false }: StatCompProps) {
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
      <div
        className={`${styles.container} ${isMarginTop ? styles.marginTop : ''}`}
        ref={statsRef}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${styles.stat} ${isAnimated ? styles.animated : ''}`}
          >
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
      <div
        className={`${styles.dividerline} ${isAnimated ? styles.animated : ''}`}
      ></div>
    </>
  );
}
