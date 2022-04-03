import { useState } from "react";
import "./form.css";

export const ExpenseInputForm = (props) => {
  const { onAddNewExpense } = props;
  const [hide, setHide] = useState("none");
  const [unhide, setUnhide] = useState("block");

  const defaultValue = {
    name: "",
    amount: "",
    date: "",
  };

  const [formValue, setFormValue] = useState(defaultValue);

  const onFormFieldChange = (fieldName, newValue) => {
    setFormValue({
      ...formValue,
      [fieldName]: newValue,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddNewExpense(formValue);
    setFormValue(defaultValue);
  };

  const handleHideExpense = () => {
    setUnhide("none");
    setHide("block");
    // console.log("hide expense");
  };

  const handleHideForm = () => {
    setUnhide("block");
    setHide("none");
    // console.log("hide form");
  };

  return (
    <div className="form-total">
      <div className="box-temp01" style={{ display: hide }}>
        <div className="box-input">
          <div className="box-label">Name</div>
          <input
            type="text"
            name="txtName"
            id="txtName"
            placeholder="Enter name here ..."
            value={formValue.name}
            onChange={(e) => {
              onFormFieldChange("name", e.target.value);
            }}
          />
        </div>
        <div className="box-input">
          <div className="box-label">Amount</div>
          <input
            type="number"
            name="txtAmount"
            id="txtAmount"
            placeholder="Enter amount here ..."
            value={formValue.amount}
            onChange={(e) => {
              onFormFieldChange("amount", e.target.value);
            }}
          ></input>
        </div>
        <div className="box-input">
          <div className="box-label">Date</div>
          <input
            type="date"
            name="txtDate"
            id="txtDate"
            placeholder="dd/mm/yyyy"
            value={formValue.date}
            onChange={(e) => {
              onFormFieldChange("date", e.target.value);
            }}
          ></input>
        </div>
        <div className="box-button">
          <button type="submit" id="btnAdd">
            ADD
          </button>
          <button
            type="submit"
            id="btnCancel"
            onChange={handleFormSubmit}
            onClick={handleHideForm}
          >
            CANCEL
          </button>
        </div>
      </div>
      <div className="box-temp02" style={{ display: unhide }}>
        <div className="box-button-expense">
          <button
            type="submit"
            id="btnAddExpense"
            onChange={handleFormSubmit}
            onClick={handleHideExpense}
          >
            ADD NEW EXPENSE
          </button>
        </div>
      </div>
    </div>
  );
};
