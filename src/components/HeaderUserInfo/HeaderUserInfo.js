import React from 'react';
import T from 'prop-types';
import styles from './HeaderUserInfo.module.css';

const HeaderUserInfo = ({ isMobile }) => {
  return isMobile === true ? (
    <>
      <div className={styles.HeaderUserContainer}>
        <a href="#" className={styles.HeaderUserLink}>
          <p className={styles.HeaderUserLetter}>Д</p>
        </a>
      </div>
    </>
  ) : (
    <div className={styles.HeaderUserContainer}>
      <a href="#" className={styles.HeaderUserLink}>
        <p className={styles.HeaderUserLetter}>Д</p>
        <p className={styles.HeaderUserName}>Дмитрий</p>
      </a>
    </div>
  );
};

HeaderUserInfo.propTypes = {
  isMobile: T.bool.isRequired,
};

export default HeaderUserInfo;
