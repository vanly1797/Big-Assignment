import { useState } from "react";
import { ExpenseForm, ProgressBar } from "./list_components";

export const ExpenseApp = () => {
    const [itemsExpense, setItemsExpense] = useState([
        {
            name: "Video game",
            amount: 100,
            date: "2022-4-3",
        }
    ]);
};
