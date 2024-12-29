import React from 'react';
import styles from './PricingTable.module.scss';
import classNames from 'classnames';

interface Service {
  name: string;
  price: string;
}

interface PricingTableProps {
  title: string;
  picture: string;
  services: Service[];
}

export function PricingTable({ title, picture, services }: PricingTableProps) {
  const titleId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={styles.pricingSection}>
      <h2 id={titleId} className={styles.pricingTitle}>
        {title}
      </h2>
      <img
        src={picture}
        alt="Pricing Table Image"
        className={styles.pricingImage}
      />
      <div className={styles.pricingTable}>
        <div className={`${styles.pricingRow} ${styles.header}`}>
          <div
            className={classNames([styles.pricingItem, styles.optionaldiv])}
          ></div>
        </div>
        {services.map((service, index) => (
          <div
            className={`${styles.pricingRow} ${index % 2 === 1 ? styles.altBackground : ''}`}
            key={index}
          >
            <div className={styles.pricingItem}>{service.name}</div>
            <div className={styles.price}>{service.price}</div>
            <div className={styles.showButtonOnLargeScreens}>
              <a href="/appointments" className={styles.appointmentBtn}>
                Get Appointment
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.bigAppointmentButton}>
        <a href="/appointments" className={styles.appointmentBtn}>
          Get Appointment
        </a>
      </div>
    </div>
  );
}

export default PricingTable;
