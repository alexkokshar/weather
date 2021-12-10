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
  const temp = Math.round(data.main.temp);
  const cityName = data.name;
  const conditions = data.weather[0].main;
  const date = getDate(data.timezone);

  return {
    temp,
    cityName,
    conditions,
    date,
  };
};

export default getCurrentDayForecast;
