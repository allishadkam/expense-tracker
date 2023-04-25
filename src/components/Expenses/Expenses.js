import ExpenseItem from '../Expenses/ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
const Expenses=(props)=> {
  return (
    <Card className="expenses">
      {props.items.map(expenses => <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date} />)}
    </Card>
  );
}

export default Expenses;