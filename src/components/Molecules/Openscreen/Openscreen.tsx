import React from 'react';
import classNames from 'classnames';
import styles from './Openscreen.module.scss';
import openposter from '../../../static/openposter.png';

export function Openscreen() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Website in construction</h1>

        <img src={openposter} alt="" className={styles.image} />
      </div>
    </>
  );
}
