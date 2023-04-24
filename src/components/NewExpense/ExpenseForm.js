import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseFrom = () => {
    const [enteredtitle, setEnteredTitle] = useState('')
    const [enteredAmount , setEnteredAmount ] = useState('')
    const [enteredDate  , setEnteredDate ] = useState('')
    const showInput = (event) =>{
        console.log('changed title')
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) =>{
        console.log('changed amount')
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        console.log('changed date')
        setEnteredDate(event.target.value)
    }
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={showInput} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="title">Date:</label>
                    <input type="date" id="date" min="2019-01-01" max="2023-04-24" onChange={dateChangeHandler} />
                </div>
                </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseFrom;