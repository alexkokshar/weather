const getDate = (date) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const currentDate = new Date();

  const dayOfWeek = days[currentDate.getDay()];
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const dateNow = `${dayOfWeek}, ${day} ${month} ${year}`;

  const hour = date.split('T')[1].slice(0, 2);
  const minutes = date.split('T')[1].slice(3, 5);

  return {
    dateNow,
    hour,
    minutes,
  };
};

const getCurrentDayForecast = (data) => {
  const temp = Math.round(data.consolidated_weather[0].the_temp);
  const cityName = data.title;
  const conditions = data.consolidated_weather[0].weather_state_name;
  const date = getDate(data.time);

  return {
    temp,
    cityName,
    conditions,
    date,
  };
};

export default getCurrentDayForecast;
