import React, { ReactNode } from "react";

type CounterProps = {
	children: ReactNode;
	setCount: React.Dispatch<React.SetStateAction<number>>;
};
const Counter = ({children , setCount}: CounterProps) => {

	return (
		<div>
      <p> { children}</p>

			<button onClick={() => setCount((prev) => prev + 1)}>+</button>
			<button onClick={() => setCount((prev) => prev - 1)}>-</button>
		</div>
	);
};

export default Counter;
