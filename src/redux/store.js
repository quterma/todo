import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import throttle from "lodash.throttle";
import { loadState, saveState } from "../utils/localStorage";

// get state from localStorage
const persistedState = loadState();

const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
	preloadedState: persistedState,
});

// subscribes for setting state into localStorage
store.subscribe(
	throttle(() => {
		saveState(store.getState());
	}),
	1000
);

export default store;
