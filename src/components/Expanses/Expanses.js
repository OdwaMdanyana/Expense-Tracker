import Card from "../UI/Card";
import "./Expanses.css";
import ExpansesFilter from "./ExpansesFilter";
import { useState } from "react";
import ExpansesList from "./ExpansesList";
import ExpansesChart from "./ExpansesChart";

const Expanses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpansesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpansesChart expenses={filteredExpenses}/>
        <ExpansesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expanses;
