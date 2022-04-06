// import "";
import { ProgressBar } from "../ProgressBar/progressbar";

export const FilterByMonth = (props) => {
    const { itemsExpense } = props;
    const listMonths = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    const sumAmount = (expensesToCal) => {
        return expensesToCal.reduce((total, expense) => {
            return total + Number(expense.amount);
        }, 0);
    };

    const totalAmount = sumAmount(itemsExpense);
    const getPercent = (month) => {
        const monthExpenses = itemsExpense.filter((expense) => {
            const monthFind = new Date(expense.date).getMonth() + 1;
            return monthFind === month;
        });
        return monthExpenses.length > 0 ? (sumAmount(monthExpenses) / totalAmount) * 100 : 0;
    };

    return (
        <div style={{ display: "flex" }}>
            {
                listMonths.map((month, index) => {
                    return <ProgressBar month={month} percentage={getPercent(index + 1)} />
                })
            }
        </div>
    );
};
