import React from "react";
import "../NewExpanse/NewExpanse.css";
import ExpanseForm from "./ExpanseForm";

function NewExpanse(props) {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpanseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
}

export default NewExpanse;
