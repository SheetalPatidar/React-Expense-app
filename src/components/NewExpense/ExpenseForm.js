import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Single State
    
    // const [userInput, setUserInput] = useState(
    //     {
    //         enteredTitle : '',
    //         enteredAmount : '',
    //         enteredDate : '',
    //     }
    // );
    
    const titleChnageHandler=(event)=>{
        setEnteredTitle(event.target.value);

        //if you depend on previous state use this approach
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    };
 
    const AmountChnageHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
    const DateChnageHandler=(event)=>{
        setEnteredDate(event.target.value);
    };

    const submitHandeler = (event) =>{
        event.preventDefault();

        const expenseData=()=>{
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };

        console.log(expenseData);
    }
    return <form onSubmit={submitHandeler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChnageHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' onChange={AmountChnageHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min='2019-01-01' max='2022-12-31' onChange={DateChnageHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;