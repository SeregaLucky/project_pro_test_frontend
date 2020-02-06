import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';
import authOperations from '../redux/auth/authOperations';
/* import - components and pages */
import Header from './Header/Header';
import Footer from './Footer/Footer';
// import AuthPage from '../pages/AuthPage/AuthPage';
// import MainPage from '../pages/MainPage/MainPage';
// import DashboardPage from '../pages/DashboardPage/DashboardPageContainer';
// import ResultPage from '../pages/ResultPage/ResultPageContainer';
// import MaterialsPage from '../pages/MaterialsPage/MaterialsPage';
// import ContactsPage from '../pages/ContactsPage/ContactsPage';

import Loader from './Loader/Loader';
import PrivateRoute from '../servises/PrivateRoute';

const AuthPage = lazy(() =>
  import('../pages/AuthPage/AuthPage' /*webpackChunkName: "AuthPage"*/),
);

const MainPage = lazy(() =>
  import('../pages/MainPage/MainPage' /*webpackChunkName: "MainPage"*/),
);

const DashboardPage = lazy(() =>
  import(
    '../pages/DashboardPage/DashboardPageContainer' /*webpackChunkName: "DashboardPage"*/
  ),
);

const ResultPage = lazy(() =>
  import('../pages/ResultPage' /*webpackChunkName: "ResultPage"*/),
);

const MaterialsPage = lazy(() =>
  import(
    '../pages/MaterialsPage/MaterialsPage' /*webpackChunkName: "MaterialsPage"*/
  ),
);

const ContactsPage = lazy(() =>
  import(
    '../pages/ContactsPage/ContactsPage' /*webpackChunkName: "ContactsPage"*/
  ),
);

class App extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Loader />
        <Header />

        <Suspense fallback={<div>Loading...</div>}>
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
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
