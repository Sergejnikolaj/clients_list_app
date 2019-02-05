import {combineReducers} from 'redux';
import users from './gotData';
import search from './search';
import active from './active';

const allReducers = combineReducers({
	users,
	search,
	active
});

export default allReducers;