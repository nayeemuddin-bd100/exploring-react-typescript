/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";

interface User {
	name: string;
	email: string;
	phone: number;
}
const HooksTs = () => {
	const [count, setCount] = useState<number | null>(0);
	const [user, setUser] = useState<User | null>(null);
	const [value, setValue] = useState<string>("");

	useEffect((): void => {
		console.log("Mounting");
		setUser({
			name: "Nayeem",
			email: "nayeem@gmail.com",
			phone: 123,
		});
	}, []);


  // const increment = () => {
  //   console.log("helloooo")
	// 	setCount((prevCount) => prevCount + 1);
	// };
  const increment = useCallback(() => {
    console.log("helloooo");
		setCount((prevCount) => prevCount + 1);
	}, []);
	return (
		<div>
			<p>state count is {count}</p>
			<button onClick={increment}>Add</button>
		</div>
	);
};

export default HooksTs;
