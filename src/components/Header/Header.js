import React, { Component } from 'react';
import Media from 'react-media';
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
    isAuth: true,
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

  //TODO check, how private routes appear and disappear

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
        //todo correct Navlink activeStyleName
        <nav className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            <li className={styles.mainNavListItemMobile}>
              <NavLink
                to={routes.MAIN_PAGE}
                onClick={this.handleClick}
                className={styles.mainNavListItemLink}
                activeClassName={styles.mainNavListItemMobile}
              >
                <p className={styles.mainNavListItemLink__text}>Главная</p>
              </NavLink>
            </li>
            <li className={styles.mainNavListItemMobile}>
              <NavLink
                to={routes.MATERIALS_PAGE}
                onClick={this.handleClick}
                className={styles.mainNavListItemLink}
                activeClassName={styles.mainNavListItemMobile}
              >
                <p className={styles.mainNavListItemLink__text}>
                  Полезные материалы
                </p>
              </NavLink>
            </li>
            <li className={styles.mainNavListItemMobile}>
              <NavLink
                to={routes.CONTACTS_PAGE}
                onClick={this.handleClick}
                className={styles.mainNavListItemLink}
                activeClassName={styles.mainNavListItemMobile}
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

  //todo check private and public routes
  renderTablet = () => {
    return (
      <div className={styles.NavAndUserContainer}>
        <nav className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            <li className={styles.mainNavListItem}>
              <NavLink
                to={routes.MAIN_PAGE}
                className={styles.mainNavListItemLink}
                activeClassName={styles.testClass}
              >
                Главная
              </NavLink>
            </li>
            <li className={styles.mainNavListItem}>
              <NavLink
                to={routes.MATERIALS_PAGE}
                className={styles.mainNavListItemLink}
                activeClassName={styles.testClass}
              >
                Полезные материалы
              </NavLink>
            </li>
            <li className={styles.mainNavListItem}>
              <NavLink
                to={routes.CONTACTS_PAGE}
                className={styles.mainNavListItemLink}
                activeClassName={styles.testClass}
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.userInfoAndLogout}>
          {this.state.isAuth && (
            <HeaderUserInfo isMobile={this.state.isMobile} />
          )}
          <button type="click" className={styles.headerBtn}>
            <SignOutLogo className={styles.SignOutLogo} />
          </button>
        </div>
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
//todo connect to store and check back-end
export default Header;
