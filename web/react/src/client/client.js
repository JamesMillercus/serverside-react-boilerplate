// Start up point for client side application
import React from 'react';
import ReactDOM from 'react-dom';
// React's router
import { BrowserRouter } from 'react-router-dom';
// create redux store for state, hook up middleware inside of application
import { createStore, applyMiddleware } from 'redux';
// handle asynchronous acion creators
import thunk from 'redux-thunk';
// Ties store to react components
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';

// set up the redux store on the client side
const store = createStore(reducers, {}, applyMiddleware(thunk));

// set up event handlers onto react code that was rendered from the server
// basically allows front end js to work
ReactDOM.hydrate(
	// <Provider store={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>,
	// </Provider>,
	document.querySelector('#root')
);

