import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';
import authOperations from '../redux/auth/authOperations';
/* import - components and pages */
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AuthPage from '../pages/AuthPage/AuthPage';
import MainPage from '../pages/MainPage/MainPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import ResultPage from '../pages/ResultPage';
import MaterialsPage from '../pages/MaterialsPage/MaterialsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import Loader from './Loader/Loader';
import PrivateRoute from '../servises/PrivateRoute';

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

        <Switch>
          <Route path={routes.AUTH_PAGE} component={AuthPage} />
          <PrivateRoute
            exact
            path={routes.DASHBOARD_PAGE}
            component={DashboardPage}
          />
          <PrivateRoute path={routes.RESULT_PAGE} component={ResultPage} />
          <PrivateRoute
            path={routes.MATERIALS_PAGE}
            component={MaterialsPage}
          />
          <PrivateRoute path={routes.MAIN_PAGE} component={MainPage} />
          <Route path={routes.CONTACTS_PAGE} component={ContactsPage} />

          <Redirect to={routes.MAIN_PAGE} />
        </Switch>

        <Footer />
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
