import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import authSelectors from '../../redux/auth/authSelectors';
import globalSelectors from '../../redux/global/globalSelectors';
import globalActions from '../../redux/global/globalActions';

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

  renderMobile = () => {
    return this.state.isOpen ? (
      <>
        <div className={styles.userAndBtnContainer}>
          {this.props.auth && <HeaderUserInfo isMobile={this.state.isMobile} />}
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
            {this.props.auth && (
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

            {this.props.auth && (
              <li className={styles.mainNavListItemMobile}>
                <button
                  type="click"
                  className={styles.headerBtnLogOut}
                  onClick={() => {
                    this.setState({ isOpen: false });
                    this.props.onOpen();
                  }}
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
        {this.props.auth && <HeaderUserInfo isMobile={this.state.isMobile} />}
        <button
          type="click"
          className={styles.headerBtnMobile}
          onClick={this.handleClick}
        >
          <MenuLogo />
        </button>
      </div>
    );
  };

  renderTablet = () => {
    return (
      <div className={styles.NavAndUserContainer}>
        <nav className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            {this.props.auth && (
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
            {this.props.auth && (
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
                  this.props.auth
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

        {this.props.auth && (
          <div className={styles.userInfoAndLogout}>
            <HeaderUserInfo isMobile={this.state.isMobile} />
            <button
              type="click"
              className={styles.headerBtn}
              onClick={this.props.onOpen}
            >
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
        {this.props.modalOpen && <Modal />}
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

const mapStateToProps = state => {
  return {
    auth: authSelectors.isAuthenticated(state),

    modalOpen: globalSelectors.isModalOpen(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onOpen: () => dispatch(globalActions.openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
