import React from 'react';
import HeaderUserInfo from '../../HeaderUserInfo/HeaderUserInfo';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ExitLogo } from '../../../assets/icons/svg/close-24px.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SignOutLogo } from '../../../assets/icons/svg/sign-out.svg';
import { ReactComponent as MenuLogo } from '../../../assets/icons/svg/menu-24px.svg';
import routes from '../../../routes';
import styles from '../Header.module.css';
import T from 'prop-types';
import transition from './transition.module.css';

const Mobile = ({
  isOpen,
  isMobile,
  name,
  handleClick,
  auth,
  handleSignOut,
}) => {
  return (
    <>
      <div className={styles.userAndBtnContainer}>
        {name && <HeaderUserInfo isMobile={isMobile} name={name} />}
        <button
          type="click"
          className={styles.headerBtnMobile}
          onClick={handleClick}
        >
          {isOpen ? <ExitLogo /> : <MenuLogo />}
        </button>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={1000}
        classNames={transition}
        unmountOnExit
      >
        <nav className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            {name && (
              <>
                <li className={styles.mainNavListItemMobile}>
                  <NavLink
                    exact
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
      </CSSTransition>
    </>
  );
};

Mobile.propTypes = {
  isOpen: T.bool.isRequired,
  isMobile: T.bool.isRequired,
  name: T.string,
  handleClick: T.func.isRequired,
  auth: T.bool.isRequired,
  handleSignOut: T.func.isRequired,
};

export default Mobile;
