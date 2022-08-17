import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {/* METHOD 2 */}
            {/* {filteredExpenses.length === 0 ? (
                <p>No expenses found!</p>
            ) : (
                filteredExpenses.map((exp) => (
                    <ExpenseItem
                        key={exp.id} // to uniquely identify the object
                        title={exp.title}
                        amount={exp.amount}
                        date={exp.date}
                    />
                ))
            )} */}
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />

            {/* <ExpenseItem
                date={props.items[0].date}
                title={props.items[0].title}
                amount={props.items[0].amount}
            /> */}
        </Card>
    );
};

export default Expenses;
