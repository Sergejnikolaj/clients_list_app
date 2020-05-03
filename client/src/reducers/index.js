import { combineReducers } from "redux";
import users from "./getData";
import search from "./search";
import active from "./active";
import checkedList from "./checkPerson";
import modal from "./modal";
import showSpinner from "./spinner";
import colorTheme from "./colorTheme";

const allReducers = combineReducers({
  users,
  search,
  active,
  checkedList,
  modal,
  showSpinner,
  colorTheme,
});

export default allReducers;
