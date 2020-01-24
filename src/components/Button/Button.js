import React from 'react';
import { NavLink } from 'react-router-dom';
import T from 'prop-types';

import styles from './Button.module.css';

const Button = ({ lable = '', url }) => (
  <>
    <NavLink
      to={{
        pathname: `${url}`,
      }}
      className={styles.button}
    >
      {lable}
    </NavLink>
  </>
);

Button.propTypes = {
  lable: T.string,
  url: T.string.isRequired,
};

export default Button;
