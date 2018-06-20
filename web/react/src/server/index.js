//** NODEJS IMPORTS **//
import 'babel-polyfill';
import express from 'express';
//** Declare express app **//
const app = express();
//** SET MIDDLEWARES **//
require('./middlewares/apiProxy')(app);
//** SET CLIENT ASSETS **//
app.use(express.static('./build/client'));
//** SET HOME ROUTE **//
require('./routes/routes')(app);
//** Initialise express app on port 3000 **//
app.listen(3000, () => {
	console.log('Listening on port 3000');
});