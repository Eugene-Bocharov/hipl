import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import styles from './Header.module.scss';

interface HeaderProps {
  isWhite?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isWhite = true }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(isWhite);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Determine visibility
    const isVisible =
      currentScrollPos < prevScrollPos || currentScrollPos === 0;
    setVisible(isVisible);

    // Track if the page is scrolled
    if (!isWhite) {
      setScrolled(currentScrollPos > 0);
    } else {
      setScrolled(true);
    }

    // Update the previous scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    const optimizedHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', optimizedHandleScroll);
    return () => window.removeEventListener('scroll', optimizedHandleScroll);
  }, [prevScrollPos]);

  return (
    <div className={visible ? styles.visible : styles.hidden}>
      <AppBar
        position="fixed"
        className={`${styles.appBar} ${scrolled ? styles.scrolled : ''} ${
          isWhite ? styles.appBarWhite : ''
        }`}
      >
        <Toolbar className={styles.toolbar}>
          <div className={styles.container}>
            <div
              className={`${styles.logo} ${
                scrolled ? styles.logoScrolled : styles.logoDefault
              }`}
            ></div>
            <nav className={styles.navLinks}>
              <a href="/" className={styles.headerLink}>
                Home
              </a>
              <a href="/portfolio" className={styles.headerLink}>
                Portfolio
              </a>
              <a href="/contact" className={styles.headerLink}>
                Contact
              </a>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
