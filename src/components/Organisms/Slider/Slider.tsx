import React, { useState, useEffect } from 'react';
import styles from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import Autoplay from 'swiper';

export const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3); // Default slidesPerView

  // Dummy data for slides
  const slides = [
    {
      title: 'Slide 1',
      description:
        'Thanks to Brand Vision’s work, the client’s site has reached second place in search engine rankings, and its traffic has increased. Proactive and responsive.',
    },
    {
      title: 'Slide 1',
      description:
        'Thanks to Brand Vision’s work, the client’s site has reached second place in search engine rankings, and its traffic has increased. Proactive and responsive.',
    },
    {
      title: 'Slide 1',
      description:
        'Thanks to Brand Vision’s work, the client’s site has reached second place in search engine rankings, and its traffic has increased. Proactive and responsive.',
    },
    {
      title: 'Slide 1',
      description:
        'Thanks to Brand Vision’s work, the client’s site has reached second place in search engine rankings, and its traffic has increased. Proactive and responsive.',
    },
    {
      title: 'Slide 1',
      description:
        'Thanks to Brand Vision’s work, the client’s site has reached second place in search engine rankings, and its traffic has increased. Proactive and responsive.',
    },
    {
      title: 'Slide 1',
      description:
        'Thanks to Brand Vision’s work, the client’s site has reached second place in search engine rankings, and its traffic has increased. Proactive and responsive.',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      // Update slidesPerView based on screen width
      if (window.innerWidth < 1000) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1230) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to set slidesPerView on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <h4 className={styles.cardTitle}>{slide.title}</h4>
              <p className={styles.cardDescription}>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
