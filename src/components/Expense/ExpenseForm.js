import React from "react";

const ExpenseFrom = () => {
    const showInput = () =>{
            console.log(document.getElementById('title').value)
    }
    
    return (
        <div>
            <form>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={showInput} />
            <label htmlFor="amount">Amount:</label>
            <input type="text" id="amount" onChange={showInput} />
            <label htmlFor="title">Date:</label>
            <input type="date" id="date" onChange={showInput} />
            <button>Add Expense</button>
            </form>
        </div>
    )
}

export default ExpenseFrom;