import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseFrom = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const addExpense = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setIsFormVisible(false);
    };
    const showFormHandler = () =>{
        setIsFormVisible(true);
    }
    const hideFormHandler = () => {
        setIsFormVisible(false);
    }

    let expenseContent = <button onClick={showFormHandler}>Add New Expense</button>;

    if(isFormVisible) {
        expenseContent = 
            <form onSubmit={addExpense}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title:</label>
                        <input 
                            type="text" 
                            id="title" 
                            value={enteredTitle} 
                            onChange={titleChangeHandler} 
                        />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount:</label>
                        <input 
                            type="number" 
                            id="amount" 
                            min="0.01" 
                            step="0.01" 
                            value={enteredAmount} 
                            onChange={amountChangeHandler} 
                        />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="date">Date:</label>
                        <input 
                            type="date" 
                            id="date" 
                            min="2019-01-01" 
                            max="2023-06-28" 
                            value={enteredDate} 
                            onChange={dateChangeHandler} 
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={hideFormHandler}>Cancel</button><button type="submit">Add Expense</button>
                </div>
            </form>
    };

    return (
        <div>
            {expenseContent}
        </div>
    );
};

export default ExpenseFrom;
