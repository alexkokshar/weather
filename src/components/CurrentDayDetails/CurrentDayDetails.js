import React from 'react';

import styles from './CurrentDayDetails.module.css';

const CurrentDayDetails = () => {
  return (
    <div className={styles.details}>
      <div className={styles.detailsTitle}>Weather Details</div>
      <ul className={styles.paramsList}>
        <li className={styles.param}>
          <div className={styles.paramName}>Cloudy</div>
          <div className={styles.paramValue}>86 %</div>
        </li>
        <li className={styles.param}>
          <div className={styles.paramName}>Humidity</div>
          <div className={styles.paramValue}>62 %</div>
        </li>
        <li className={styles.param}>
          <div className={styles.paramName}>Wind</div>
          <div className={styles.paramValue}>8 km/h</div>
        </li>
      </ul>
    </div>
  );
};

export default CurrentDayDetails;
