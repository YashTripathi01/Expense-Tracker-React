import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
    {
        id: "e1",
        title: "Groceries",
        amount: 1000,
        date: new Date(2021, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 100000,
        date: new Date(2022, 4, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 5000,
        date: new Date(2022, 8, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 4000,
        date: new Date(2022, 11, 12),
    },
];

const App = () => {
    useEffect(() => {
        document.title = "Expense Tracker";
    });

    const [expenses, setExpenses] = useState(dummyExpenses);

    const addExpenseHandler = (expense) => {
        setExpenses((previousExpenses) => {
            return [...previousExpenses, expense];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;

