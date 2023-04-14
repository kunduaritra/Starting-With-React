import './ExpenseItem.css'
function ExpenseItem (){
    const expenseDate = new Date(2023,4,14)
    const expenseTitle = "Car Insurence"
    const expenseAmount = 5000
    const locationOfExpenditure = 'Acko Car Insurence'
    return (
        <div className='expense-item'>
            <div>{expenseDate.toString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle} : Place: {locationOfExpenditure}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
    </div>
    );
}

export default ExpenseItem;