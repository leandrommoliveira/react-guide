import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from "./ExpensesFilter";

import './ExpensesFilter.css';
import './Expenses.css';


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.expenses.map(expense => (
          <ExpenseItem
            expense={expense}
          >
          </ExpenseItem>
        ))}
      </Card>
    </div>
  );    
}

export default Expenses;