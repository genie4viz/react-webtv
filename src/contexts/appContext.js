import React, {useReducer, createContext} from 'react';

const AppContext = createContext(null);

const initialState = {
    isAuthenticated: false
};

const appReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_ID':
            return {isAuthenticated: true};
        case 'UNREGISTER_ID':
            return {isAuthenticated: false};
        default:
            throw new Error('Unexpected action');
    }
};

const AppProvider = props => {
    const [store, dispatch] = useReducer(appReducer, initialState);
    return <AppContext.Provider value={{ store, dispatch }}>{props.children}</AppContext.Provider>;
  };
  
//   AppProvider.propTypes = {
//     children: PropTypes.object.isRequired
//   };
  
const AppConsumer = AppContext.Consumer;
export { AppContext, AppProvider, AppConsumer };