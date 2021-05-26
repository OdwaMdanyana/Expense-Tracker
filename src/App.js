import "./App.css";
import Expanses from "./components/Expanses/Expanses";

const App = () => {
  const expenses = [
    { title: "Car insurance", amount: 294.67, date: new Date(2021, 5, 26) },
    { title: "House insurance", amount: 394.67, date: new Date(2021, 5, 27) },
    { title: "Groceries", amount: 194.67, date: new Date(2021, 5, 28) },
    { title: "New Desk", amount: 594.67, date: new Date(2021, 5, 30) },
  ];
  return (
    <div className="App">
      <h1>Let's get started mate!!!</h1>
      <Expanses items={expenses}/>
    </div>
  );
}

export default App;
