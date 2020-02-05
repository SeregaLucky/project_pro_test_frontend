import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import routes from '../routes';
import authSelectors from '../redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, auth, ...restProps }) => {
  console.log(auth);
  return (
    <Route
      {...restProps}
      render={props => {
        return auth ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.AUTH_PAGE} />
        );
      }}
    />
  );
};

const mapStateToProps = state => ({
  auth: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
