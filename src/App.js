import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
	const expense = [
		{ title: "Car Insurance", amount: "$255", date: new Date(2022, 2, 4) },
		{ title: "Bike Insurance", amount: "$155", date: new Date(2022, 3, 5) },
		{
			title: "Bycycle Insurance",
			amount: "$55",
			date: new Date(2022, 4, 6),
		},
		{
			title: "Plastic Bike Insurance",
			amount: "$5",
			date: new Date(2022, 5, 7),
		},
	];

	return (
		<div>
			<NewExpense />
			<Expenses expense={expense} />
		</div>
	);
}

export default App;
