import React from 'react';

// import Sun from '../../assets/weather/sun.svg';
// import CloudyMoon from '../../assets/weather/cloudy-moon.svg';
// import CloudySun from '../../assets/weather/cloudy-sun.svg';
// import Cloudy from '../../assets/weather/cloudy.svg';
// import Moon from '../../assets/weather/moon.svg';
// import RainySun from '../../assets/weather/rainy-sun.svg';
// import Rainy from '../../assets/weather/rainy.svg';
// import SnowySun from '../../assets/weather/snowy-sun.svg';
// import Snowy from '../../assets/weather/snowy.svg';
import Thunder from '../../assets/weather/thunder.svg';

import styles from './CurrentDay.module.css';

const CurrentDay = ({ forecast }) => {
  const { temp, cityName, conditions, date } = forecast.currentDay;

  return (
    <div className={styles.result}>
      <div className={styles.temp}>
        {temp}
        <span>°</span>
      </div>
      <div className={styles.townInfo}>
        <h1 className={styles.townName}>{cityName}</h1>
        <div className={styles.townParams}>
          <div className={styles.townTime}>
            {date.hour}:{date.minutes} -{' '}
          </div>
          <div className={styles.townDate}>{date.dateNow}</div>
        </div>
      </div>
      <div className={styles.condition}>
        <img className={styles.conditionIcon} src={Thunder} alt="weather icon"></img>
        <div className={styles.conditionStatus}>{conditions}</div>
      </div>
    </div>
  );
};

export default CurrentDay;
