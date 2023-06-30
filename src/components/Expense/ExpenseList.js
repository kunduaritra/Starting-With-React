import React from 'react';
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    // let expenseContent = <p>No record found.</p>
    if(props.items.length === 0 ){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    } 
    if(props.items.length === 1){
        return <div>
            <ExpenseItem
            key={props.items[0].id}
            title={props.items[0].title}
            date={props.items[0].date}
            amount={props.items[0].amount}
            location={props.items[0].locationOfExpenditure}
            />
            <h2 className="expenses-list__fallback">Only a single expense here. Please add more...</h2>
        </div>
    }
    return <>
        <ul className='expenses-list'>
        {props.items.map((exp, index) => (
        <ExpenseItem
            key={exp.id}
            title={exp.title}
            date={exp.date}
            amount={exp.amount}
            location={exp.locationOfExpenditure}
        />
        ))}
    </ul>
    </>

}

export default ExpenseList;