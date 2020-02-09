import React from 'react';
import HeaderUserInfo from '../../HeaderUserInfo/HeaderUserInfo';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SignOutLogo } from '../../../assets/icons/svg/sign-out.svg';
import routes from '../../../routes';
import styles from '../Header.module.css';
import T from 'prop-types';

const Tablet = ({ auth, isMobile, handleSignOut, name }) => {
  return (
    <div className={styles.NavAndUserContainer}>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavList}>
          {auth && (
            <li className={styles.mainNavListItem}>
              <NavLink
                exact
                to={routes.MAIN_PAGE}
                className={styles.mainNavListItemLink}
                activeClassName={styles.activeLink}
              >
                <p className={styles.mainNavListItemLink__text}>Главная</p>
              </NavLink>
            </li>
          )}
          {auth && (
            <li className={styles.mainNavListItem}>
              <NavLink
                to={routes.MATERIALS_PAGE}
                className={styles.mainNavListItemLink}
                activeClassName={styles.activeLink}
              >
                <p className={styles.mainNavListItemLink__text}>
                  Полезные материалы
                </p>
              </NavLink>
            </li>
          )}
          <li className={styles.mainNavListItem}>
            <NavLink
              to={routes.CONTACTS_PAGE}
              className={
                auth
                  ? styles.mainNavListItemLink
                  : `${styles.mainNavListItemLinkNoUser} ${styles.mainNavListItemLink}`
              }
              activeClassName={styles.activeLink}
            >
              <p className={styles.mainNavListItemLink__text}>Контакты</p>
            </NavLink>
          </li>
        </ul>
      </nav>

      {name && (
        <div className={styles.userInfoAndLogout}>
          <HeaderUserInfo isMobile={isMobile} name={name} />
          <button
            type="click"
            className={styles.headerBtn}
            onClick={handleSignOut}
          >
            <SignOutLogo className={styles.SignOutLogo} />
          </button>
        </div>
      )}
    </div>
  );
};

Tablet.propTypes = {
  isMobile: T.bool.isRequired,
  name: T.string,
  auth: T.bool.isRequired,
  handleSignOut: T.func.isRequired,
};

export default Tablet;
