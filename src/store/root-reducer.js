import { combineReducers } from "redux";

import { counter } from "./counter/reducer";
import { users } from "./user/reducer";

export default combineReducers({
	counter,
	users
});
