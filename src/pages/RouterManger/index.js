import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage';
import DashboardPage from '../DashboardPage';
import ViewPage from '../ViewPage';
import { AppContext } from '../../contexts/appContext';
import { PrivateRoute } from '../PrivateRoute';

const RouterManager = () => {

  const {store} = useContext(AppContext);

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path='/dashboard' component={DashboardPage} />
        <PrivateRoute path='/view/:page' component={ViewPage} />        
        <Route path='/' render={() => 
          store.isAuthenticated ? <DashboardPage /> : <LoginPage />
        }/>
      </Switch>      
    </BrowserRouter>
  );
}

export default RouterManager;