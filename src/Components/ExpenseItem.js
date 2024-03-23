
import React, { useEffect, useState } from 'react';
import './ExpenseItem.css';
import ExpenseForm from './Expenseform';
import Chart from './Chart';

function ExpenseItem({ expenses }) {

    const [expense, setExpense] = useState(expenses);
    const [filter, setFilter] = useState();

    useEffect(() => {
        let filteredExpenses = expenses;
console.log ("useEffectcall");
        if (filter) {
            const year = parseInt(filter);
            filteredExpenses = expenses.filter(data => new Date(data.date).getFullYear() === year);
            console.log(filteredExpenses);
        }

        setExpense(filteredExpenses);
    }, [filter,expenses]);

    const deleteHandler = (id) => {
        const updatedExpense = expense.filter(data => data.id !== id);
        setExpense(updatedExpense);
    };

    const addHandler = (id) => {
        const updatedExpenses = expense.map(expense => {
            if (expense.id === id) {
                const updatedAmount = expense.amount + 100;
                return { ...expense, amount: updatedAmount };
            }
            return expense;
        });
        setExpense(updatedExpenses);
    };

    const addExpenseHandler = (newExpense) => {
        setExpense(prevExpense => [...prevExpense, newExpense]);
    };

    const titleHandler = (id) => {
        const updatedExpenses = expense.map(expense => {
            if (expense.id === id) {
                const updatedTitle = "updated ";
                return { ...expense, title: updatedTitle };
            }
            return expense;
        });
        setExpense(updatedExpenses);
    };

    return (
        <div className='parent-div'>
            <ExpenseForm addExpenseHandler={addExpenseHandler} />
            <Chart expense={expense} />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">All</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
            {expense.map((data, index) => {
                const expenseDate = new Date(data.date);
                const year = expenseDate.getFullYear();
                const month = expenseDate.toLocaleString('default', { month: 'long' });
                const date = expenseDate.getDate();
                return (
                    <div key={index} className="expense-item">
                        <div className="expense-date">
                            <div className='date'>
                                <div>{`${month}`}</div>
                                <div>{`${year}`}</div>
                                <div>{`${date}`}</div>
                            </div>
                            <div>
                                <span style={{ marginLeft: "2rem", color: "white" }}>{data.title}</span>
                            </div>
                        </div>
                        <div className="expense-item-description">
                            <div className="expense-amount">${data.amount}</div>
                            <button onClick={() => addHandler(data.id)}>Add Amount</button>
                            <button onClick={() => titleHandler(data.id)}>Title Change</button>
                            <button onClick={() => deleteHandler(data.id)}>Delete Expense</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ExpenseItem;