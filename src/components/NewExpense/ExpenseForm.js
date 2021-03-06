import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = () => {
	const [Title, setTitle] = useState("");
	const [Amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};
	const dateChangeHandler = (event) => {
		setDate(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setAmount(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: Title,
			amount: Amount,
			date: new Date(date),
		};
		console.log(expenseData);
		setAmount("");
		setDate("");
		setTitle("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={Title}
						onChange={titleChangeHandler}
					></input>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={Amount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2020-01-01"
						max="2023-12-31"
						value={date}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};
export default ExpenseForm;
