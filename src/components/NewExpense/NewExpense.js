import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.floor(Math.random() * 101).toString(),
      ...enteredExpenseData
    };
    if(expenseData.title==="" ||expenseData.date===""||expenseData.amount===""){
      props.setAlert('error','Please Enter Values !')
    }
    else{
      props.onAddExpense(expenseData);
    setIsEditing(false);
    console.log(expenseData.title)
    props.setAlert('success','Your Exoense Successfully Added!')
    }
    
    

  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;