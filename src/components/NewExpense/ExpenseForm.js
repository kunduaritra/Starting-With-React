import React from "react";
import './ExpenseForm.css'

const ExpenseFrom = () => {
    const showInput = (event) =>{
            console.log(event.target.value)
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
                    <input type="number" id="amount" min="0.01" step="0.01" onChange={showInput} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="title">Date:</label>
                    <input type="date" id="date" min="2019-01-01" max="2023-04-24" onChange={showInput} />
                </div>
                </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseFrom;