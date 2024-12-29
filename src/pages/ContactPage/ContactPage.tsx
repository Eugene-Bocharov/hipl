import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Title } from '../../components/Molecules/Title/Title';
import { ContactForm } from '../../components/Organisms/ContactForm/ContactForm';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { ContactInfo } from '../../components/Organisms/ContactInfo/ContactInfo';

export function ContactPage() {
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
      <ContactInfo title="Let us bring your vision to life!" />
      <Title title="Lets get in touch !" />
      <ContactForm />
      <Footer />
    </>
  );
}
