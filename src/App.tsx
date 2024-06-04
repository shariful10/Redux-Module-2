import {
	decrement,
	increment,
	decrementByValue,
	incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const App = () => {
	const { count } = useAppSelector((state) => state.counter);
	const dispatch = useAppDispatch();

	return (
		<div className="container mx-auto px-5 md:px-0 mt-10">
			<h1 className="text-2xl text-center font-semibold">React with Redux</h1>

			<div className="mt-10 w-[800px] mx-auto bg-purple-400 rounded-2xl p-10">
				<h2 className="text-center text-3xl font-medium text-white">{count}</h2>
				<div className="flex justify-center items-center mt-10 gap-4">
					<button
						onClick={() => dispatch(increment())}
						className="text-xl font-medium bg-green-500 py-2 px-5 rounded-md text-white"
					>
						Increment
					</button>
					<button
						onClick={() => dispatch(incrementByValue(5))}
						className="text-xl font-medium bg-green-500 py-2 px-5 rounded-md text-white"
					>
						Increment by 5
					</button>
					<button
						onClick={() => dispatch(decrement())}
						className="text-xl font-medium bg-red-500 py-2 px-5 rounded-md text-white"
					>
						Decrement
					</button>
					<button
						onClick={() => dispatch(decrementByValue(5))}
						className="text-xl font-medium bg-red-500 py-2 px-5 rounded-md text-white"
					>
						Decrement by 5
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
