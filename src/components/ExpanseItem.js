import ExpanseDate from "./ExpanseDate";
import Card from "./Card";
import "./ExpanseItem.css";

function ExpanseItem(props) {
  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpanseItem;
