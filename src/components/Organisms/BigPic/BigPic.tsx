import React, { useState, useEffect, useRef } from 'react';
import styles from './BigPic.module.scss';
import video from '../../../static/video.mp4';
import video2 from '../../../static/video2.mp4';
import video3 from '../../../static/video3.mp4';
const videos = [video, video2, video3];

interface PicDescProps {
  title: string;
  video: number;
  link: string; // Optional link prop
}

export function BigPic(props: PicDescProps) {
  // Use props for function arguments
  const [showScrollBtn, setShowScrollBtn] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false); // Track animation state
  const containerRef = useRef<HTMLDivElement>(null);

  // Access video element outside the template literal to avoid indexing issues
  const currentVideo = videos[props.video - 1];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollBtn(scrollPosition <= 500);

      const rect = containerRef.current?.getBoundingClientRect();
      if (rect && rect.top <= window.innerHeight && !hasAnimated) {
        setHasAnimated(true); // Trigger animation only once
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]); // Add hasAnimated to dependency array

  return (
    <div className={styles.container} ref={containerRef}>
      <a href={props.link}>
        <div className={styles.videoContainer}>
          <video autoPlay loop muted className={styles.video}>
            <source src={currentVideo} type="video/mp4" />
          </video>

          <div className={styles.contentContainer}>
            <div className={styles.contentTextBox}>
              <h1
                className={`${styles.title} ${hasAnimated ? styles.visibleTitle : ''}`}
              >
                {props.title}
              </h1>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
