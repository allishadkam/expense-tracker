import './ExpenseForm.css'
import React,{useState} from 'react'


const ExpenseForm = (props) => {
  const [enterdtitle,setenterdtitle]  =useState('');
  const [enterdamount,setenterdamount]  =useState('');
  const [enterddate,setenterddate]  =useState('');


  const submithandeler=(e)=>{
    e.preventDefault();
    const expensedata={
        title:enterdtitle,
        amount:enterdamount,
        date:new Date(enterddate)
    }
    props.onexpensedata(expensedata);

    setenterdtitle('');
    setenterdamount('');
    setenterddate('');
  }

  const titelchangehandeler=(e)=>{
    setenterdtitle(e.target.value);
  }  
  const amountchangehandeler=(e)=>{
    setenterdamount(e.target.value);
  }  
  const datechangehandeler=(e)=>{
    setenterddate(e.target.value)
  }  

  return (
    <form onSubmit={submithandeler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enterdtitle} onChange={titelchangehandeler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.1' step='0.01' value={enterdamount} onChange={amountchangehandeler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-1-1' max='2023-4-18' value={enterddate} onChange={datechangehandeler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
      
    </form>
  )
}

export default ExpenseForm
