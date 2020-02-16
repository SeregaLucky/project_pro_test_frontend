import React from 'react';
import { ReactComponent as Heart } from '../../assets/icons/svg/favorite-heart-button.svg';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="info">
        <span className={styles.infoUnit}>&copy; 2020</span>
        <span className={styles.infoUnit}>All Rights Reserved</span>
        <span className={styles.infoUnit}>
          Developed with <Heart className={styles.heart} />
        </span>
      </div>
      <p className={styles.author}>
        by{' '}
        <NavLink to={routes.CONTACTS_PAGE} className={styles.navLink}>
          GoIT Students
        </NavLink>
      </p>
    </footer>
  );
};

export default Footer;
