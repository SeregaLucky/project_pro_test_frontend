import styles from './Header.module.css';
import HeaderUserInfo from '../HeaderUserInfo/HeaderUserInfo';
import { ReactComponent as ExitLogo } from '../../assets/icons/svg/close-24px.svg';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { ReactComponent as SignOutLogo } from '../../assets/icons/svg/sign-out.svg';
import { ReactComponent as MenuLogo } from '../../assets/icons/svg/menu-24px.svg';
import React from 'react';

const mobile = (isOpen, isMobile, name, handleClick, auth, handleSignOut) => {
  return isOpen ? (
    <>
      <div className={styles.userAndBtnContainer}>
        {name && <HeaderUserInfo isMobile={isMobile} name={name} />}
        <button
          type="click"
          className={styles.headerBtnMobile}
          onClick={handleClick}
        >
          <ExitLogo />
        </button>
      </div>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavList}>
          {name && (
            <>
              <li className={styles.mainNavListItemMobile}>
                <NavLink
                  to={routes.MAIN_PAGE}
                  onClick={handleClick}
                  className={styles.mainNavListItemLink}
                  activeClassName={styles.activeLink}
                >
                  <p className={styles.mainNavListItemLink__text}>Главная</p>
                </NavLink>
              </li>

              <li className={styles.mainNavListItemMobile}>
                <NavLink
                  to={routes.MATERIALS_PAGE}
                  onClick={handleClick}
                  className={styles.mainNavListItemLink}
                  activeClassName={styles.activeLink}
                >
                  <p className={styles.mainNavListItemLink__text}>
                    Полезные материалы
                  </p>
                </NavLink>
              </li>
            </>
          )}

          <li className={styles.mainNavListItemMobile}>
            <NavLink
              to={routes.CONTACTS_PAGE}
              onClick={handleClick}
              className={styles.mainNavListItemLink}
              activeClassName={styles.activeLink}
            >
              <p className={styles.mainNavListItemLink__text}>Контакты</p>
            </NavLink>
          </li>

          {auth && (
            <li className={styles.mainNavListItemMobile}>
              <button
                type="click"
                className={styles.headerBtnLogOut}
                onClick={handleSignOut}
              >
                <SignOutLogo className={styles.SignOutLogo} />
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  ) : (
    <div className={styles.userAndBtnContainer}>
      {name && <HeaderUserInfo isMobile={isMobile} name={name} />}
      <button
        type="click"
        className={styles.headerBtnMobile}
        onClick={handleClick}
      >
        <MenuLogo />
      </button>
    </div>
  );
};

const tablet = (auth, isMobile, handleLogOut, name) => {
  return (
    <div className={styles.NavAndUserContainer}>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavList}>
          {auth && (
            <li className={styles.mainNavListItem}>
              <NavLink
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
            onClick={handleLogOut}
          >
            <SignOutLogo className={styles.SignOutLogo} />
          </button>
        </div>
      )}
    </div>
  );
};

export default { mobile, tablet };
