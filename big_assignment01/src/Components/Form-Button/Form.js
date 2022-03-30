import './form.css'

export const InputForm = () => {
    return (
        <form className='form-total'>
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
                <button type="submit" id="btnCancel">CANCEL</button>
            </div>
        </form>
    );
};