import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import HeaderUserInfo from '../HeaderUserInfo/HeaderUserInfo';
import { ReactComponent as MainLogo } from '../../assets/images/logo.svg';
import { ReactComponent as MenuLogo } from '../../assets/icons/svg/menu-24px.svg';
import { ReactComponent as ExitLogo } from '../../assets/icons/svg/close-24px.svg';
import { ReactComponent as SignOutLogo } from '../../assets/icons/svg/sign-out.svg';

import styles from './Header.module.css';

class Header extends Component {
  state = {
    isOpen: false,
    isMobile: false,
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

  componentDidMount() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      this.setState({ isMobile: true });
    }
  }

  renderMobile = () => {
    return !this.state.isOpen ? (
      <div className={styles.userAndBtnContainer}>
        <HeaderUserInfo isMobile={this.state.isMobile} />
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
          <HeaderUserInfo isMobile={this.state.isMobile} />
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
            <li
              className={`${styles.mainNavListItemMobile} ${styles.mainNavListItemMainPage}`}
            >
              <NavLink
                to={routes.MAIN_PAGE}
                onClick={this.handleClick}
                className={styles.mainNavListItemLink}
              >
                <p className={styles.mainNavListItemLink__text}>Главная</p>
              </NavLink>
            </li>
            <li
              className={`${styles.mainNavListItemMobile} ${styles.mainNavListItemMaterials}`}
            >
              <NavLink
                to={routes.MATERIALS_PAGE}
                onClick={this.handleClick}
                className={styles.mainNavListItemLink}
              >
                <p className={styles.mainNavListItemLink__text}>
                  Полезные материалы
                </p>
              </NavLink>
            </li>
            <li
              className={`${styles.mainNavListItemMobile} ${styles.mainNavListItemContacts}`}
            >
              <NavLink
                to={routes.CONTACTS_PAGE}
                onClick={this.handleClick}
                className={styles.mainNavListItemLink}
              >
                <p className={styles.mainNavListItemLink__text}>Контакты</p>
              </NavLink>
            </li>
            <li className={styles.mainNavListItemMobile}>
              <NavLink
                to={routes.AUTH_PAGE}
                onClick={this.handleClick}
                className={styles.mainNavListItemLink}
              >
                <p className={styles.mainNavListItemLink__text}>
                  <button type="click" className={styles.headerBtn}>
                    <SignOutLogo className={styles.SignOutLogo} />
                  </button>
                </p>
              </NavLink>
            </li>
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
            <li className={styles.mainNavListItem}>
              <NavLink
                to={routes.MAIN_PAGE}
                className={styles.mainNavListItemLink}
              >
                Главная
              </NavLink>
            </li>
            <li className={styles.mainNavListItem}>
              <NavLink
                to={routes.MATERIALS_PAGE}
                className={styles.mainNavListItemLink}
              >
                Полезные материалы
              </NavLink>
            </li>
            <li className={styles.mainNavListItem}>
              <NavLink
                to={routes.CONTACTS_PAGE}
                className={styles.mainNavListItemLink}
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.userInfoAndLogout}>
          <HeaderUserInfo isMobile={this.state.isMobile} />
          <button type="click" className={styles.headerBtn}>
            <SignOutLogo className={styles.SignOutLogo} />
          </button>
        </div>
      </div>
    );
  };

  renderType = () => {
    let obj;
    if (window.matchMedia('(max-width: 767px)').matches) {
      obj = this.renderMobile();
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      obj = this.renderTablet();
    }
    return obj;
  };

  render() {
    return (
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <NavLink
            to={routes.MAIN_PAGE}
            className={styles.logoLink}
            onClick={this.handleClickLogo}
          >
            <MainLogo />
          </NavLink>
          {this.renderType()}
        </header>
      </div>
    );
  }
}

export default Header;
