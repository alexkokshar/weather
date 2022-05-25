import React, { useState, useEffect } from 'react';

import MyCities from '../MyCities/MyCities';
import Form from '../Form/Form';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import StarCheckbox from '../StarCheckbox/StarCheckbox';
import CurrentDay from '../CurrentDay/CurrentDay';
import CurrentDayDetails from '../CurrentDayDetails/CurrentDayDetails';

import { getCurrentWeatherType } from '../../helpers/getCurrentWeatherParams';
import useForecast from '../../hooks/useForecast';

import './Page.css';

const getCityNames = () => {
  let citiesList = JSON.parse(localStorage.getItem('cities'));
  if (!citiesList) {
    citiesList = ['Boston', 'London', 'Paris', 'New York', 'Tokyo'];
  }
  return citiesList;
};

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast();
  const [cityNames, setCityNames] = useState(getCityNames());

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cityNames));
  }, [cityNames]);

  const onSubmit = (location) => {
    if (!location) {
      location = localStorage.getItem('location') || 'London';
    }
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

  const isCheckedCurrentCity = () => {
    if (forecast) {
      return cityNames.includes(forecast.currentDay.cityName);
    }
  };

  const setCheckedCity = (status) => {
    const currentCity = forecast.currentDay.cityName;
    if (status) {
      if (cityNames.includes(currentCity)) return;
      setCityNames((prevState) => {
        return [...prevState, currentCity];
      });
    } else {
      setCityNames((prevState) => prevState.filter((city) => city !== currentCity));
    }
    isCheckedCurrentCity();
  };

  return (
    <>
      {isLoading && <Loading />}
      {forecast && (
        <div className={`background ${setWeatherType()}`}>
          <MyCities cityNames={cityNames} />
          <main className="main">
            <div className="main-info">
              <StarCheckbox check={isCheckedCurrentCity()} setCheckedCity={setCheckedCity} />
              <CurrentDay forecast={forecast} />
            </div>
            <div className="sidebar">
              <Form searchCity={onSubmit} />
              {isError && <Error message={isError} />}
              <CurrentDayDetails forecast={forecast} />
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
