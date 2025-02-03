import React, { useState, useEffect, useRef } from 'react';
import styles from './TextTItle.module.scss';

// Define HeaderLinkProps interface
interface TextTitleProps {
  text: string;
  noDivider?: boolean; // Optional prop for divider
}

// Define HeaderLink component
export const TextTitle: React.FC<TextTitleProps> = ({
  text,
  noDivider = false,
}) => {
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
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div ref={statsRef} className={styles.container}>
      <h2 className={`${styles.title} ${isAnimated ? styles.animated : ''}`}>
        {text}
      </h2>
      {!noDivider && (
        <div
          className={`${styles.dividerline} ${isAnimated ? styles.animated : ''}`}
        ></div>
      )}
    </div>
  );
};
