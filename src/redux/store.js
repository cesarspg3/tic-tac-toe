import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './appDucks';
import progressBarReducer from './progressBarDucks';
import formDataReducer from './formDataDucks';

const rootReducer = combineReducers({
    progressBar: progressBarReducer,
    app: appReducer,
    formData: formDataReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}
