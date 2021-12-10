const getLocationTime = (timestamp, timezone) => {
  const currentUserTimestamp = +new Date(timestamp * 1000);
  const currentUTCTimestamp = currentUserTimestamp + new Date().getTimezoneOffset() * 60 * 1000;
  const currentLocationDate = String(new Date(currentUTCTimestamp + timezone * 1000));
  const time = currentLocationDate.split(' ')[4].slice(0, 5);

  return time;
};

export default getLocationTime;
