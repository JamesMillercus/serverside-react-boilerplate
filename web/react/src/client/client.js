// Start up point for client side application
import React from 'react';
import ReactDOM from 'react-dom';
// create redux store for state, hook up middleware inside of application
import { createStore, applyMiddleware } from 'redux';
// handle asynchronous acion creators
import thunk from 'redux-thunk';
// Ties store to react components
import { Provider } from 'react-redux';
// import Routes from './Routes';
import reducers from './reducers';
// import ClientRouter logic
import ClientRouter from './components/root/ClientRouter';
// set up the redux store on the client side
const store = createStore(reducers, {}, applyMiddleware(thunk));

// set up event handlers onto react code that was rendered from the server
// basically allows front end js to work
ReactDOM.hydrate(
	<Provider store={store}>
		<ClientRouter />
	</Provider>,
	document.querySelector('#root')
);

