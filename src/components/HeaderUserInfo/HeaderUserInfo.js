import React from 'react';
import T from 'prop-types';
import styles from './HeaderUserInfo.module.css';
import { connect } from 'react-redux';
import globalSelectors from '../../redux/global/globalSelectors';

const HeaderUserInfo = ({ isMobile, name }) => {
  const letter = name && name.slice(0, 1).toUpperCase();

  const shortName = letter && `${letter}${name.slice(1, 10)}`;

  return isMobile === true
    ? name && (
        <div className={styles.HeaderUserContainer}>
          <p className={styles.HeaderUserLetter}>{letter}</p>
        </div>
      )
    : name && (
        <div className={styles.HeaderUserContainer}>
          <p className={styles.HeaderUserLetter}>{letter}</p>
          <p className={styles.HeaderUserName}>{shortName}</p>
        </div>
      );
};

HeaderUserInfo.propTypes = {
  isMobile: T.bool.isRequired,
  name: T.string,
};

const mapStateToProps = state => {
  return {
    name: globalSelectors.userName(state),
  };
};

export default connect(mapStateToProps)(HeaderUserInfo);
