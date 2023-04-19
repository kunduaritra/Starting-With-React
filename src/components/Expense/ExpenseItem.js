import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card.js';
const ExpenseItem = (props) =>{
    return (
        <Card className='expense-item'>
            <ExpenseDate date ={props.date} /> 
            <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
        </Card>    
    )
}

export default ExpenseItem;