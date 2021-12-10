import getLocationTime from './getLocationTime';

const getCurrentDayDetailForecast = (data) => {
  const humidity = data.main.humidity;
  const pressure = (data.main.pressure * 0.75).toFixed(0);
  const windSpeed = data.wind.speed;
  const visibility = (data.visibility / 1000).toFixed(1);
  const temp_max = Math.round(data.main.temp_max);
  const temp_min = Math.round(data.main.temp_min);
  const temp_feels = Math.round(data.main.feels_like);
  const sunrise = getLocationTime(data.sys.sunrise, data.timezone);
  const sunset = getLocationTime(data.sys.sunset, data.timezone);

  return {
    humidity,
    pressure,
    windSpeed,
    visibility,
    temp_max,
    temp_min,
    temp_feels,
    sunrise,
    sunset,
  };
};

export default getCurrentDayDetailForecast;
