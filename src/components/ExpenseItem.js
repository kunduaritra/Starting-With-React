import './ExpenseItem.css'
function ExpenseItem (){
    return (
        <div className='expense-item'>
            <div>April 14th 2023</div>
            <div className='expense-item__description'>
                <h2>Car Insurence</h2>
                <div className='expense-item__price'>₹5000</div>
            </div>
    </div>
    );
}

export default ExpenseItem;