import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import authSelectors from '../../redux/auth/authSelectors';
import globalSelectors from '../../redux/global/globalSelectors';
import globalActions from '../../redux/global/globalActions';
import { ReactComponent as MainLogo } from '../../assets/images/logo.svg';
import Mobile from './Mobile/Mobile';
import Tablet from './Tablet/Tablet';
import Modal from '../Modal';
import T from 'prop-types';
import styles from './Header.module.css';

class Header extends Component {
  state = {
    isOpen: false,
    isMobile: false,
  };

  static propTypes = {
    onOpen: T.func.isRequired,
    modalOpen: T.bool.isRequired,
    auth: T.bool,
    name: T.string,
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
    this.setState({ isOpen: false });
    this.props.onOpen();
  };

  render() {
    const { modalOpen, name, auth } = this.props;
    const { isOpen, isMobile } = this.state;

    return (
      <header className={styles.header}>
        {modalOpen && <Modal />}
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
            matches.small ? (
              <Mobile
                isOpen={isOpen}
                name={name}
                auth={auth}
                handleClick={this.handleClick}
                handleSignOut={this.handleSignOut}
                isMobile={isMobile}
              />
            ) : (
              <Tablet
                name={name}
                auth={auth}
                handleSignOut={this.handleSignOut}
                isMobile={isMobile}
              />
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
