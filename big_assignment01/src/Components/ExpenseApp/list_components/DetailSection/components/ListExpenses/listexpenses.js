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

                return <div className="container-expense-total">
                    <div className="container-expense-date">
                        <span style={{ fontSize: 12 }}>{monthNames[month]}</span>
                        <span style={{ fontSize: 12 }}>{year}</span>
                        <span style={{ fontSize: 15, fontWeight: 'bold' }}>{day}</span>
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
    </div >
}