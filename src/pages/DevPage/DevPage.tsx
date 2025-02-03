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

import { OurServ } from '../../components/Organisms/OurServ/OurServ';

import { TextTitle } from '../../components/Organisms/TextTItle/TextTItle';
import { HalfVid } from '../../components/Organisms/HalfVid/HalfVid';
import { ServiceInfo } from '../../components/Organisms/ServiceInfo/ServiceInfo';
import PortfolioList from '../../components/Organisms/PortfolioList/PortfolioList';

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

  const portfolioItems = [
    {
      id: 1,
      title: 'ProjectAnDesign',
      description:
        'Construction company based in Calgary, Alberta with over a decade of experience in the industry.',
      picLink:
        'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#',
    },
    {
      id: 2,
      title: 'Kaza Health n Beauty',
      description:
        'Health and beauty spa in Edmonton Alberta that provides various services that are tailored to your needs.',
      picLink:
        'https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#',
    },
    {
      id: 3,
      title: 'Svstoptax',
      description:
        'A leading firm with decades of experience, they provide comprehensive accounting, legal, and tax services to a diverse clientele.',
      picLink:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#',
    },
    {
      id: 1,
      title: 'ProjectAnDesign',
      description:
        'Construction company based in Calgary, Alberta with over a decade of experience in the industry.',
      picLink:
        'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#',
    },
    {
      id: 3,
      title: 'Svstoptax',
      description:
        'A leading firm with decades of experience, they provide comprehensive accounting, legal, and tax services to a diverse clientele.',
      picLink:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#',
    },
    {
      id: 2,
      title: 'Kaza Health n Beauty',
      description:
        'Health and beauty spa in Edmonton Alberta that provides various services that are tailored to your needs.',
      picLink:
        'https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#',
    },
  ];

  return (
    <>
      {/* Conditionally render Header based on window width */}
      {windowWidth <= 1100 ? <HeaderMob /> : <Header />}

      {/* Uncomment to display homepage content */}
      {/* <HomeWelc /> */}

      <TextTitle
        // noDivider={true}
        text="Lets make your astonishing website together !"
      />
      {/* <StatComp
        stats={[
          { value: '100', label: 'Users' },
          { value: '200', label: 'Posts' },
          { value: '300', label: 'Comments' },
          { value: '300', label: 'Comments' },
          { value: '300', label: 'Comments' },
          { value: '300', label: 'Comments' },
          { value: '300', label: 'Comments' },
        ]}
        isMarginTop={true}
      /> */}
      <HalfVid
        title="Give Emotions"
        description="At Hipl, we specialize in creating custom websites and web designs that help small businesses in Montreal stand out and succeed. Whether you're just starting or looking to update your current site, we bring your vision to life. At Hipl, we specialize in creating custom websites and web designs that help small businesses in Montreal stand out and succeed. Whether you're just starting or looking to update your current site, we bring your vision to life."
        video={3}
        vidTitle=""
        link=""
      />
      <ServiceInfo
        title="Our Services"
        services={[
          {
            name: 'Web Design',
            description:
              'Create stunning, user-friendly websites tailored to your needs. Create stunning, user-friendly websites tailored to your needs.Create stunning, user-friendly websites tailored to your needs.',
            link: '/get-quote/web-design',
            listItems: [
              'Responsive design',
              'SEO optimized',
              'Fast loading speeds',
              'Fast loading speeds',
            ],
            price: 'From 500$', // Add price
          },
          {
            name: 'Web Design',
            description:
              'Create stunning, user-friendly websites tailored to your needs. Create stunning, user-friendly websites tailored to your needs.Create stunning, user-friendly websites tailored to your needs.',
            link: '/get-quote/web-design',
            listItems: [
              'Responsive design',
              'SEO optimized',
              'Fast loading speeds',
              'Fast loading speeds',
            ],
            price: 'From 500$', // Add price
          },
          {
            name: 'Web Design',
            description:
              'Create stunning, user-friendly websites tailored to your needs. Create stunning, user-friendly websites tailored to your needs.Create stunning, user-friendly websites tailored to your needs.',
            link: '/get-quote/web-design',
            listItems: [
              'Responsive design',
              'SEO optimized',
              'Fast loading speeds',
              'Fast loading speeds',
            ],
            price: 'From 500$', // Add price
          },
        ]}
      />
      <PortfolioList items={portfolioItems} />
      <Title title="Ready to work with us?" link="/contact" />
      <Footer />
      {/* <Openscreen /> */}
    </>
  );
}
