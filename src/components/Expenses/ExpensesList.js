import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found!</h2>;
    }

    return (
        <div>
            <ul className="expenses-list">
                {props.items.map((exp) => (
                    <ExpenseItem
                        key={exp.id} // to uniquely identify the object
                        title={exp.title}
                        amount={exp.amount}
                        date={exp.date}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ExpensesList;
