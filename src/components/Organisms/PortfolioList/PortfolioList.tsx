import React, { useEffect, useRef, useState } from 'react';
import styles from './PortfolioList.module.scss';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  picLink: string;
  link: string;
}

interface PortfolioListProps {
  items: PortfolioItem[];
}

const PortfolioList: React.FC<PortfolioListProps> = ({ items }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.portfolioList} ${isAnimated ? styles.animated : ''}`}
        ref={portfolioRef}
      >
        <h2 className={styles.title}>Projects we worked on</h2>
        <div className={styles.list}>
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <a href={item.link} className={styles.portfolioItem}>
                <img
                  src={item.picLink}
                  alt={item.title}
                  className={styles.image}
                />
                <div className={styles.textContainer}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              </a>
              {index < items.length - 1 && <div className={styles.divider} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
