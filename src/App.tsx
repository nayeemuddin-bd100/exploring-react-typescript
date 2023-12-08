import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";
import HooksTs from "./hooks-ts/HooksTs";

function App() {
	const [count, setCount] = useState<number>(0);

	return (
		<>
			<Heading title={"Helloooo Typescript"} />

			<Section title={"This is section"}>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
					velit!
				</p>
			</Section>

			<div className="counter">
				<Counter setCount={setCount}>Total Count is {count}</Counter>
			</div>

			<List
				items={["Tea", "Coffee", "Drink"]}
				render={(item: string) => <span> {item} </span>}
			/>

			<HooksTs />
		</>
	);
}

export default App;
