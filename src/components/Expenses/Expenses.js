import React, { useEffect, useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  useEffect(() => {
    props.getfiltered(filterdExpenses)
    console.log(filterdExpenses)
  }, [filteredYear])

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterdExpenses = props.items.filter(expense =>{
    return (expense.date.getFullYear().toString()===filteredYear)
  });
  
  return (
    
    <li >
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterdExpenses} />
        <ExpensesList items={filterdExpenses}/>
      </Card>
    </li>
  );
};

export default Expenses;