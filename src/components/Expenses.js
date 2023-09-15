import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';


function Expenses(props) {

	const [filteredYear, setFilteredYear] = useState('2020');

	const changeFilterHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	console.log('Selected Year',filteredYear);

	//-- after select date this will show the filtered expense into expense list --//
	const filteredExpenses = props.items.filter(expenses => {
		return expenses.date.getFullYear().toString() === filteredYear;
	});

	return (
	    <Card className="expenses">
	    <ExpensesFilter 
	    	selected={filteredYear} 
	    	onChangefilter={changeFilterHandler} 
	    />
	    
	    {filteredExpenses.map((expenses) => (
	    	<ExpenseItem 
	    	key={expenses.id}
	        title={expenses.title} 
	        amount={expenses.amount} 
	        date={expenses.date} />
	    ))}

	      
	    {/*  <ExpenseItem 
	        title={props.items[1].title} 
	        amount={props.items[1].amount} 
	        date={props.items[1].date} 
	      ></ExpenseItem>
	      <ExpenseItem 
	        title={props.items[2].title} 
	        amount={props.items[2].amount} 
	        date={props.items[2].date} 
	      ></ExpenseItem>
	      <ExpenseItem 
	        title={props.items[3].title} 
	        amount={props.items[3].amount} 
	        date={props.items[3].date} 
	      ></ExpenseItem>*/}
	    </Card>
  	);
}
export default Expenses;