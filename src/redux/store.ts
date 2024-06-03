import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
