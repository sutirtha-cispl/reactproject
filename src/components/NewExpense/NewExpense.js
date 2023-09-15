import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) =>{
	const saveExpenseDataHandler = (enteredExpenseData) =>{
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		console.log('form data recieved(NewExpense)',expenseData);
		//--- Sending form data to app.js ---//
		props.onSaveExpense(expenseData);

	};

	return(
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
}
export default NewExpense;