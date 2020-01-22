import React, { Component } from 'react';
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

  /*
  Из-за того, что некоторые элементы (кнопка выхода из аккаунта, значок аккаунта) при рендере для мобилки/всего остального находятся в разных местах(на мобилки кнопка LogOut вынесена в выпадающее меню), пришлось использовать вариант ниже. Если использоваться библиотеку, которая учитывает media клиента, то происходящее будет написано чуть проще. Использовать свойство display:hidden или похожие не стал.
  Navlink вместо <а> в  навигации поставлю позже, когда будет, что рендерить.

  */
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
          className={styles.headerBtn}
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
            className={styles.headerBtn}
            onClick={this.handleClick}
          >
            <ExitLogo />
          </button>
        </div>

        <nav className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            <li key={1} className={styles.mainNavListItemMobile}>
              <a href="#" className={styles.mainNavListItemLink}>
                <p className={styles.mainNavListItemLink__text}>Главная</p>
              </a>
            </li>
            <li key={2} className={styles.mainNavListItemMobile}>
              <a href="#" className={styles.mainNavListItemLink}>
                <p className={styles.mainNavListItemLink__text}>
                  Полезные материалы
                </p>
              </a>
            </li>
            <li key={3} className={styles.mainNavListItemMobile}>
              <a href="#" className={styles.mainNavListItemLink}>
                <p className={styles.mainNavListItemLink__text}>Контакты</p>
              </a>
            </li>
            <li key={4} className={styles.mainNavListItemMobile}>
              <a href="#" className={styles.mainNavListItemLink}>
                <p className={styles.mainNavListItemLink__text}>
                  <button type="click" className={styles.headerBtn}>
                    <SignOutLogo className={styles.SignOutLogo} />
                  </button>
                </p>
              </a>
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
            <li key={1} className={styles.mainNavListItem}>
              <a href="#" className={styles.mainNavListItemLink}>
                <p className={styles.mainNavListItemLink__text}>Главная</p>
              </a>
            </li>
            <li key={2} className={styles.mainNavListItem}>
              <a href="#" className={styles.mainNavListItemLink}>
                <p className={styles.mainNavListItemLink__text}>
                  Полезные материалы
                </p>
              </a>
            </li>
            <li key={3} className={styles.mainNavListItem}>
              <a href="#" className={styles.mainNavListItemLink}>
                <p className={styles.mainNavListItemLink__text}>Контакты</p>
              </a>
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
    if (window.matchMedia('(max-width: 768px)').matches) {
      obj = this.renderMobile();
    } else if (window.matchMedia('(min-width: 769px)').matches) {
      obj = this.renderTablet();
    }
    return obj;
  };

  render() {
    return (
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <a href="#" className={styles.logoLink}>
            <MainLogo />
          </a>
          {this.renderType()}
        </header>
      </div>
    );
  }
}

export default Header;
