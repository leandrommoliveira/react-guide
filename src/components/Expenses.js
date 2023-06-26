import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';


function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map(expense => (
        <ExpenseItem
          expense={expense}
        >
        </ExpenseItem>
      ))}
    </Card>
  );    
}

export default Expenses;