// import routes
import { matchRoutes } from 'react-router-config';
import Routes from './../../client/routes/Routes';
import renderer from './../helpers/renderer';
import createStore from './../helpers/createStore';

module.exports = (app) => {	

	app.get('*', (req, res) => {
		// set up the redux store on the server side
		const store = createStore(req);
		// check all react routes vs req path and return a list of components to be rendered
		const promises = matchRoutes(Routes, req.path).map(({ route }) => {
			// if route.loadData exists then call loadData(), else do nothing
			return route.loadData ? route.loadData(store) : null;
		});
		// once all our data requests have been completed
		Promise.all(promises).then(() => {
			// console.log(renderer(req, store));
			// send initialised store to the renderer
			res.send(renderer(req, store));
		});
	});
}