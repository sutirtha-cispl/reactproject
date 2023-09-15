import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';


function ExpenseItem(props) {

	const expenseDate = props.date;
	const expenseTitle = props.title;
	const expensePrice = props.amount;

	//const title = expenseTitle;

	//-- using state to update expenseTitle --//
	 const [title, setTitle] = useState(expenseTitle);

	//-- another way of defining function --//
	const clickHandler = () =>{
		setTitle('Title Updated');
		console.log('test',expenseTitle);
	}
	//-- using state to update expenseTitle --//
	
	return (
		<Card className="expense-item" >
			<ExpenseDate date={expenseDate}></ExpenseDate>
			<div className="expense-item__description" >
				<h2>{title}</h2>
				<Card className="expense-item__price" >${expensePrice}</Card>
			</div>
			<button className="expense-item__price" onClick={ clickHandler }>Update item</button>
		</Card>
	);
}

export default ExpenseItem;
