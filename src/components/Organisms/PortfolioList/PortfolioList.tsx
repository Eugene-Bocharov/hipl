import React, { useEffect, useRef, useState } from 'react';
// Inline SVG for search icon
import styles from './PortfolioList.module.scss';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  picLink: string;
  link: string;
  featured?: boolean;
  completed?: boolean;
  technologies?: string[];
  date?: string;
  status?: string;
}

interface PortfolioListProps {
  items: PortfolioItem[];
}

const statuses = ['All Statuses', 'completed', 'in progress', 'planned'];

const PortfolioList: React.FC<PortfolioListProps> = ({ items }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  // Use same animation as TextTitle
  const [filtersAnimated, setFiltersAnimated] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setFiltersAnimated(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All Statuses');
  const [technology, setTechnology] = useState('');
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  // Animate modal and blur at the same time
  useEffect(() => {
    if (modalItem) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [modalItem]);

  // Animate portfolio grid
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  // Animate searchbar and filters
  // ...removed filtersRef observer, now using timeout for animation...

  // Filter logic
  const filteredItems = items.filter((item) => {
    const searchLower = search.toLowerCase();
    // Only match if search is a substring in title, description, or technologies
    const matchesSearch =
      item.title.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower) ||
      (item.technologies &&
        item.technologies.some((t) => t.toLowerCase().includes(searchLower)));
    const matchesStatus =
      status === 'All Statuses' ||
      (item.status && item.status === status) ||
      (status === 'completed' && item.completed);
    const matchesTech =
      !technology ||
      (item.technologies && item.technologies.includes(technology));
    return matchesSearch && matchesStatus && matchesTech;
  });

  // Technologies for filter dropdown
  const allTechnologies = Array.from(
    new Set(items.flatMap((item) => item.technologies || []))
  );

  return (
    <div className={styles.container}>
      <div
        className={`${styles.searchFilters} ${filtersAnimated ? styles.animated : ''}`}
      >
        <div className={styles.searchBarWrapper}>
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* New search icon: magnifying glass with handle and spark */}
          <svg
            className={styles.searchIcon}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="7" stroke="#888" strokeWidth="2" />
            <rect
              x="15.5"
              y="15.5"
              width="4"
              height="2"
              rx="1"
              transform="rotate(45 15.5 15.5)"
              fill="#888"
            />
            <path
              d="M6 6L7 7"
              stroke="#888"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className={styles.filtersRow}>
          <div className={styles.filterGroup}>
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              onFocus={(e) => e.target.classList.add(styles.customOpen)}
              onBlur={(e) => e.target.classList.remove(styles.customOpen)}
            >
              {statuses.map((stat) => (
                <option key={stat} value={stat}>
                  {stat}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>Technologies</label>
            <select
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
              onFocus={(e) => e.target.classList.add(styles.customOpen)}
              onBlur={(e) => e.target.classList.remove(styles.customOpen)}
            >
              <option value="">Add technology</option>
              {allTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div
        className={`${styles.portfolioList} ${isAnimated ? styles.animated : ''}`}
        ref={portfolioRef}
      >
        <div className={styles.grid}>
          {filteredItems.length === 0 ? (
            <div className={styles.noMatches}>No matches found.</div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className={styles.portfolioItem}
                onClick={() => setModalItem(item)}
                tabIndex={0}
                role="button"
                aria-label={`Open details for ${item.title}`}
              >
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${item.picLink})` }}
                >
                  {item.featured && (
                    <span className={styles.featured}>Featured</span>
                  )}
                  {/* completed tag hidden for now */}
                  {/* {item.completed && (
                    <span className={styles.completed}>completed</span>
                  )} */}
                </div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>
                  {item.description.length > 120
                    ? item.description.slice(0, 120) + '...'
                    : item.description}
                </p>
                <div className={styles.techRow}>
                  {(item.technologies || []).slice(0, 4).map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                  {item.technologies && item.technologies.length > 4 && (
                    <span className={styles.techTag}>
                      +{item.technologies.length - 4} more
                    </span>
                  )}
                </div>
                <div className={styles.itemFooter}>
                  {item.status && (
                    <span className={styles.category}>{item.status}</span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {modalItem && (
        <div
          className={`${styles.modalOverlay} ${modalVisible ? styles.visible : ''}`}
          onClick={() => setModalItem(null)}
        >
          <div
            className={`${styles.modalBlur} ${modalVisible ? styles.visible : ''}`}
          ></div>
          <div
            className={`${styles.modal} ${modalVisible ? styles.visible : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalImageSection}>
              <div
                className={styles.modalImage}
                style={{ backgroundImage: `url(${modalItem.picLink})` }}
              >
                {modalItem.featured && (
                  <span className={styles.featured}>Featured</span>
                )}
                {/* completed tag hidden for now */}
                {/* {modalItem.completed && (
                  <span className={styles.completed}>completed</span>
                )} */}
                <button
                  className={styles.closeBtn}
                  onClick={() => setModalItem(null)}
                >
                  &times;
                </button>
              </div>
            </div>
            <div className={styles.modalContentSection}>
              <div className={styles.modalTitleRow}>
                <h2 className={styles.modalTitle}>{modalItem.title}</h2>
                <div className={styles.modalActions}>
                  <a
                    href={modalItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.demoBtn}
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className={styles.codeBtn}
                    style={{ visibility: 'hidden' }}
                  >
                    Source Code
                  </a>
                </div>
              </div>
              <div className={styles.modalMetaRow}>
                {modalItem.status && (
                  <span className={styles.category}>{modalItem.status}</span>
                )}
              </div>
              <p className={styles.modalDescription}>{modalItem.description}</p>
              <div className={styles.techLabel}>Technologies Used</div>
              <div className={styles.modalTechRow}>
                {(modalItem.technologies || []).map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PortfolioList;
