import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes';
/* import - components and pages */
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AuthPage from '../pages/AuthPage/AuthPage';
import MainPage from '../pages/MainPage/MainPage';
import DashboardPage from '../pages/DashboardPage/DashboardPageContainer';
import ResultPage from '../pages/ResultPage/ResultPage';
import MaterialsPage from '../pages/MaterialsPage/MaterialsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import Loader from './Loader/Loader';

const App = () => {
  return (
    <BrowserRouter>
      <Loader />
      <Header />

      <Switch>
        <Route path={routes.AUTH_PAGE} component={AuthPage} />
        <Route path={routes.MAIN_PAGE} component={MainPage} />
        <Route exact path={routes.DASHBOARD_PAGE} component={DashboardPage} />
        <Route path={routes.RESULT_PAGE} component={ResultPage} />
        <Route path={routes.MATERIALS_PAGE} component={MaterialsPage} />
        <Route path={routes.CONTACTS_PAGE} component={ContactsPage} />

        <Redirect to={routes.MAIN_PAGE} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
