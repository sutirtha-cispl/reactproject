import React, {useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
      id: '987650',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: '565434', 
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12) },
    {
      id: '5678432',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: '5673297',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  //-- this handler used for getting the data from child component to parent, using props property ----//
  const saveExpenseHandler = (enteredExpenseData) =>{
    
    console.log('app.js',enteredExpenseData);
    
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses];
    });

  };

  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
