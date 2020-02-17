import React from 'react';
import styles from './ErrorInfo.module.css';

const ErrorInfo = () => (
  <div className={styles.errorInfo}>
    <h3 className={styles.title}>Произошла ошибка. Попробуйте позже...</h3>
  </div>
);

export default ErrorInfo;
