import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import "./ExpenseItem.css";

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title)

    console.log("ExpenseItem Evaluate by React");
    
    function ChangeState(){
        setTitle("Updated!");
        console.log(title);
    };
    return (
       
       
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">Rs.{props.amount}</div>
                <button onClick={ChangeState}>Change Title</button>
            </div>
       
        </Card>
    );
}

export default ExpenseItem;