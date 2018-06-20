import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
// check which route has been pased into App
// load that routes components under the header component
const App = ({ route }) => {
	return (
		<div>
			<Header />
			<div>{renderRoutes(route.routes)}</div>
		</div>
	)
}

export default {
	component: App
};