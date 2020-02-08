import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import routes from '../routes';
import authSelectors from '../redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, isAuth, ...restProps }) => (
  <Route
    {...restProps}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to={routes.AUTH_PAGE} />
    }
  />
);

const mapStateToProps = state => ({
  isAuth: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
