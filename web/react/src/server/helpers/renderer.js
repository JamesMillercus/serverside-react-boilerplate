import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './../../client/Routes';

export default (req, store) => {
	// load react components
	const content = renderToString(
		// connect the redux store to the react application
		<Provider store={store}>
			// load in the url from express req and an empty object into context
			<StaticRouter location = {req.path} context={{}}>
				<Routes />
			</StaticRouter>
		</Provider>
	);
	// load front end js
	return `
		<html>
			<head> </head>
			<body> 
				<div id ="root">${content}</div>
				<script src ="bundle.js"></script>
			</body>
		</html>
	`;
};