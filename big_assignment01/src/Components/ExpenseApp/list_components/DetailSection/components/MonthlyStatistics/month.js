import "./progressbar.css";
import { ProgressBar } from "../ProgressBar";

export const FilterByMonth = (props) => {
    const { itemsExpense } = props;
    const listMonths = [
        "Jan", "Fen", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    return (
        <div>
            {
                listMonths.map((month, index) => {
                    return <ProgressBar month={month} percentage={index} />
                })
            }
        </div>
    );
};
