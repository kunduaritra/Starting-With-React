import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseFrom = (props) => {
    const [enteredtitle, setEnteredTitle] = useState('')
    const [enteredAmount , setEnteredAmount ] = useState('')
    const [enteredDate  , setEnteredDate ] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // })
    const titleChangeHandler = (event) =>{
        // console.log('changed title')
        setEnteredTitle(event.target.value)
        // Method 2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // method 3
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }
    const amountChangeHandler = (event) =>{
        // console.log('changed amount')
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterAmount: event.target.value,
        // })
    }
    const dateChangeHandler = (event) =>{
        // console.log('changed date')
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value,
        // })
    }
    const addExpense = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredtitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
        <form onSubmit={addExpense}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title:</label>
                    <input 
                    type="text" 
                    id="title" 
                    value={enteredtitle} 
                    onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="title">Date:</label>
                    <input type="date" id="date" min="2019-01-01" max="2023-04-24" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseFrom;