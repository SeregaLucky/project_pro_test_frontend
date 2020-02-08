import React from 'react';
import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';
const LOADER_ROOT = document.getElementById('loader-root');
const Spiner = () =>
  createPortal(
    <div className={styles.container}>
      <Loader
        type="Oval"
        color="#00BFFF"
        height={80}
        width={80}
        // timeout={3000} //3 secs
      />
    </div>,
    LOADER_ROOT,
  );
export default Spiner;
