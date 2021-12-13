import React, { useState, useEffect } from 'react';

import star1 from '../../assets/icons/star1.png';
import star2 from '../../assets/icons/star2.png';

import styles from './StarCheckbox.module.css';

const StarCheckbox = (props) => {
  const [isChecked, setIsChecked] = useState(null);

  useEffect(() => {
    setIsChecked(props.check);
  }, [props.check]);

  const changeChecked = (e) => {
    props.setCheckedCity(e.target.checked);
  };

  return (
    <div className={styles.starWrapper}>
      <label className={styles.label} htmlFor="star">
        {isChecked && (
          <img className={styles.star} src={star1} alt="star" title="Remove from favorites" />
        )}
        {!isChecked && (
          <img className={styles.star} src={star2} alt="star" title="Add to favorites" />
        )}
      </label>
      <input
        className={styles.input}
        type="checkbox"
        name="star"
        id="star"
        checked={isChecked}
        onChange={changeChecked}
      />
    </div>
  );
};

export default StarCheckbox;
