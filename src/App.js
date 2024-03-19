
// import ExpenseItem from './Components/ExpenseItem';
// function App() {
//     const expenses = [
//       {
//           date: new Date(2021, 2, 28),
//           title: 'Car Insurance',
//           amount: 294.67,
//           location: 'National Insurance',
//       },
//       {
//           date: new Date(2021, 4, 15),
//           title: 'Groceries',
//           amount: 85.25,
//           location: 'Big bazzer',
//       },
//       {
//           date: new Date(2021, 6, 3),
//           title: 'Dinner',
//           amount: 45.00,
//           location: 'Indian Restaurant',
//       },
//       {
//         date: new Date(2021,7,10),
//         title: 'Electricity Bill',
//         amount:120.0,
//         location:'BESCOM office',
//       },
//     ];
//     return (
//         <div className="App">
//             <h2>Let's get started!</h2>
//             {expenses.map((expense) => {
//             return (
//                 <ExpenseItem
//                 title={expense.title}
//                 amount={expense.amount}
//                 date={expense.date}
//                 location={expense.location}
//                 ></ExpenseItem>
//             );
//             })}
//         </div>
//     );
//         }      
// export default App;  
      
import './App.css';
import ExpenseItem from './Components/ExpenseItem';
const expenses = [
    {
        date: new Date(2021, 2, 28),
        title: 'Car Insurance',
        amount: 294.67,
        location: 'National Insurance',
    },
    {
        date: new Date(2021, 4, 15),
        title: 'Groceries',
        amount: 85.25,
        location: 'Big bazzer',
    },
    {
        date: new Date(2021, 6, 3),
        title: 'Dinner',
        amount: 45.00,
        location: 'Indian Restaurant',
    },
    {
      date: new Date(2021,7,10),
      title: 'Electricity Bill',
      amount:120.0,
      location:'BESCOM office',
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