import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
app.use(express.static('./build/client'));

app.get('*', (req, res) => {
	// set up the redux store on the server side
	const store = createStore();
	// send initialised store to the renderer
	res.send(renderer(req, store));
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});