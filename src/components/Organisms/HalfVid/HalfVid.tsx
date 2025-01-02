import React, { useState, useEffect, useRef } from 'react';
import styles from './HalfVid.module.scss';
import video from '../../../static/video.mp4';
import video2 from '../../../static/video2.mp4';
import video3 from '../../../static/video3.mp4';
const videos = [video, video2, video3];

interface HalfVidProps {
  title: string;
  description: string;
  vidTitle: string;
  video: number;
  link: string;
}

export function HalfVid(props: HalfVidProps) {
  const [showScrollBtn, setShowScrollBtn] = useState(true);
  const [hasTitleAnimated, setHasTitleAnimated] = useState(false);
  const [hasDescriptionAnimated, setHasDescriptionAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentVideo = videos[props.video - 1];

  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        if (rect.top <= window.innerHeight && !hasTitleAnimated) {
          setHasTitleAnimated(true);
        }
        if (rect.top + 200 <= window.innerHeight && !hasDescriptionAnimated) {
          setHasDescriptionAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTitleAnimated, hasDescriptionAnimated]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.dividerBox}>
        <a className={styles.link} href={props.link}>
          <div className={styles.videoContainer}>
            <video autoPlay loop muted className={styles.video}>
              <source src={currentVideo} type="video/mp4" />
            </video>
            <div className={styles.contentContainer}>
              <div className={styles.contentTextBox}>
                <h1
                  className={`${styles.vidTitle} ${
                    hasTitleAnimated ? styles.fadeIn : ''
                  }`}
                >
                  {props.vidTitle}
                </h1>
              </div>
            </div>
          </div>
        </a>
        <div className={styles.descriptionContainer}>
          <h1
            className={`${styles.title} ${
              hasTitleAnimated ? styles.slideIn : ''
            }`}
          >
            {props.title}
          </h1>
          <h3
            className={`${styles.description} ${
              hasDescriptionAnimated ? styles.slideIn : ''
            }`}
          >
            {props.description}
          </h3>
        </div>
      </div>
    </div>
  );
}
