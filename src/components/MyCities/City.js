import React from 'react';

import { getCurrentWeatherIcon } from '../../helpers/getCurrentWeatherParams';

import styles from './City.module.css';

const City = (props) => {
  const { temp, cityName, date, conditions, dayLength } = props.city;

  const showIcon = () => {
    return getCurrentWeatherIcon(conditions, date.time, dayLength);
  };

  return (
    <div className={styles.cities}>
      <div>
        <img className={styles.icon} src={showIcon()} alt="weather icon" />
      </div>
      <div className={styles.params}>
        <div className={styles.name}>{cityName}</div>
        <div className={styles.condition}>{conditions.status}</div>
        <div className={styles.degree}>{temp} &#176;C</div>
      </div>
      <p></p>
    </div>
  );
};

export default City;
