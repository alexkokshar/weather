import Sun from '../assets/weather/sun.svg';
import CloudyMoon from '../assets/weather/cloudy-moon.svg';
import CloudySun from '../assets/weather/cloudy-sun.svg';
import Cloudy from '../assets/weather/cloudy.svg';
import Moon from '../assets/weather/moon.svg';
import RainySun from '../assets/weather/rainy-sun.svg';
import Rainy from '../assets/weather/rainy.svg';
import SnowySun from '../assets/weather/snowy-sun.svg';
import Snowy from '../assets/weather/snowy.svg';
import Thunder from '../assets/weather/thunder.svg';

const checkIsDay = (time, dayLength) => {
  const { sunrise, sunset } = dayLength;

  return time > sunrise && time < sunset;
};

export const getCurrentWeatherIcon = (conditions, time, dayLength) => {
  const { status, description } = conditions;
  const isDay = checkIsDay(time, dayLength);

  if (status === 'Clear' && isDay) return Sun;
  if (status === 'Clear' && !isDay) return Moon;
  if (status === 'Clouds' && description !== 'overcast clouds' && isDay) return CloudySun;
  if (status === 'Clouds' && description !== 'overcast clouds' && !isDay) return CloudyMoon;
  if (status === 'Clouds' && description === 'overcast clouds') return Cloudy;
  if (status === 'Thunderstorm' || status === 'Squall' || status === 'Tornado') return Thunder;
  if (status === 'Drizzle') return RainySun;
  if (status === 'Rain') return Rainy;
  if (status === 'Snow' && description === 'light snow') return SnowySun;
  if (status === 'Snow') return Snowy;
  if (status === 'Sand' || status === 'Ash' || status === 'Dust') return Sun;
  return Cloudy;
};

export const getCurrentWeatherType = (forecast) => {
  const { status, description } = forecast.currentDay.conditions;
  const { time } = forecast.currentDay.date;
  const { dayLength } = forecast.currentDay;
  const isDay = checkIsDay(time, dayLength);

  if (isDay) {
    if (status === 'Clear') return 'clear-day';
    if (status === 'Clouds' && description !== 'overcast clouds') return 'small-clouds-day';
    if (status === 'Clouds' && description === 'overcast clouds') return 'big-clouds-day';
    if (status === 'Thunderstorm') return 'thunderstorm-day';
    if (status === 'Drizzle') return 'drizzle-day';
    if (status === 'Rain') return 'rain-day';
    if (status === 'Snow') return 'snow-day';
    if (status === 'Mist' || status === 'Smoke' || status === 'Haze' || status === 'Fog')
      return 'mist-day';
  }
  if (!isDay) {
    if (status === 'Clear') return 'clear-night';
    if (status === 'Clouds' && description !== 'overcast clouds') return 'small-clouds-night';
    if (status === 'Clouds' && description === 'overcast clouds') return 'big-clouds-night';
    if (status === 'Thunderstorm') return 'thunderstorm-night';
    if (status === 'Drizzle') return 'drizzle-night';
    if (status === 'Rain') return 'rain-night';
    if (status === 'Snow') return 'snow-night';
    if (status === 'Mist' || status === 'Smoke' || status === 'Haze' || status === 'Fog')
      return 'mist-night';
  }
  if (status === 'Squall') return 'squall-day';
  if (status === 'Tornado') return 'tornado-day';
  if (status === 'Dust' || status === 'Sand' || status === 'Ash') return 'dust-day';
};
