import React from 'react';
import T from 'prop-types';
import styles from './HeaderUserInfo.module.css';

const HeaderUserInfo = ({ isMobile, name = 'Дмитрий' }) => {
  const letter = name.slice(0, 1);

  //todo how many letters?
  //todo name is always present?

  const shortName = name.slice(0, 8);
  return isMobile === true ? (
    <div className={styles.HeaderUserContainer}>
      <p className={styles.HeaderUserLetter}>{letter}</p>
    </div>
  ) : (
    <div className={styles.HeaderUserContainer}>
      <p className={styles.HeaderUserLetter}>{letter}</p>
      <p className={styles.HeaderUserName}>{name}</p>
    </div>
  );
};

HeaderUserInfo.propTypes = {
  isMobile: T.bool.isRequired,
  name: T.string,
};
//todo connect to store
export default HeaderUserInfo;
