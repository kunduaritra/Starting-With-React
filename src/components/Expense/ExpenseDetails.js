import React, { useState } from "react";
import Card from "../UI/Card";
const ExpenseDetails = (props) => {
    const [title, setTitle] = useState(props.title)
    const [expense, setExpense] = useState (props.amount)
    const changeTitle = () =>{
        setTitle('Changed Title')
        console.log(title)
    }
    const changeExpence = () =>{
        setExpense('$100')
    }
    return (
            <div className='expense-item__description'>
                <h2>{title} : Place: {props.location}</h2>
                <div className='expense-item__price'>{expense}</div>
                <button onClick={changeExpence}>Expense $100</button>
                <button onClick={changeTitle}>Change Title</button>
            </div>
    )
}

export default ExpenseDetails;