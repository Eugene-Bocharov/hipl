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
import { Partners } from '../../components/Organisms/Partners/Partners';

export function Homepage() {
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

  const vidurl2 = '../../static/video2.mp4';

  return (
    <>
      {/* Uncomment the code below to display the homepage content */}
      {windowWidth <= 1100 ? (
        <HeaderMob isWhite={false} />
      ) : (
        <Header isWhite={false} />
      )}
      <HomeWelc />
      <InterfInfo
        title="About us"
        description="We build websites that get noticed — and get results.
At Hipl, we design custom websites for small businesses that want more than just an online presence. We focus on clean design, fast performance, and a user experience that turns visitors into customers.

"
        // description="At Hipl, we specialize in creating custom websites and web designs that help small businesses in Montreal stand out and succeed. Whether you're just starting or looking to update your current site, we bring your vision to life."
      />
      <BigPic video={2} title="Give Emotions" link="#" />
      <StatComp
        stats={[
          { value: '$300K+ ', label: 'In total client sales' },
          { value: '3', label: 'Years in business' },
          { value: '100%', label: 'Project delivery rate' },

          { value: '7', label: 'Industries served' },
        ]}
      />

      {/* <Partners title="Our Clients" pic={[]} /> */}
      <Title title="Ready to get started?" link="/contact" />
      <Footer />
      {/* <Openscreen /> */}
    </>
  );
}
