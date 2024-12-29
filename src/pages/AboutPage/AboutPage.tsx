import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HalfText } from '../../components/Organisms/HalfText/HalfText';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Title } from '../../components/Molecules/Title/Title';
import { Slider } from '../../components/Organisms/Slider/Slider';
import { InfoCard } from '../../components/Organisms/InfoCard/InfoCard';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { DarkTitleDesk } from '../../components/Organisms/DarkTitleDesc/DarkTitleDesc';
import { ServiceDesc } from '../../components/Organisms/ServiceDesc/ServiceDesc';
import { DarkText } from '../../components/Organisms/DarkText/DarkText';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';
import { Footer } from '../../components/Organisms/Footer/Footer';

import { photos } from '../../static/serviceExp';
export function AboutPage() {
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
      {/* <HalfText
        title="What do we do?"
        description="At Project Development And Design Inc., we specialize in comprehensive interior and exterior renovations as well as commercial, residential and new build construction. Our commitment to excellence is reflected in every project we undertake, ensuring that we meet the diverse needs of our clients. With a team of experienced professionals, we focus on delivering high-quality craftsmanship and innovative design solutions tailored to each unique vision."
      />
      <DarkTitleDesk
        title="Our approach"
        description="Whether you are looking to renovate your home, build a new commercial space, or enhance the aesthetic appeal of your property, we are dedicated to transforming spaces into functional, beautiful environments. Our approach emphasizes collaboration and communication, ensuring that your ideas and preferences guide the development process."
        link="#"
      />
      <PicDesc
        title="Customer satisfaction"
        description="At our company, we take great pride in our unwavering commitment to customer satisfaction. From the moment you entrust us with your home renovation project, you can rest assured that our skilled team will stop at nothing to exceed your expectations. Whether you're looking to transform the interior of your living space or revitalize the exterior, we have the expertise and attention to detail to bring your vision to life seamlessly."
        position="normal"
        pic={photos.extr[12]}
      />
      <InfoCard
        color="black"
        title="Interior renovations"
        description="Our interior renovations span a wide range of services, from custom cabinetry and elegant flooring to meticulous drywall work and flawless paint finishes. On the exterior side, we excel at everything from roof replacements and siding installations to thoughtful landscaping and stunning deck builds."
      />
      <PicDesc
        title="Commitment to excellence"
        description="No matter the scope of your project, our seasoned professionals will approach it with the utmost care, ensuring that every step of the process is carried out with precision and efficiency. Customer satisfaction is the cornerstone of our business, and we'll stop at nothing to deliver a renovation experience that leaves you feeling completely fulfilled and proud of your updated home."
        position="reversed"
        pic={photos.extr[4]}
      /> */}

      <Title title="Ready to work with us ?" link="/contact" />
      <Footer />
    </>
  );
}
