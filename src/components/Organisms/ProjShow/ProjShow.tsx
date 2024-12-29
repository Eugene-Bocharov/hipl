import React, { useState } from 'react';
import styles from './ProjShow.module.scss';

interface ProjShowProps {
  title: string;
  description: string;
  images: string[];
}

export function ProjShow({ title, description, images }: ProjShowProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={styles.thumbnail}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={styles.modalTitle}>{title}</h3>
            <button onClick={closeModal} className={styles.closeButton}>
              X
            </button>
            <div className={styles.picDivivder}>
              <div
                className={styles.largeImageContainer}
                style={{
                  backgroundImage: `url(${images[currentIndex]})`,
                }}
              ></div>
              <div className={styles.thumbnailsRow}>
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    className={`${styles.smallThumbnail} ${idx === currentIndex ? styles.activeThumbnail : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
