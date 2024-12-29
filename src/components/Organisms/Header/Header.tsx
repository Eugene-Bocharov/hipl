import React, { useState, useEffect } from 'react';
import {
  Slide,
  useScrollTrigger,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import styles from './Header.module.scss';
import { HeaderLink } from '../../Molecules/HeaderLink/HeaderLink';

// Define HeaderProps interface
interface HeaderProps {
  children: React.ReactElement;
}

// Define HideOnScroll component
const HideOnScroll: React.FC<HeaderProps> = ({ children }) => {
  const trigger = useScrollTrigger();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrolled, setScrolled] = useState(false); // Track if the page is scrolled

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setPrevScrollPos(currentScrollPos);
    setScrolled(currentScrollPos > 0); // Check if the page is scrolled
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {React.cloneElement(children, { scrolled })}
    </Slide>
  );
};

// Define Header component
export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <HideOnScroll>
        <AppBar
          position="fixed"
          className={`${styles.appBar} ${styles.scrolled}`}
        >
          <Toolbar className={styles.toolbar}>
            <div className={styles.incontainer}>
              <div className={styles.divider}>
                <div className={styles.divcontainerl}>
                  <div className={styles.logocontainer}>
                    <div className={styles.logo}></div>
                  </div>

                  <div>
                    <HeaderLink text="Home" href="/" />
                    <HeaderLink text="About" href="/about" />
                    <HeaderLink text="Services" href="/services" />
                    <HeaderLink text="Appointments" href="/appointments" />
                    <HeaderLink text="Careers" href="/careers" />
                    <HeaderLink text="Contact" href="/contact" />
                  </div>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};
