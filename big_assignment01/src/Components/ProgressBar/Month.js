export const FilterByMonth = () => {

    const listMonths = ['Jan', 'Fen', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return(
        <div className="box-month-total">
            <div className="box-month">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
                <div>{listMonths[0]}</div>
            </div>
        </div>
    );
};