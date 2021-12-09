import React from 'react';

import MyCities from '../MyCities/MyCities';
import Form from '../Form/Form';
import Error from '../Error/Error';
import CurrentDay from '../CurrentDay/CurrentDay';
import CurrentDayDetails from '../CurrentDayDetails/CurrentDayDetails';

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
          {!forecast && (
            <div>
              {!isLoading && <div>Not loading</div>}
              {isError && <Error message="There is no such location" />}
              {isLoading && <div>Loading</div>}
            </div>
          )}
          {forecast && <CurrentDay forecast={forecast} />}
        </div>
        <div className={styles.sidebar}>
          <Form searchCity={onSubmit} />
          <CurrentDayDetails />
        </div>
      </main>
    </div>
  );
};

export default Page;
