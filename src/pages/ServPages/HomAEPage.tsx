import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { ProjShow } from '../../components/Organisms/ProjShow/ProjShow';
import { photos } from '../../static/serviceExp';

export default function HomAEPage() {
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
        title="Home additions and extensions"
        description="We specialize in creating personalized home additions and extensions that reflect your unique style and needs. Our dedicated team works closely with you to understand your vision, ensuring that every project enhances your living space while adding value to your home. Whether you're looking to expand your family room, add a new bedroom, or create a stunning outdoor space, we have the expertise to bring your ideas to life. Let us help you transform your home into the perfect sanctuary for you and your family."
        position="normal"
        pic={photos.hae[0]}
      />
      <ProjShow
        title="Home additions and extensions"
        description="We specialize in creating personalized home additions and extensions that reflect your unique style and needs. Our dedicated team works closely with you to understand your vision, ensuring that every project enhances your living space while adding value to your home. Whether you're looking to expand your family room, add a new bedroom, or create a stunning outdoor space, we have the expertise to bring your ideas to life. Let us help you transform your home into the perfect sanctuary for you and your family."
        images={photos.hae}
      />
      <Footer />
    </>
  );
}
