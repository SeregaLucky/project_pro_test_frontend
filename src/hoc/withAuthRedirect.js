import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';

const withAuthRedirect = Component => {
  function WithAuthRedirects({ isAuthenticated, ...restProps }) {
    return isAuthenticated ? <Redirect to="/" /> : <Component {...restProps} />;
  }

  const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
  });
  return connect(mapStateToProps)(WithAuthRedirects);
};

export default withAuthRedirect;
