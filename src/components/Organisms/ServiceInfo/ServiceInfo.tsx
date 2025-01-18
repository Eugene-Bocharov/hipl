import React, { useState, useEffect, useRef } from 'react';
import styles from './ServiceInfo.module.scss';

interface ServiceInfoProps {
  title: string;
  services: {
    name: string;
    description: string;
    link: string;
  }[];
}

export function ServiceInfo(props: ServiceInfoProps) {
  const [hasTitleAnimated, setHasTitleAnimated] = useState(false);
  const [animatedCards, setAnimatedCards] = useState<boolean[]>(
    Array(props.services.length).fill(false)
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute('data-index') || '0'
          );
          if (entry.isIntersecting) {
            setAnimatedCards((prev) =>
              prev.map((animated, i) => (i === index ? true : animated))
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the service card is visible
    );

    if (containerRef.current) {
      const serviceCards = containerRef.current.querySelectorAll(
        `.${styles.serviceCard}`
      );
      serviceCards.forEach((card, index) => {
        card.setAttribute('data-index', index.toString());
        observer.observe(card);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [props.services.length]);

  return (
    <div className={styles.container} ref={containerRef}>
      <h1
        className={`${styles.title} ${hasTitleAnimated ? styles.animated : ''}`}
      >
        {props.title}
      </h1>
      <div className={styles.servicesContainer}>
        {props.services.map((service, index) => (
          <div
            key={index}
            className={`${styles.serviceCard} ${
              animatedCards[index] ? styles.animated : ''
            }`}
          >
            <h2 className={styles.serviceName}>{service.name}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
            <a
              className={styles.getQuoteButton}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a Quote
            </a>
            <div
              className={`${styles.dividerline} ${
                animatedCards[index] ? styles.animated : ''
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
