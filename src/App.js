import "./App.css";
import ExpanseItem from "./components/ExpanseItem";

function App() {
  const expenses = [
    { title: "Car insurance", amount: 294.67, date: new Date(2021, 5, 26) },
    { title: "House insurance", amount: 394.67, date: new Date(2021, 5, 27) },
    { title: "Groceries", amount: 194.67, date: new Date(2021, 5, 28) },
    { title: "New Desk", amount: 594.67, date: new Date(2021, 5, 30) },
  ];
  return (
    <div className="App">
      <h1>Let's get started mate!!!</h1>
      <ExpanseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpanseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpanseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpanseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
