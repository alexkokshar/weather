import getLocationTime from './getLocationTime';

const getDate = (timezone) => {
  const currentUserTimestamp = +new Date();
  const currentUTCTimestamp = currentUserTimestamp + new Date().getTimezoneOffset() * 60 * 1000;
  const currentLocationDate = String(new Date(currentUTCTimestamp + timezone * 1000));

  const time = currentLocationDate.split(' ')[4].slice(0, 5);
  const dayOfWeek = currentLocationDate.split(' ')[0];
  const day = currentLocationDate.split(' ')[2];
  const month = currentLocationDate.split(' ')[1];
  const year = currentLocationDate.split(' ')[3];

  const date = `${dayOfWeek}, ${day} ${month} ${year}`;

  return {
    time,
    date,
  };
};

const getCurrentDayForecast = (data) => {
  const id = Math.random();
  const temp = Math.round(data.main.temp);
  const cityName = data.name;
  const date = getDate(data.timezone);
  const conditions = {
    status: data.weather[0].main,
    description: data.weather[0].description,
  };
  const dayLength = {
    sunrise: getLocationTime(data.sys.sunrise, data.timezone),
    sunset: getLocationTime(data.sys.sunset, data.timezone),
  };

  return {
    id,
    temp,
    cityName,
    date,
    conditions,
    dayLength,
  };
};

export default getCurrentDayForecast;
