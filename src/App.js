     
import './App.css';
import ExpenseItem from './Components/ExpenseItem';
const expenses = [
    {
        date: new Date(2021, 2, 28),
        title: 'Car Insurance',
        amount: 294.67,
        location: 'National Insurance',
        id:1
    },
    {
        date: new Date(2022, 4, 15),
        title: 'Groceries',
        amount: 85.25,
        location: 'Big bazzer',
        id:2
    },
    {
        date: new Date(2023, 6, 3),
        title: 'Dinner',
        amount: 45.00,
        location: 'Indian Restaurant',
        id:3
    },
    {
      date: new Date(2024,7,10),
      title: 'Electricity Bill',
      amount:120.0,
      location:'BESCOM office',
      id:4
    },
  ];



function App() {
  return (
    < >

    <ExpenseItem expenses ={expenses}/>
    </>
  );
}

export default App;