import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Sum from './components/sum/Sum';
const Dummy_data = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



const App=()=> {
  const [filteredyear,setfilteredyear]=useState([])
  const [expenses,setexpenses] = useState(Dummy_data)
  const addexpensehandeler = data =>{
  setexpenses(prevExpenses =>{
    return [data,...prevExpenses]
  })
  expenses.map(exp=>{
    localStorage.setItem(exp.id,exp.amount)
    return 0;
  })
  
  };

  const filter=(index)=>{
    setfilteredyear(index);
  }

  
  

  return (
    <div>
      <NewExpense onAddExpense={addexpensehandeler}/>
      <Sum items={expenses} fy={filteredyear} />
      <Expenses items={expenses} getfiltered={filter}/>
    </div>
  );
}

export default App;