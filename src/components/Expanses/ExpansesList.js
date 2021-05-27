import React from 'react'
import ExpanseItem from './ExpanseItem'
import './ExpansesList.css'

const ExpansesList = (props) => {
    let expensesContent = <p>No Expenses Found</p>;

    if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback'>{expensesContent}</h2>
    }
    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
        <ExpanseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
      }
        </ul>
    )
}

export default ExpansesList
