import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BalanceDisplay from './components/BalanceDisplay';
import History from './components/History';
import Transaction from './components/Transaction';

function App() {
  return (
    <div className="App container-fluid ">
      <h1 className='mt-5'>Expense Tracker</h1>
      <Transaction />
    </div>
  );
}

export default App;
