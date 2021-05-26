import "./App.css";
import Expanses from "./components/Expanses/Expanses";
import NewExpanse from "./components/NewExpanse/NewExpanse";

const App = () => {
  const expenses = [
    { title: "Car insurance", amount: 294.67, date: new Date(2021, 5, 26) },
    { title: "House insurance", amount: 394.67, date: new Date(2021, 5, 27) },
    { title: "Groceries", amount: 194.67, date: new Date(2021, 5, 28) },
    { title: "New Desk", amount: 594.67, date: new Date(2021, 5, 30) },
  ];
  const addExpenseHandler = expenses => {
    console.log('In App.js')
    console.log(expenses)
  }
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpanse onAddExpense = {addExpenseHandler}/>
      <Expanses items={expenses}/>
    </div>
  );
}

export default App;
