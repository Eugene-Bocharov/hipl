import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { ProjShow } from '../../components/Organisms/ProjShow/ProjShow';
import { photos } from '../../static/serviceExp';

export default function NewConstr() {
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
        title="New construction"
        description="We understand that building a new home is one of the most significant investments you will ever make. Our friendly team is dedicated to guiding you through every step of the process, ensuring that your new build reflects your unique style and needs. Whether you’re dreaming of a cozy retreat or a spacious family home, we are here to transform your ideas into reality. Our collaborative approach means we listen closely to your preferences while providing expert advice to create a space you’ll love for years to come."
        position="normal"
        pic={photos.nc[3]}
      />
      <ProjShow
        title="New construction"
        description="We understand that building a new home is one of the most significant investments you will ever make. Our friendly team is dedicated to guiding you through every step of the process, ensuring that your new build reflects your unique style and needs. Whether you’re dreaming of a cozy retreat or a spacious family home, we are here to transform your ideas into reality. Our collaborative approach means we listen closely to your preferences while providing expert advice to create a space you’ll love for years to come."
        images={photos.nc}
      />
      <Footer />
    </>
  );
}
