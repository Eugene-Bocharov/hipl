import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { HalfText } from '../../components/Organisms/HalfText/HalfText';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { ReactMinimalGallery } from 'react-minimal-gallery';
import { ProjShow } from '../../components/Organisms/ProjShow/ProjShow';

import { photos } from '../../static/serviceExp';

export default function InterPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {windowWidth <= 1100 ? <HeaderMob /> : <Header />}

      <PicDesc
        title="Interior Renovations"
        description="Whether you’re looking to update your living space or transform an unfinished basement into functional and stylish extension of your home, our team is up to the challenge. We’ll take the time to understand your aesthetic preferences and develop custom renovation plan that fits your needs. Just tell us your vision and we’ll bring it to life in style!"
        position="normal"
        pic={photos.intr[17]}
      />
      <ProjShow
        title="Interior Renovations Before & After"
        description="Whether you’re looking to update your living space or transform an unfinished basement into functional and stylish extension of your home, our team is up to the challenge. We’ll take the time to understand your aesthetic preferences and develop custom renovation plan that fits your needs. Just tell us your vision and we’ll bring it to life in style!"
        images={photos.intr}
      />
      <Footer />
    </>
  );
}
