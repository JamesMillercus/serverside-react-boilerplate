import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
// import routes
import Routes from './../client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
app.use(express.static('./build/client'));

app.get('*', (req, res) => {
	// set up the redux store on the server side
	const store = createStore();

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

app.listen(3000, () => {
	console.log('Listening on port 3000');
});