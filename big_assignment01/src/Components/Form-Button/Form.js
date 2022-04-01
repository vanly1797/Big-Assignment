import { useState } from 'react';
import './form.css'

export const InputForm = () => {

    const [hide, setHide] = useState("none");
    const [unhide, setUnhide] = useState("block");

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    const handleHideExpense = () =>{
        setUnhide("none");
        setHide("block");
        console.log("hide expense");
    }

    const handleHideForm = () =>{
        setUnhide("block");
        setHide("none");
        console.log("hide form");
    }

    return (
        <div className="form-total">
            <div className="box-temp01" style={{display: hide}}>
                <div className="box-input">
                    <div className="box-label">Name</div>
                    <input type="text" name="txtName" id="txtName" placeholder="Enter name here ..."></input>
                </div>
                <div className="box-input">
                    <div className="box-label">Amount</div>
                    <input type="text" name="txtAmount" id="txtAmount" placeholder="Enter amount here ..."></input>
                </div>
                <div className="box-input">
                    <div className="box-label">Date</div>
                    <input type="date" name="txtDate" id="txtDate" placeholder="dd/mm/yyyy"></input>
                </div>
                <div className="box-button">
                    <button type="submit" id="btnAdd">ADD</button>
                    <button type="submit" id="btnCancel" onChange={handleFormSubmit} onClick={handleHideForm}>CANCEL</button>
                </div>
            </div>
            <div className="box-temp02" style={{display: unhide}}>
                <div className="box-button-expense">
                    <button type="submit" id="btnAddExpense" onChange={handleFormSubmit} onClick={handleHideExpense}>ADD NEW EXPENSE</button>
                </div>
            </div>
        </div>
    );
};