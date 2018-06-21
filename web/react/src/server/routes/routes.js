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
		}).map(promise => {
			// if null value from promise (something went wrong)
			if (promise) {
				return new Promise((resolve, reject) => {
					// return a resolved promise
					promise.then(resolve).catch(resolve);
				});
			}
		})
		// once all our data requests have been completed
		Promise.all(promises).then(() => {
			const context = {};
			const content = renderer(req, store, context);
			if(context.url) {
				return res.redirect(301, context.url);
			}
			if (context.notFound) res.status(404);
			// send initialised store to the renderer
			res.send(content);
		});
	});
}