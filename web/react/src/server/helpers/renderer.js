import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
// import ServerRouter from './../../client/components/root/ServerRouter';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from './../../client/routes/Routes';

export default (req, store) => {
	// load react components
	const content = renderToString(
		// connect the redux store to the react application
		// send the route req and redux store to the react router
		<Provider store={store}>
			<StaticRouter location = {req.path} context={{}}>
				<div>{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>
	);
	// load front end js
	return `
		<html>
			<head> </head>
			<body> 
				<div id ="root">${content}</div>
				<script> 
					window.INITIAL_STATE = ${serialize(store.getState())}
				</script>
				<script src ="bundle.js"></script>
			</body>
		</html>
	`;
};