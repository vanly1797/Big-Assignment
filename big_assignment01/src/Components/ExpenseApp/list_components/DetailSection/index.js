import './style.css'
import { ListExpenses, FilterByMonth } from "./components";
import { useState } from 'react';

export const DetailSection = (props) => {
    const { itemsExpense } = props;
    const [selectedYear, setSelectedYear] = useState(2021);
    const handleChangeYear = (e) => {
        setSelectedYear(e.target.value)
    }
    const yearExpenses = itemsExpense.filter((expense) => {
        return new Date(expense.date).getFullYear() === Number(selectedYear)
    })
    return (
        <div className="container-total">
            <div className="container-header">
                <span>Filter by year</span>
                <select value={selectedYear} onChange={handleChangeYear}>
                    {[2021, 2022, 2023].map((year) => {
                        return <option value={year}>{year}</option>;
                    })}
                </select>
            </div>
            <div className="container-month">
                <FilterByMonth itemsExpense={yearExpenses} />
            </div>
            <div className="container-expense">
                <ListExpenses itemsExpense={yearExpenses} />
            </div>
        </div>
    );
};