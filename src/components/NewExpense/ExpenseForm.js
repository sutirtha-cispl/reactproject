import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) =>{

	//-- using state to get the form value (single input)--//
	const [enteredTitle, setEnteredTitle] = useState(''); 
	const TitleChangeHandler = (event) =>{
		setEnteredTitle(event.target.value);
		console.log('input value', enteredTitle);

	};

	const [enteredDate, setEnteredDate] = useState(''); 
	const DateChangeHandler = (event) =>{
		setEnteredDate(event.target.value);
		console.log('input value', enteredDate);

	};

	const [enteredPrice, setEnteredPrice] = useState(''); 
	const PriceChangeHandler = (event) =>{
		setEnteredPrice(event.target.value);
		console.log('input value', enteredPrice);

	};

	//-- using multiple user input in a single state --//
	// const [UserInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredDate: '',
	// 	enteredPrice: ''
	// });

	// const TitleChangeHandler = (event) =>{
	// 	setUserInput((prevState) => {
	// 		return {...prevState, enteredTitle: event.target.value}
	// 	});
	// };
	// const DateChangeHandler = (event) =>{
	// 	setUserInput((prevState) => {
	// 		return {...prevState, enteredDate: event.target.value}
	// 	});
	// };
	// const PriceChangeHandler = (event) =>{
	// 	setUserInput((prevState) => {
	// 		return {...prevState, enteredPrice: event.target.value}
	// 	});
	// };

	//-- handling the form submit --//
	const FormSubmitHandler = (event) =>{
		event.preventDefault();
		
		const FormData = {
			title: enteredTitle,
			date: new Date(enteredDate),
			amount: enteredPrice
		};
		console.log('form submit',FormData);
		//-- sending form entered data to parent component for adding up records into listing ---//
		props.onSaveExpenseData(FormData);
		//-- making form fields empty after frm submit --//
		setEnteredTitle('');
		setEnteredDate('');
		setEnteredPrice('');
	};

	return(
		<form onSubmit={FormSubmitHandler} >
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input 
					type='text' 
					value={enteredTitle} 
					onChange={TitleChangeHandler} 
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input 
					type='date' 
					min='2019-9-14' 
					max='2022-12-31' 
					value={enteredDate} 
					onChange={DateChangeHandler} 
					/>
				</div>
				<div className='new-expense__control'>
					<label>Price</label>
					<input 
					type='number' 
					min='0.01' 
					step='0.01' 
					value={enteredPrice} 
					onChange={PriceChangeHandler} 
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);

}
export default ExpenseForm;