import { applyMiddleware, createStore } from "redux";
import allReducers from "../reducers/index";
import logger from "redux-logger";

export const store = createStore(allReducers, applyMiddleware(logger));
