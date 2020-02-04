import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';

const withRedirect = Component => {
  function withAuthRedirects({ isAuthenticated, ...restProps }) {
    return isAuthenticated ? <Redirect to="/" /> : <Component {...restProps} />;
  }

  const mstp = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
  });
  return connect(mstp)(withAuthRedirects);
};

export default withRedirect;
