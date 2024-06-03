import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialState = {
	count: number;
};

const initialState: TInitialState = {
	count: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		incrementByValue: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
		decrementByValue: (state, action: PayloadAction<number>) => {
			state.count -= action.payload;
		},
	},
});

export const { increment, decrement, incrementByValue, decrementByValue } =
	counterSlice.actions;

export default counterSlice.reducer;
