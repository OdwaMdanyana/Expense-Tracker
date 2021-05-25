import React from "react";
import ExpanseDate from "./ExpanseDate";
import "./ExpanseItem.css";

function ExpanseItem(props) {

  return (
    <div className="expense-item">
        <ExpanseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>${props.amount}</h2>
      </div>
    </div>
  );
}

export default ExpanseItem;
