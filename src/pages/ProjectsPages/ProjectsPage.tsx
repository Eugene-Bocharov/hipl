import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { ProjShow } from '../../components/Organisms/ProjShow/ProjShow';
import { photos } from '../../static/serviceExp';

function ProjectsPage() {
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
      <div style={{ marginTop: '150px' }}>
        <ProjShow
          title="Interior Renovations Before & After"
          description="Whether you’re looking to update your living space or transform an unfinished basement into functional and stylish extension of your home, our team is up to the challenge. We’ll take the time to understand your aesthetic preferences and develop custom renovation plan that fits your needs. Just tell us your vision and we’ll bring it to life in style!"
          images={photos.intr}
        />
        <ProjShow
          title="Exterior Renovations"
          description="At Project Development and Design Inc, we specialize in exterior renovations tailored to meet your unique needs and preferences. Our team is dedicated to transforming your vision into reality through expertly managed exterior projects. We understand that the exterior of your property is not only a reflection of your style but also an essential aspect of its functionality. With years of experience in the industry, we take pride in delivering high-quality renovations that enhance the beauty and durability of your home or commercial space."
          images={photos.extr}
        />
        <ProjShow
          title="Home additions and extensions"
          description="We specialize in creating personalized home additions and extensions that reflect your unique style and needs. Our dedicated team works closely with you to understand your vision, ensuring that every project enhances your living space while adding value to your home. Whether you're looking to expand your family room, add a new bedroom, or create a stunning outdoor space, we have the expertise to bring your ideas to life. Let us help you transform your home into the perfect sanctuary for you and your family."
          images={photos.hae}
        />
        <ProjShow
          title="New construction"
          description="We understand that building a new home is one of the most significant investments you will ever make. Our friendly team is dedicated to guiding you through every step of the process, ensuring that your new build reflects your unique style and needs. Whether you’re dreaming of a cozy retreat or a spacious family home, we are here to transform your ideas into reality. Our collaborative approach means we listen closely to your preferences while providing expert advice to create a space you’ll love for years to come."
          images={photos.nc}
        />
        <ProjShow
          title="Roofing"
          description=""
          images={photos.rof.slice(0, 2)} // First 5 elements
        />
      </div>
      <Footer />
    </>
  );
}

export default ProjectsPage;
