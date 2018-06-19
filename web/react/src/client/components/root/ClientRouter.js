import React from 'react';
// React's router
import { BrowserRouter } from 'react-router-dom';
// import routes
import Routes from './../../Routes';
// declare ClientRouter logic
const ClientRouter = () => {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
 	);
};

export default ClientRouter;