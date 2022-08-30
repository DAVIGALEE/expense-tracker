import React from 'react'
import ExpenseTable from './ExpenseTable';

function History(props) {
  return (
    <>
    <ExpenseTable state={props.state}/>
    <h3 className='container-fluid'>History</h3>
   {props.list}
    </>
  )
}

export default History