import React from 'react';
import HeaderUserInfoProps from '../Interface/HeaderUserInfoProps';
import styles from '../Header.module.css';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import HeaderUserInfo from '../../HeaderUserInfo/HeaderUserInfo';
import { ReactComponent as SignOutLogo } from '../../../assets/icons/svg/sign-out.svg';

const Tablet: React.FC<HeaderUserInfoProps> = ({
  auth,
  isMobile,
  handleSignOut,
  name,
}) => {
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
            type="button"
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

export default Tablet;
