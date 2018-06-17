// Start up point for client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

// set up event handlers onto react code that was rendered from the server
// basically allows front end js to work
ReactDOM.hydrate(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
	document.querySelector('#root')
);

