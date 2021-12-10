import React from 'react';

import { getCurrentWeatherIcon } from '../../helpers/getCurrentWeatherParams';

import styles from './CurrentDay.module.css';

const CurrentDay = ({ forecast }) => {
  const { temp, cityName, date, conditions, dayLength } = forecast.currentDay;

  const showIcon = () => {
    return getCurrentWeatherIcon(conditions, date.time, dayLength);
  };

  return (
    <div className={styles.result}>
      <div className={styles.temp}>
        {temp}
        <span>°</span>
      </div>
      <div className={styles.townInfo}>
        <h1 className={styles.townName}>{cityName}</h1>
        <div className={styles.townParams}>
          <div className={styles.townTime}>{date.time} - </div>
          <div className={styles.townDate}>{date.date}</div>
        </div>
      </div>
      <div className={styles.condition}>
        <img className={styles.conditionIcon} src={showIcon()} alt="weather icon"></img>
        <div className={styles.conditionStatus}>{conditions.status}</div>
      </div>
    </div>
  );
};

export default CurrentDay;
