import React from 'react'
import {useRef} from 'react'

function ExpenseTable(props) {
  let INCOME=0
  let EXPENSES=0
  let BALANCE = 0
   props.state.forEach(e=>{
    let num = Number(e.amount)
    if(num<0){
      EXPENSES=EXPENSES + num
    }else{
      INCOME=INCOME + num
    }
  })
  BALANCE = INCOME + EXPENSES
  return (
    <>
     <h3>Balance</h3>
    <h4 className="mt-1">${BALANCE}</h4>
    <div className="container col-10 d-flex  flex-row gap-4 ">
    <h3>Income</h3>
    <h4 className="mt-1">${INCOME}</h4>
    <h3>Expenses</h3>
    <h4 className="mt-1">${EXPENSES}</h4>
    </div>
    
    </>
  )
}

export default ExpenseTable