import './listexpense.css'

export const ListExpenses = (props) => {
    const { itemsExpense } = props;

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return <div>
        {
            itemsExpense.map((item) => {
                const day = new Date(item.date).getDate();
                const month = new Date(item.date).getMonth();
                const year = new Date(item.date).getFullYear();
                console.log(item.date);
                console.log(day);
                console.log(month);
                console.log(year);
                return <div className="container-expense-total">
                    <div className="container-expense-date">
                        <span>{item.date}</span>
                    </div>
                    <div className="container-expense-name">
                        <span>{item.name}</span>
                    </div>
                    <div className="container-expense-amount">
                        <span>$ {item.amount}</span>
                    </div>
                </div>
            })
        }
    </div>
}