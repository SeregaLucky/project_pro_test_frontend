import React, { Component } from 'react';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import HeaderUserInfo from '../HeaderUserInfo/HeaderUserInfo';
import { ReactComponent as MainLogo } from '../../assets/images/logo.svg';
import { ReactComponent as MenuLogo } from '../../assets/icons/svg/menu-24px.svg';
import { ReactComponent as ExitLogo } from '../../assets/icons/svg/close-24px.svg';
import { ReactComponent as SignOutLogo } from '../../assets/icons/svg/sign-out.svg';
import Modal from '../Modal';

import styles from './Header.module.css';

class Header extends Component {
  state = {
    isOpen: false,
    isMobile: false,
    isAuth: false,
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        isOpen: prevState.isOpen !== true,
      };
    });
  };

  handleClickLogo = () => {
    this.setState({ isOpen: false });
  };

  renderMobile = () => {
    return !this.state.isOpen ? (
      <div className={styles.userAndBtnContainer}>
        {this.state.isAuth && <HeaderUserInfo isMobile={this.state.isMobile} />}
        <button
          type="click"
          className={styles.headerBtnMobile}
          onClick={this.handleClick}
        >
          <MenuLogo />
        </button>
      </div>
    ) : (
      <>
        <div className={styles.userAndBtnContainer}>
          {this.state.isAuth && (
            <HeaderUserInfo isMobile={this.state.isMobile} />
          )}
          <button
            type="click"
            className={styles.headerBtnMobile}
            onClick={this.handleClick}
          >
            <ExitLogo />
          </button>
        </div>
        <nav className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            {this.state.isAuth && (
              <>
                <li className={styles.mainNavListItemMobile}>
                  <NavLink
                    to={routes.MAIN_PAGE}
                    onClick={this.handleClick}
                    className={styles.mainNavListItemLink}
                    activeClassName={styles.activeLink}
                  >
                    <p className={styles.mainNavListItemLink__text}>Главная</p>
                  </NavLink>
                </li>
                <li className={styles.mainNavListItemMobile}>
                  <NavLink
                    to={routes.MATERIALS_PAGE}
                    onClick={this.handleClick}
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
                onClick={this.handleClick}
                className={styles.mainNavListItemLink}
                activeClassName={styles.activeLink}
              >
                <p className={styles.mainNavListItemLink__text}>Контакты</p>
              </NavLink>
            </li>
            {this.state.isAuth && (
              <li className={styles.mainNavListItemMobile}>
                <button type="click" className={styles.headerBtnLogOut}>
                  <SignOutLogo className={styles.SignOutLogo} />
                </button>
              </li>
            )}
          </ul>
        </nav>
      </>
    );
  };

  renderTablet = () => {
    return (
      <div className={styles.NavAndUserContainer}>
        <nav className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            {this.state.isAuth && (
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
            {this.state.isAuth && (
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
                  this.state.isAuth
                    ? styles.mainNavListItemLink
                    : `${styles.mainNavListItemLinkNoUser} ${styles.mainNavListItemLink}`
                }
                activeClassName={styles.activeLink}
              >
                <p className={styles.mainNavListItemLink__text}>Контакты</p>
              </NavLink>
            </li>
            <li className={styles.mainNavListItem}>
              <NavLink
                to={routes.RESULT_PAGE}
                className={
                  this.state.isAuth
                    ? styles.mainNavListItemLink
                    : `${styles.mainNavListItemLinkNoUser} ${styles.mainNavListItemLink}`
                }
                activeClassName={styles.activeLink}
              >
                <p className={styles.mainNavListItemLink__text}>RESULT</p>
              </NavLink>
            </li>
          </ul>
        </nav>

        {this.state.isAuth && (
          <div className={styles.userInfoAndLogout}>
            <HeaderUserInfo isMobile={this.state.isMobile} />
            <button type="click" className={styles.headerBtn}>
              <SignOutLogo className={styles.SignOutLogo} />
            </button>
          </div>
        )}
      </div>
    );
  };

  render() {
    return (
      <header className={styles.header}>
        <NavLink
          to={routes.MAIN_PAGE}
          className={styles.logoLink}
          onClick={this.handleClickLogo}
        >
          <MainLogo />
        </NavLink>
        <Media
          queries={{ small: { maxWidth: 767 } }}
          onChange={matches =>
            matches.small
              ? this.setState({ isMobile: true })
              : this.setState({ isMobile: false, isOpen: false })
          }
        >
          {matches =>
            matches.small ? this.renderMobile() : this.renderTablet()
          }
        </Media>
      </header>
    );
  }
}

export default Header;
