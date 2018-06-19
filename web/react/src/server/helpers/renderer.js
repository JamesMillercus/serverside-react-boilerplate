import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import ServerRouter from './../../client/components/root/ServerRouter';

export default (req, store) => {
	// load react components
	const content = renderToString(
		// connect the redux store to the react application
		// send the route req and redux store to the react router
		<Provider store={store}>
			<ServerRouter req={req} store={store} />
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