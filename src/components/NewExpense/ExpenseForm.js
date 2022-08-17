import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // METHOD 1 OF USING STATES
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // METHOD 2 OF USING STATES(one state approach), we depend on previous state values
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    // const titleChangeHandler = (event) => {
    //     // setUserInput({ ...userInput, enteredTitle: event.target.value });

    //     // this ensures that the state snapshot which it gives in the inner function will always be the latest state snapshot
    //     setUserInput((previousState) => {
    //         return { ...previousState, enteredTitle: event.target.value };
    //     });
    // };
    // const amountChangeHandler = (event) => {
    //     // setUserInput({ ...userInput, enteredAmount: event.target.value });
    //     setUserInput((previousState) => {
    //         return { ...previousState, enteredAmount: event.target.value };
    //     });
    // };
    // const dateChangeHandler = (event) => {
    //     // setUserInput({ ...userInput, enteredDate: event.target.value });
    //     setUserInput((previousState) => {
    //         return { ...previousState, enteredDate: event.target.value };
    //     });
    // };

    const formSubmitHandler = (event) => {
        event.preventDefault(); //to stop the page reload on form submit

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle(""); //to clear the inputs once the form is submitted
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle} //two-way binding
                        onChange={titleChangeHandler}
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2022-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        required
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
