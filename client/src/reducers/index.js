import {combineReducers} from 'redux';
import users from './getData';
import search from './search';
import active from './active';
import checkedList from './checkPerson';
import modal from './modal';

const allReducers = combineReducers({
	users,
	search,
	active,
	checkedList,
	modal,
});

export default allReducers;