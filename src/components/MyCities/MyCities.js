import React, { useState, useEffect } from 'react';

import { Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';

import getCurrentDayForecast from '../../helpers/getCurrentDayForecast';
import City from './City';
import styles from './MyCities.module.css';

const api = {
  key: '06cda364b2f9d700d2754740d3395312',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const MyCities = ({ cityNames }) => {
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    setCitiesList([]);
    cityNames.forEach((city) => {
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          const cityWeather = getCurrentDayForecast(data);
          setCitiesList((prevState) => [...prevState, cityWeather]);
        });
    });
  }, [cityNames]);

  return (
    <div className={styles.myCities}>
      <Swiper
        modules={[Navigation, Mousewheel]}
        slidesPerView={5}
        navigation={true}
        mousewheel={true}
        loop={true}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {citiesList.map((city) => (
          <SwiperSlide key={city.id}>
            <City city={city} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyCities;
