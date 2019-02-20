import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import placeReducer from './reducers/places';
import authReducer from './reducers/auth';
import uiReducer from "./reducers/ui";
import profileReducer from "./reducers/profile";
import projectReducer from "./reducers/project";

const rootReducer = combineReducers({
   // places : placeReducer,
    auth : authReducer,
    ui: uiReducer, 
    project: projectReducer, 
   // profile: profileReducer,
});
  

const middleware = [thunk];

let composeEnhancers = compose;

if(__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () =>{
    // return createStore(rootReducer, composeEnhancers(
    //     applyMiddleware(...middleware)
    // ));
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;