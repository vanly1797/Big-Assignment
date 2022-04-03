import './progressbar.css'

export const FilterByYear = () => {
    return(
        <div className='box-filter'>
            <div>
                Filter by year
            </div>
            <select>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
            </select>
        </div>
    );
};