import React, { useState } from "react";
import ExpenseFrom from "./ExpenseForm.js";
import './NewExpense.css'

const NewExpense = (props) =>{
    const [isFormVisible, setIsFormVisible] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsFormVisible(false);
    }
    const addNewExpenseHandler = () => { setIsFormVisible(true) }
    const hideFormHandler = () => { setIsFormVisible(false); }
    return (
        <div className="new-expense">
            {!isFormVisible && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
            {isFormVisible && <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} onCancel= {hideFormHandler}/>}
        </div>
    )
}

export default NewExpense;