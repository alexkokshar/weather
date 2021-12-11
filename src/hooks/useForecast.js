import { useState } from 'react';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailForecast from '../helpers/getCurrentDayDetailForecast';

const api = {
  key: '06cda364b2f9d700d2754740d3395312',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const useForecast = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const gatherForecastData = (data) => {
    const currentDay = getCurrentDayForecast(data);
    const currentDetailDay = getCurrentDayDetailForecast(data);
    setForecast({ currentDay, currentDetailDay });

    setIsLoading(false);
  };

  const submitRequest = async (location) => {
    setIsLoading(true);
    setIsError(false);

    const data = await fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => result);

    if (!data || data.length === 0) {
      setIsError('There is no such location');
      setIsLoading(false);
      return;
    }

    if (data.name) {
      localStorage.setItem('location', data.name);
    }

    console.log(data);
    gatherForecastData(data);
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
