import React, { useContext } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { AppContext } from '../../contexts/appContext';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { store } = useContext(AppContext);
    return (
        <Route
            {...rest}
            render={props =>
                store.isAuthenticated
                ?   <Component {...props} />
                :   <Redirect to='/login' />
            }
        />
    );
}