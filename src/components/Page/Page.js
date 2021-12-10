import React, { useEffect } from 'react';

import MyCities from '../MyCities/MyCities';
import Form from '../Form/Form';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import CurrentDay from '../CurrentDay/CurrentDay';
import CurrentDayDetails from '../CurrentDayDetails/CurrentDayDetails';

import { getCurrentWeatherType } from '../../helpers/getCurrentWeatherParams';
import useForecast from '../../hooks/useForecast';

import './Page.css';

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (location = 'London') => {
    submitRequest(location);
  };

  useEffect(() => {
    onSubmit();
  }, []);

  const setWeatherType = () => {
    let weatherType;
    if (forecast) {
      weatherType = getCurrentWeatherType(forecast);
    }
    return weatherType;
  };

  return (
    <div>
      <MyCities />
      <main className={`main ${setWeatherType()}`}>
        <div className="main-info">
          <div className="logo">the.weather</div>
          {!forecast && (
            <div>
              {isError && <Error message="There is no such location" />}
              {isLoading && <Loading />}
            </div>
          )}
          {forecast && <CurrentDay forecast={forecast} />}
        </div>
        <div className="sidebar">
          <Form searchCity={onSubmit} />
          {forecast && <CurrentDayDetails forecast={forecast} />}
        </div>
      </main>
    </div>
  );
};

export default Page;
