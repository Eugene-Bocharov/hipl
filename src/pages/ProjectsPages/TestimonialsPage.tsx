import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { RewiewComp } from '../../components/Organisms/RewiewComp/RewiewComp';

import { photos } from '../../static/serviceExp';
import { Title } from '../../components/Molecules/Title/Title';
export default function TestimonialsPage() {
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
      {/* <RewiewComp
        title="Exceptional Spa Experience"
        description="We are a construction company based in Calgary, Alberta, dedicated to delivering high-quality building solutions for both residential and commercial projects.  Our goal is to build lasting relationships through reliable service and exceptional results"
        position="normal"
        author="John Doe | 18 Sept 2024"
        pic={photos.extr[8]}
      />
      <RewiewComp
        title="Exceptional Spa Experience"
        description="We are a construction company based in Calgary, Alberta, dedicated to delivering high-quality building solutions for both residential and commercial projects.  Our goal is to build lasting relationships through reliable service and exceptional results"
        position="reversed"
        author="John Doe | 18 Sept 2024"
        pic={photos.intr[19]}
      />
      <RewiewComp
        title="Exceptional Spa Experience"
        description="We are a construction company based in Calgary, Alberta, dedicated to delivering high-quality building solutions for both residential and commercial projects.  Our goal is to build lasting relationships through reliable service and exceptional results"
        position="normal"
        author="John Doe | 18 Sept 2024"
        pic={photos.extr[4]}
      /> */}
      <Title title="Coming Soon" />
      <Footer />
    </>
  );
}
