import React from 'react'
import '../NewExpanse/ExpanseForm.css'

function ExpanseForm() {
    return (
        <div>
            <form>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text'/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01'/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min='2021-05-26' />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpanseForm
