import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { ProjShow } from '../../components/Organisms/ProjShow/ProjShow';
import { photos } from '../../static/serviceExp';
import { DarkTitleDesk } from '../../components/Organisms/DarkTitleDesc/DarkTitleDesc';

export default function RoofingPage() {
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
        title="Siding"
        description="Is your home's siding looking worn, outdated, or in need of a refresh? Don't settle for a lackluster exterior – upgrade to high-quality vinyl, steel, or Hardie board siding with our expert installation services. With over a decade of experience, we'll transform the look and protection of your home, boosting its curb appeal and value."
        position="normal"
        pic={photos.rof[3]}
      />
      <DarkTitleDesk
        title="Product Features & Benefits"
        description="Vinyl Siding: Durable, low-maintenance, and available in a wide range of colors and styles to complement your home's architecture. Vinyl siding is an affordable option that provides excellent insulation and weather resistance.

•Metal Siding: Exceptionally strong and long-lasting, steel siding is fire-resistant, won't rot or warp, and requires minimal upkeep. Our steel siding options come in classic, modern, and custom designs to suit your unique taste.

•Hardie Board Siding: Made from a durable fiber-cement composite, Hardie board siding is impervious to pests, weather, and the elements. It offers unparalleled protection and a timeless aesthetic that will elevate your home's exterior."
        link="#"
      />
      <ProjShow
        title="Exterior Renovations"
        description=""
        images={photos.rof.slice(3, 9)} // First 5 elements
      />
      <PicDesc
        title="Soffit and Fascia"
        description="Are you looking to give your home's exterior a fresh, polished look? Look no further than our top-notch Soffit and Fascia installation services.
Soffit and fascia are the unsung heroes of your home's exterior. "
        position="reversed"
        pic={photos.rof[1]}
      />
      <DarkTitleDesk
        title="Product Features & Benefits"
        description="These often-overlooked features play a crucial role in both the aesthetics and functionality of your property. But when installed properly, they can:

• Enhance your home's curb appeal and boost property value
• Protect your home from weather damage and pests
• Improve overall energy efficiency and reduce utility costs•

Our experienced team of installation experts will work diligently to transform the look of your home. We use only the highest-quality materials and adhere to the strictest standards to ensure a flawless, long-lasting finish.

Best of all, our services are competitively priced and come with a satisfaction guarantee. You can trust that your home is in good hands.

Don't let your home's exterior fall behind the times. Invest in a Soffit and Fascia upgrade today and enjoy the benefits for years to come.

"
        link="#"
      />
      <ProjShow
        title="Soffit and Fascia"
        description=""
        images={photos.rof.slice(2, 3)} // First 5 elements
      />
      <PicDesc
        title="Roofing"
        description="Whether you need a brand-new roof installation, a full replacement, or just a few strategic repairs, our team of roofing experts is here to ensure your home is protected and looking its best."
        position="normal"
        pic={photos.rof[1]}
      />
      <DarkTitleDesk
        title="Product Features & Benefits"
        description="Our comprehensive roofing services include:

• Professional installation of asphalt shingles and other high-quality roofing materials
• Complete roof replacement for aging or damaged systems
• Targeted repairs to stop leaks, fix storm damage, and extend the life of your roof •

With decades of combined experience, we know what it takes to get the job done right, on time, and within your budget. Our commitment to quality craftsmanship and customer satisfaction is unmatched in the industry.

Don't wait until a small problem turns into a major headache. Secure your home's future and enjoy peace of mind with a roof you can depend on.
Let our roofing experts assess your needs and provide a custom solution that fits your home and your budget.

Here's to a dry, comfortable, and worry-free tomorrow.
"
        link="#"
      />
      <ProjShow
        title="Roofing"
        description=""
        images={photos.rof.slice(0, 2)} // First 5 elements
      />
      <Footer />
    </>
  );
}
