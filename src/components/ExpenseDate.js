import './ExpenseDate.css';

function ExpenseDate(props) {
  const mount = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{mount}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );    
}

export default ExpenseDate;