import React, {useReducer, createContext} from 'react';

const AppContext = createContext(null);

const initialState = {
    isAuthenticated: true,
    userInfo: {
        id: null,
        password: null
    }
};

const appReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_ID':
            return {
                isAuthenticated: true,
                userInfo: {
                    id: action.value.id,
                    password: action.value.password
                }
            };
        case 'UNREGISTER_ID':
            return {
                isAuthenticated: false,
                userInfo: {
                    id: null,
                    password: null
                }
            };
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