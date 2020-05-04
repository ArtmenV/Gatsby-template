// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./root-reducer";

// const composeEnhancers
// 	= typeof window !== "undefined"
//   	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 		: compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));
// const store = createStore(rootReducer, enhancer);

// window.store = store;

// export default store;

import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const composeEnhancers
	= typeof window !== "undefined"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose; // eslint-disable-line

const enhancer = composeEnhancers(applyMiddleware(thunk));

const createStore = () => reduxCreateStore(rootReducer, enhancer);

export default ({ element }) => (
	<Provider store={createStore()}>{element}</Provider>
)
