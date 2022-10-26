import './App.css';
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from './components/DateTimePicker';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      <DateTimePicker/>
    </div>
    </LocalizationProvider>
  );
}

export default App;
