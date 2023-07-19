import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from "./components/NewExpense";

function App() {
  const expenses = [
    {id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e2', title: 'Toilet Paper', amount: 94.12, date: new Date(2021, 3, 28)},
    {id: 'e3', title: 'New Bed', amount: 500.00, date: new Date(2021, 4, 28)},
    {id: 'e4', title: 'Internet', amount: 100.00, date: new Date(2021, 5, 28)}
  ];

  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
