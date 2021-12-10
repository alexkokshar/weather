import React from 'react';

import styles from './CurrentDayDetails.module.css';

const CurrentDayDetails = ({ forecast }) => {
  const {
    humidity,
    pressure,
    windSpeed,
    visibility,
    temp_max,
    temp_min,
    temp_feels,
    sunrise,
    sunset,
  } = forecast.currentDetailDay;

  return (
    <div className={styles.details}>
      <div className={styles.detailsTitle}>Weather Details</div>
      <ul className={styles.paramsList}>
        <li className={styles.param}>
          <div className={styles.paramName}>Feels like </div>
          <div className={styles.paramValue}>{temp_feels} °C</div>
        </li>
        <li className={styles.param}>
          <div className={styles.paramName}>Max temperature</div>
          <div className={styles.paramValue}>{temp_max} °C</div>
        </li>
        <li className={styles.param}>
          <div className={styles.paramName}>Min temperature</div>
          <div className={styles.paramValue}>{temp_min} °C</div>
        </li>
        <li className={styles.param}>
          <div className={styles.paramName}>Humidity</div>
          <div className={styles.paramValue}>{humidity} %</div>
        </li>
        <li className={styles.param}>
          <div className={styles.paramName}>Pressure</div>
          <div className={styles.paramValue}>{pressure} mm Hg</div>
        </li>
        <li className={styles.param}>
          <div className={styles.paramName}>Wind speed</div>
          <div className={styles.paramValue}>{windSpeed} m/c</div>
        </li>
        <li className={styles.param}>
          <div className={styles.paramName}>Visibility</div>
          <div className={styles.paramValue}>{visibility} km</div>
        </li>
        <li className={styles.param}>
          <div className={styles.paramName}>Sunrise </div>
          <div className={styles.paramValue}>{sunrise}</div>
        </li>
        <li className={styles.param}>
          <div className={styles.paramName}>Sunset </div>
          <div className={styles.paramValue}>{sunset}</div>
        </li>
      </ul>
    </div>
  );
};

export default CurrentDayDetails;
