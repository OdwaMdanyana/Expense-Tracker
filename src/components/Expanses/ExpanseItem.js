import ExpanseDate from "./ExpanseDate";
import Card from "../UI/Card";
import "./ExpanseItem.css";
import React, { useState } from "react";

const ExpanseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpanseItem;
