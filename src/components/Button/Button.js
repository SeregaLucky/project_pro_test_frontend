import React from 'react';
import { NavLink } from 'react-router-dom';
import T from 'prop-types';
import routes from '../../routes';

import styles from './Button.module.css';

const Button = ({ lable = '' }) => (
  <>
    <NavLink
      to={{
        pathname: `${routes.MAIN_PAGE}`,
      }}
      className={styles.button}
    >
      {lable}
    </NavLink>
  </>
);

Button.propTypes = {
  lable: T.string,
};

export default Button;
