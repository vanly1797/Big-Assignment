import { InputForm } from "./Components/Form-Button/Form";
import { FilterByYear } from "./Components/ProgressBar/FilterByYear";
import './app.css'
import { FilterByMonth } from "./Components/ProgressBar/Month";

function App() {
  return (
    <div className="App">
        <InputForm />
        <div className="progressbar-total">
          <FilterByYear />
          <FilterByMonth />
        </div>
    </div>
  );
}

export default App;
