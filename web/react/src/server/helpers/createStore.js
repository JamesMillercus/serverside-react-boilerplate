import { createStore, applyMiddleware } from 'redux';
// handle asynchronous acion creators
import thunk from 'redux-thunk';
// import reducers from client
import reducers from '../../client/reducers';

export default () => {
	const store = createStore(reducers, {}, applyMiddleware(thunk));
	return store;
};