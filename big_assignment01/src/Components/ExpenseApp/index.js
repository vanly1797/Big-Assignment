import { useState } from "react";
import { ExpenseInputForm, DetailSection } from "./list_components";
import './app.css'

export const ExpenseApp = () => {
    const [itemsExpense, setItemsExpense] = useState([
        {
            name: "Video game",
            amount: 100,
            date: "4-6-2022",
        }
    ]);

    const handleAddItem = (newItem) => {
        setItemsExpense([...itemsExpense, newItem]);
    };

    return (
        <div className="box-total">
            <ExpenseInputForm onAddNewExpense={handleAddItem} />
            <DetailSection itemsExpense={itemsExpense} />
        </div>
    );

};




