import { createStore } from 'redux';
import allReducers from '../reducers/index';

export const store = createStore(allReducers);