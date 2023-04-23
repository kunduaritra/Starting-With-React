import React from "react";
import ExpenseFrom from "./ExpenseForm.js";
import './NewExpense.css'

const NewExpense = () =>{
    return (
        <div className="new-expense">
            <ExpenseFrom />
        </div>
    )
}

export default NewExpense;