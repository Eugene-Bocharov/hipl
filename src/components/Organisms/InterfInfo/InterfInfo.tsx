import React, { useState, useEffect, useRef } from 'react';
import styles from './InterfInfo.module.scss';

interface InterfInfoProps {
  title: string;
  description: string;
}

export function InterfInfo({ title, description }: InterfInfoProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has played
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (blockRef.current) {
        const rect = blockRef.current.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

        // Trigger animation only once when the element is in view
        if (isInView && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Set animation as completed
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]); // Re-run effect only when animation has not yet played

  return (
    <div className={styles.container}>
      <div
        ref={blockRef}
        className={`${styles.interfBlock} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.contentBox}>
          <h1
            className={`${styles.title} ${isVisible ? styles.visibleTitle : ''}`}
          >
            {title}
          </h1>
          <h3
            className={`${styles.description} ${isVisible ? styles.visibleDescription : ''}`}
          >
            {description}
          </h3>
          <div
            className={`${styles.dividerline} ${isVisible ? styles.visibleDivider : ''} ${hasAnimated ? styles.animatedOnce : ''}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
