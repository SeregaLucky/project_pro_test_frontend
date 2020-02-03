import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import authSelectors from '../../redux/auth/authSelectors';
import globalSelectors from '../../redux/global/globalSelectors';
import globalActions from '../../redux/global/globalActions';
import { ReactComponent as MainLogo } from '../../assets/images/logo.svg';
import render from './render';
import Modal from '../Modal';
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

  handleSignOut = () => {
    {
      this.setState({ isOpen: false });
      this.props.onOpen();
    }
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
            matches.small
              ? render.mobile(
                  this.state.isOpen,
                  this.state.isMobile,
                  this.props.name,
                  this.handleClick,
                  this.props.auth,
                  this.handleSignOut,
                )
              : render.tablet(
                  this.props.auth,
                  this.state.isMobile,
                  this.handleSignOut,
                  this.props.name,
                )
          }
        </Media>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: authSelectors.isAuthenticated(state),
    name: authSelectors.userName(state),
    modalOpen: globalSelectors.isModalOpen(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onOpen: () => dispatch(globalActions.openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
