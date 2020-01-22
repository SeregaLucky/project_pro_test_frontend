import React from 'react';
import T from 'prop-types';
import styles from './Button.module.css';

const Button = ({ type = 'button', lable = '', onClick = () => null }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {lable}
  </button>
);

Button.defaultProps = {
  type: 'button',
  lable: '',
  onClick: () => null,
};

Button.propTypes = {
  type: T.string,
  lable: T.string,
  onClick: T.func,
};

export default Button;
