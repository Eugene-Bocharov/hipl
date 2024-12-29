import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { HalfText } from '../../components/Organisms/HalfText/HalfText';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { ProjShow } from '../../components/Organisms/ProjShow/ProjShow';
import { photos } from '../../static/serviceExp';

export default function ExterPage() {
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
        title="Exterior Renovations"
        description="At Project Development and Design Inc, we specialize in exterior renovations tailored to meet your unique needs and preferences. Our team is dedicated to transforming your vision into reality through expertly managed exterior projects. We understand that the exterior of your property is not only a reflection of your style but also an essential aspect of its functionality. With years of experience in the industry, we take pride in delivering high-quality renovations that enhance the beauty and durability of your home or commercial space."
        position="normal"
        pic={photos.extr[8]}
      />
      <ProjShow
        title="Exterior Renovations"
        description="At Project Development and Design Inc, we specialize in exterior renovations tailored to meet your unique needs and preferences. Our team is dedicated to transforming your vision into reality through expertly managed exterior projects. We understand that the exterior of your property is not only a reflection of your style but also an essential aspect of its functionality. With years of experience in the industry, we take pride in delivering high-quality renovations that enhance the beauty and durability of your home or commercial space."
        images={photos.extr}
      />
      <Footer />
    </>
  );
}
