import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const expensedatahandeler = enteredexpensedata =>{
    const expensedata={
      ...enteredexpensedata,
      id:Math.random().toString()
    }
    props.onsaveexpensedata(expensedata)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onexpensedata={expensedatahandeler}/>
    </div>
  )
}

export default NewExpense
