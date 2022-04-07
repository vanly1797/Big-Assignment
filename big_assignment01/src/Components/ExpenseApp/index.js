import { useState } from "react";
import { ExpenseInputForm, DetailSection } from "./list_components";
import './app.css'

export const ExpenseApp = () => {
    const [itemsExpense, setItemsExpense] = useState([
        {
            name: "Video game",
            amount: 100,
            date: "2021-02-18",
        },
        {
            name: "CD",
            amount: 20,
            date: "2021-06-26",
        },
        {
            name: "Some Book",
            amount: 50,
            date: "2022-01-16",
        },
        {
            name: "Electricity Bill",
            amount: 75,
            date: "2022-10-10",
        },
        {
            name: "New Bike",
            amount: 100,
            date: "2022-05-20",
        },
        {
            name: "PS5",
            amount: 1000,
            date: "2023-07-11",
        },
        {
            name: "TV",
            amount: 1500,
            date: "2023-08-10",
        },
        {
            name: "Macbook",
            amount: 2000,
            date: "2023-09-31",
        },
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




