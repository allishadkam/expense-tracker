
import React,{useState,useEffect} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Sum from './components/sum/Sum';
import Alertt from './components/UI/Alert'

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
  const [alert  ,setalert ]=useState(null);


  const addexpensehandeler = data =>{
  setexpenses(prevExpenses =>{
    return [data,...prevExpenses]
  })};


  const showAlert =(type,msg)=>{
    //console.log(type)
    setalert({ message:msg , type:type })
    //console.log(alert)
    setTimeout(() => {
      //console.log("inside timeout")
      //console.log(alert)
      setalert(null);
    }, 3000);
  }
  
  

useEffect(() => {
  expenses.map(exp=>{
    localStorage.setItem(exp.id, JSON.stringify(exp));
    let stored = {...localStorage}
   let parsed= JSON.stringify(localStorage);
   //console.log(stored)
    //console.log(JSON.parse(parsed))
    /*setexpenses(prevExpenses =>{
      return [...prevExpenses,...localStorage]
    })*/
  })
  
}, [expenses]);

  const filter=(index)=>{
    setfilteredyear(index);
  }

  
  

  return (
    <div>
      <NewExpense onAddExpense={addexpensehandeler} setAlert={showAlert}/>
      <Sum items={expenses} fy={filteredyear} />
      <Expenses items={expenses} getfiltered={filter}/>
      <Alertt alert={alert}/>
    </div>
  );
}

export default App;