import { FC, useState } from 'react'

const Counter: FC = function () {
	const [count, setCount] = useState<number>(0);

	const increment = () => {
		setCount(count + 1);
	}

	const decrement = () => {
		setCount(count - 1);
	}

	return (
		<div>
			<button onClick={increment}>Increase</button>
			<button onClick={decrement}>Decrease</button>
			<h1>{count}</h1>
		</div>
	)
}

export default Counter
