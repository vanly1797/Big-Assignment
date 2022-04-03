export const ListExpenses = (props) => {
    const { itemsExpense } = props;
    console.log(itemsExpense);
    return <div>
        {
            itemsExpense.map((item) => {
                return <div>
                    <span style={{ margin: '0 8px' }}>{item.date}</span>
                    <span style={{ margin: '0 8px' }}>{item.name}</span>
                    <span style={{ margin: '0 8px' }}>{item.amount}</span>
                </div>
            })
        }
    </div>
}