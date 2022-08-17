import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// react component/function gets one parameter props, which is an object {'key': 'value'}
const ExpenseItem = (props) => {
    // useState hook always returns an array with exactly 2 elements, where the 1 element is the current state value and the 2 element is a function for updating that value.

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">₹{props.amount}</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;
