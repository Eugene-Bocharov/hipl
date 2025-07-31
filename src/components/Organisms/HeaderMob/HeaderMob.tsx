import React, { useState } from 'react';
import styles from './HeaderMob.module.scss';
import { HeaderLinkMob } from '../../Molecules/HeaderLinkMob/HeaderLinkMob';
import { Slide, useScrollTrigger, AppBar, Toolbar } from '@material-ui/core';
import Hamburger from 'hamburger-react';

interface HeaderProps {
  children: React.ReactElement;
  isMenuOpen: boolean;
}

const HideOnScroll: React.FC<HeaderProps> = ({ children, isMenuOpen }) => {
  const trigger = useScrollTrigger();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isMenuOpen ? (
        <>
          {console.log({ isMenuOpen })}
          {React.cloneElement(children, { elevation: 4 })}
        </>
      ) : (
        <Slide appear={false} direction="down" in={!trigger}>
          {React.cloneElement(children, {
            elevation: prevScrollPos > 0 ? 4 : 0,
          })}
        </Slide>
      )}
    </>
  );
};

export const HeaderMob = ({ isWhite = true }: { isWhite?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(isWhite);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!isWhite) {
        setScrolled(window.scrollY > 0);
      } else {
        setScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isWhite]);

  return (
    <>
      <div className={styles.header}>
        <HideOnScroll isMenuOpen={isMenuOpen}>
          <AppBar
            position="fixed"
            className={
              styles.appBar +
              (scrolled || isMenuOpen ? ' ' + styles.scrolled : '') +
              (isMenuOpen ? ' ' + styles.menuOpen : '')
            }
          >
            <Toolbar className={styles.toolbar}>
              <div className={styles.incontainer}>
                <div className={styles.divider}>
                  <div className={styles.logocontainer}>
                    <div
                      className={
                        `${styles.logo} ` +
                        (scrolled || isMenuOpen
                          ? styles.logoScrolled
                          : styles.logoDefault)
                      }
                    />
                  </div>
                  <div>
                    <Hamburger
                      toggled={isMenuOpen}
                      toggle={setIsMenuOpen}
                      color={scrolled || isMenuOpen ? '#000' : '#fff'}
                    />
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </div>
      {isMenuOpen ? (
        <div className={styles.menu}>
          <div className={styles.mobcontainer}>
            <HeaderLinkMob text="Home" href="/" />
            <HeaderLinkMob text="Portfolio" href="/portfolio" />
            <HeaderLinkMob text="Contact" href="/contact" />
          </div>
        </div>
      ) : null}
    </>
  );
};
