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

export function PortfolioPage() {
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
      title: 'Project AnDesign',
      description:
        'We helped Projectandesign showcase their completed construction projects and services to attract new clients and grow their business. We built a responsive website, displayed their project portfolio, outlined service offerings, and integrated contact and quote request forms.',
      picLink:
        'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://projectandesign.ca/',
      technologies: [
        'React',
        'TypeScript',
        'SCSS',
        'CSS',
        'JavaScript',
        'JSON',
        'Figma',
      ],
      // status: 'completed',
      completed: true,
    },
    {
      id: 2,
      title: 'Kaza Health n Beauty',
      description:
        'Kaza needed a website to highlight their services, pricing, and location to bring in new clients. We delivered a sleek, mobile-friendly site that clearly presents their offerings, contact details, and salon information.',
      picLink:
        'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://kazahealthnbeauty.com/',
      technologies: [
        'React',
        'TypeScript',
        'SCSS',
        'CSS',
        'JavaScript',
        'JSON',
        'Figma',
      ],
      // status: 'completed',
      completed: true,
    },
    {
      id: 3,
      title: 'Art Blooms',
      description:
        'Art Blooms offers painting classes for kids and wanted a site that could simplify signups and show course information. We designed a playful, user-friendly site that displays class details, integrates registration and payment, and reflects the creative vibe of the school.',
      picLink:
        'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://artblooms.club/',
      technologies: [
        'React',
        'TypeScript',
        'SCSS',
        'SquareSpace',
        'CSS',
        'JavaScript',
        'JSON',
        'Figma',
      ],
      // status: 'completed',
      completed: true,
    },
    {
      id: 4,
      title: 'SVS Top Tax',
      description:
        'SVS Top Tax had an existing website but needed help with updates and new sections. We supported them by adding service pages, improving layout and responsiveness, and performing regular maintenance to keep the site sharp and functional.',
      picLink:
        'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://svstoptax.com/en/',
      technologies: [
        'Wordpress',
        'PHP',
        'MySQL',
        'Bluehost (configuration)',
        'Figma',
      ],
      // status: 'completed',
      completed: true,
    },
    {
      id: 5,
      title: 'PurPros 360',
      description:
        'PurPros 360 needed a full Shopify store for their beauty and manicure products. We handled the design and development, organized products into collections, set up payment and shipping systems, and customized the theme to match their branding. ',
      picLink:
        'https://images.unsplash.com/photo-1499313843378-eebdb187f629?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://purepros360.com/',
      technologies: ['Shopify', 'Liquid', 'CSS', 'SCSS', 'JavaScript', 'JSON'],
      // status: 'completed',
      completed: true,
    },
    {
      id: 6,
      title: 'BET Transport',
      description:
        'This was our first project — BET Transport needed a professional web presence to show their services and help clients get in touch. We built a one-page business site with clean layout, clear service info, and contact details including a map.',
      picLink:
        'https://images.unsplash.com/photo-1618582948377-cd7eb0e8cb14?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://bet-logistics.ca/',
      technologies: [
        'React',
        'TypeScript',
        'SCSS',
        'CSS',
        'JavaScript',
        'JSON',
        'Figma',
      ],
      // status: 'completed',
      completed: true,
    },
    {
      id: 7,
      title: 'CafePop',
      description:
        'Currently in progress, we’re designing and building a modern website for CafePop to help customers browse their menu, find contact info, and access delivery platforms like Uber Eats. The goal is to create a seamless experience that brings more people to the café, both online and in person.',
      picLink:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://www.cafepop.ca/',
      technologies: [
        'React',
        'TypeScript',
        'SCSS',
        'CSS',
        'JavaScript',
        'JSON',
        'Figma',
      ],
      // status: 'completed',
      completed: true,
    },
  ];

  return (
    <>
      {/* Conditionally render Header based on window width */}
      {windowWidth <= 1100 ? <HeaderMob /> : <Header />}

      {/* Uncomment to display homepage content */}
      {/* <HomeWelc /> */}

      <TextTitle noDivider={true} text="Our Work" />
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
      {/* <HalfVid
        title="Give Emotions"
        description="At Hipl, we specialize in creating custom websites and web designs that help small businesses in Montreal stand out and succeed. Whether you're just starting or looking to update your current site, we bring your vision to life. At Hipl, we specialize in creating custom websites and web designs that help small businesses in Montreal stand out and succeed. Whether you're just starting or looking to update your current site, we bring your vision to life."
        video={3}
        vidTitle=""
        link=""
      /> */}
      {/* <ServiceInfo
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
          },
        ]}
      /> */}
      <PortfolioList items={portfolioItems} />
      <Title title="Ready to get started?" link="/contact" />
      <Footer />
      {/* <Openscreen /> */}
    </>
  );
}
