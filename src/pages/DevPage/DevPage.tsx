import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { HomeWelc } from '../../components/Organisms/HomeWelc/HomeWelc';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { InfoCard } from '../../components/Organisms/InfoCard/InfoCard';
import { Title } from '../../components/Molecules/Title/Title';
import { Slider } from '../../components/Organisms/Slider/Slider';
import { DarkText } from '../../components/Organisms/DarkText/DarkText';
import { DarkTitleDesk } from '../../components/Organisms/DarkTitleDesc/DarkTitleDesc';
import { ServiceDesc } from '../../components/Organisms/ServiceDesc/ServiceDesc';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { Openscreen } from '../../components/Molecules/Openscreen/Openscreen';
import { photos } from '../../static/serviceExp';
import { InterfInfo } from '../../components/Organisms/InterfInfo/InterfInfo';
import { BigPic } from '../../components/Organisms/BigPic/BigPic';
import { StatComp } from '../../components/Organisms/StatComp/StatComp';

import { TextTitle } from '../../components/Organisms/TextTItle/TextTItle';
import { HalfVid } from '../../components/Organisms/HalfVid/HalfVid';

export function DevPage() {
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
      {/* Conditionally render Header based on window width */}
      {windowWidth <= 1100 ? <HeaderMob /> : <Header />}

      {/* Uncomment to display homepage content */}
      {/* <HomeWelc /> */}

      <TextTitle text="Lets make your astonishing website together !" />
      <HalfVid
        title="Give Emotions"
        description="At Hipl, we specialize in creating custom websites and web designs that help small businesses in Montreal stand out and succeed. Whether you're just starting or looking to update your current site, we bring your vision to life."
        video={3}
        vidTitle="Give Emotions"
        link=""
      />

      <StatComp />

      {/* Commented out sections can be uncommented to display the content */}
      {/* <PicDesc
          title="Our specialization"
          description="We specialize in exterior finishings and interior projects. We take pride in tackling challenges head-on, ensuring every project reflects our commitment."
          position="normal"
          pic={photos.extr[8]}
        /> */}
      {/* <DarkTitleDesk
          title="Commitment to excellence"
          description="Our team is passionate about transforming spaces and making your vision into reality. Whether it’s a new exterior project or cozy interior update, we are here to help."
          link="#"
        /> */}
      {/* <PicDesc
          title="Let’s build something amazing together!"
          description=""
          position="reversed"
          pic={photos.nc[3]}
        /> */}

      <Title title="Ready to work with us?" link="/contact" />
      <Footer />
      {/* <Openscreen /> */}
    </>
  );
}
