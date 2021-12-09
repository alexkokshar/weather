import React from 'react';

import MyCities from '../MyCities/MyCities';
import Form from '../Form/Form';

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

import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css';

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (location) => {
    submitRequest(location);
  };

  return (
    <div>
      <MyCities />
      <main className={styles.main}>
        <div className={styles.mainInfo}>
          <div className={styles.logo}>the.weather</div>
          <div className={styles.result}>
            <div className={styles.temp}>
              27
              <span>°</span>
            </div>
            <div className={styles.townInfo}>
              <h1 className={styles.townName}>London</h1>
              <div className={styles.townParams}>
                <div className={styles.townTime}>06:09 - </div>
                <div className={styles.townDate}>Monday, 8 Dec '21</div>
              </div>
            </div>
            <div className={styles.condition}>
              <img className={styles.conditionIcon} src={Thunder} alt="weather icon"></img>
              <div className={styles.conditionStatus}>Cloudy</div>
            </div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <Form searchCity={onSubmit} />
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
        </div>
      </main>
    </div>
  );
};

export default Page;
