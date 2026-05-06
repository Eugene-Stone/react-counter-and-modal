import { Dispatch, SetStateAction } from 'react';
import './Counter.scss';
type CounterType = {
	count: number;
	setCount: React.Dispatch<SetStateAction<number>>;
};

function Counter({ count, setCount }: CounterType) {
	function handleCountIncrement() {
		setCount(count + 1);
	}
	function handleCountDecrement() {
		if (count > 0) {
			setCount(count - 1);
		}
	}

	return (
		<div className="counter">
			<div>
				<h2>Counter:</h2>
				<h1>{count}</h1>
				<button onClick={handleCountDecrement} className="minus">
					- Minus
				</button>
				<button onClick={handleCountIncrement} className="plus">
					Plus +
				</button>
			</div>
		</div>
	);
}

export default Counter;
