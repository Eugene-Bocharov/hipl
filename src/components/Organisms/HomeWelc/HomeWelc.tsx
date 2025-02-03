import React, { useState, useEffect, useRef } from 'react';
import styles from './HomeWelc.module.scss';
import video from '../../../static/video.mp4';

export function HomeWelc() {
  const [showScrollBtn, setShowScrollBtn] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

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
      { threshold: 0.5 } // Trigger animation when 50% of the element is visible
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (subtitleRef.current) {
      observer.observe(subtitleRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollBtn(scrollPosition <= 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>

        <div className={styles.contentContainer}>
          <div className={styles.contentTextBox}>
            <h1
              className={`${styles.title} ${isAnimated ? styles.animated : ''} ${styles.interfInfoTitle}`}
              ref={titleRef}
            >
              Web Development Agency
            </h1>
            <h3
              className={`${styles.subtitle} ${isAnimated ? styles.animated : ''} ${styles.interfInfoSubtitle}`}
              ref={subtitleRef}
            >
              By Yevhenii Bocharov
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
