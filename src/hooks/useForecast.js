import { useState } from 'react';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getWoeid = async (location) => {
    const data = await fetch(`${REQUEST_URL}/search?query=${location}`)
      .then((res) => res.json())
      .then((result) => result);

    if (!data || data.length === 0) {
      setIsError('There is no such location');
      setIsLoading(false);
      return;
    }

    return data[0];
  };

  const getForecastData = async (woeid) => {
    const forecastData = await fetch(`${REQUEST_URL}/${woeid}`)
      .then((res) => res.json())
      .then((result) => result);

    if (!forecastData || forecastData.length === 0) {
      setIsError('Something went wrong');
      setIsLoading(false);
      return;
    }

    return forecastData;
  };

  const gatherForecastData = (data) => {
    const currentDay = getCurrentDayForecast(data);
    setForecast({ currentDay });

    setIsLoading(false);
  };

  const submitRequest = async (location) => {
    setIsLoading(true);
    setIsError(false);

    const response = await getWoeid(location);
    if (!response?.woeid) return;

    const data = await getForecastData(response.woeid);
    if (!data) return;

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
