import "./App.css";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker!!</h1>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
