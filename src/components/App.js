import React, { Component, lazy, Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import T from 'prop-types';
import routes from '../routes';
import authOperations from '../redux/auth/authOperations';
import globalSelectors from '../redux/global/globalSelectors';
/* import - components and pages */
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import PrivateRoute from '../servises/PrivateRoute';

const AuthPage = lazy(() =>
  import('../pages/AuthPage' /*webpackChunkName: "AuthPage"*/),
);

const MainPage = lazy(() =>
  import('../pages/MainPage' /*webpackChunkName: "MainPage"*/),
);

const DashboardPage = lazy(() =>
  import('../pages/DashboardPage' /*webpackChunkName: "DashboardPage"*/),
);

const ResultPage = lazy(() =>
  import('../pages/ResultPage' /*webpackChunkName: "ResultPage"*/),
);

const MaterialsPage = lazy(() =>
  import('../pages/MaterialsPage' /*webpackChunkName: "MaterialsPage"*/),
);

const ContactsPage = lazy(() =>
  import('../pages/ContactsPage' /*webpackChunkName: "ContactsPage"*/),
);

class App extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <HashRouter>
        {isLoading && <Loader />}
        <Header />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={routes.AUTH_PAGE} component={AuthPage} />

            <PrivateRoute exact path={routes.MAIN_PAGE} component={MainPage} />

            <PrivateRoute
              path={routes.DASHBOARD_PAGE}
              component={DashboardPage}
            />

            <PrivateRoute path={routes.RESULT_PAGE} component={ResultPage} />

            <PrivateRoute
              path={routes.MATERIALS_PAGE}
              component={MaterialsPage}
            />
            <Route path={routes.CONTACTS_PAGE} component={ContactsPage} />

            <Redirect to={routes.MAIN_PAGE} />
          </Switch>
        </Suspense>

        <Footer />
      </HashRouter>
    );
  }
}

App.propTypes = {
  isLoading: T.bool.isRequired,
  getCurrentUser: T.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: globalSelectors.getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
