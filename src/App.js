import { useState } from "react";
import "./App.css";
import Expanses from "./components/Expanses/Expanses";
import NewExpanse from "./components/NewExpanse/NewExpanse";

const dummy_expenses = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 294.67,
    date: new Date(2021, 5, 26),
  },
  {
    id: "e2",
    title: "House insurance",
    amount: 394.67,
    date: new Date(2021, 5, 27),
  },
  {
    id: "e3",
    title: "Groceries",
    amount: 194.67,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 594.67,
    date: new Date(2021, 5, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      <NewExpanse onAddExpense={addExpenseHandler} />
      <Expanses items={expenses} />
    </div>
  );
};

export default App;
