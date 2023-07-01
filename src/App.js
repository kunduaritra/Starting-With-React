import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense.js";
import ExpenseFilter from "./components/Expense/ExpenseFilter";
import ExpenseList from "./components/Expense/ExpenseList.js";
import ExpenseChart from "./components/Expense/ExpenseChart.js";
import Card from "./components/UI/Card";

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpenditure: 'Stationary Shop',
  },
  { id: 'e2', 
  title: 'New TV', 
  amount: 799.49, 
  date: new Date(2021, 2, 12), 
  locationOfExpenditure: 'Croma', 
},
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: 'Acko Car Insuarnce',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpenditure: 'Sharma farniture',
  }
]

const App = () =>{
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const [filteredYear, setFilteredYear] = useState('2021');

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  const filterExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString()=== filteredYear;
  });

  return (
    <Card className="expenses">
      <NewExpense onAddExpense= {addExpenseHandler} />
      <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChangeHandler} />
      <ExpenseChart expense={filterExpenses}/>
      <ExpenseList items = {filterExpenses}/>
    </Card>
  );
}

export default App;