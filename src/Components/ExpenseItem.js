
import './ExpenseItem.css';

function ExpenseItem({ expenses }) {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    return (
        <div className='parent-div'>
            {expenses.map((data, index) => {

                const expenseDate = new Date(data.date);
                const year = expenseDate.getFullYear();
                const month = expenseDate.toLocaleString('default', { month: 'long' });
                const date = expenseDate.getDate();
                const day = expenseDate.toLocaleString('default', { weekday: 'long' });
                const time = expenseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                return (
                    <div key={index} className="expense-item">
                        <div className="expense-date">

                            <div className='date'>
                                <div >{`${month}`}</div>
                                <div>{`${year}`}</div>
                                <div>{`${date}`}</div>

                            </div>
                            <div>
                                <span style={{ marginLeft: "2rem", color: "white" }}>{data.title}</span>
                            </div>

                        </div>

                        <div className="expense-item-description">
                            <div className="expense-amount">${data.amount}</div>
                        </div>
                    </div>
                )
            })}

        </div>


    );
}

export default ExpenseItem;