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

const getCurrentWeatherIcon = (conditions, time, dayLength) => {
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

export default getCurrentWeatherIcon;
