import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Routes from './../../Routes';

const ServerRouter = (req, store) => {
	return (
		// load in the url from express req and an empty object into context
		<StaticRouter location = {req.path} context={{}}>
			<Routes />
		</StaticRouter>
 	);
};

export default ServerRouter;