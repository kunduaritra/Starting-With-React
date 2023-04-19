import React from "react";
import Card from "../UI/Card";
const ExpenseDetails = (props) => {
    const deleteElement = () =>{
        console.log('Delete')
    }
    return (
            <Card className='expense-item__description'>
                <h2>{props.title} : Place: {props.location}</h2>
                <div className='expense-item__price'>{props.amount}</div>
                <button onClick={deleteElement}>Delete Expense</button>
            </Card>
    )
}

export default ExpenseDetails;