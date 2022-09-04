import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useState,useEffect } from 'react'
import History from './History';
import '../style/Transaction.css'


const actionCreator = (value,amount) => {

    return {
        type:'add_transaction',
        payload:{
        value,
        amount
        }
    }
}
const actionDeleteCreator = (index) => {

    return {
        type:'delete_transaction',
        payload:index
    }
}


function Transaction() {
    let data = useSelector(state=>{
        return state.add.transactionList.map(element =>  element)
    })
    
    let list = data.map((e,i)=> {
        if(e.amount<0){
           
        return(
        <div key={i} className="block container d-flex flex-row gap-5 col-12 px-5 py-3" data-toggle="tooltip" data-placement="bottom" title="Remove" onClick={(ev)=>handleDelete(e.value,i)}> 
        <h4 >{e.value}</h4>
        <h4 className="amountNegative col-md-3 col-lg-7">${e.amount}</h4>
        </div> 
        )
    }else{
        
        return(
            <div key={i} className="block container-fluid d-flex flex-row gap-5 col-12 px-5 py-3" data-toggle="tooltip" data-placement="bottom" title="Remove" onClick={(ev)=>handleDelete(e.value,i)}> 
            <h4 >{e.value}</h4>
            <h4 className="amountPositive  col-md-3 col-lg-7">${e.amount}</h4>
            <span></span>
            </div> 
            )
    }
   
    })
    
    const handleDelete = (value,index) => {
        console.log(index)
        dispatch(actionDeleteCreator(index))
    }
    const dispatch = useDispatch()
    const [value,setValue] = useState("")
    const [amount,setAmount] = useState(0)
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleChangeAmount = (e) => {
        setAmount(e.target.value)
        
    }
   function handleAdd(){
    dispatch(actionCreator(value,amount))
    
   }
   
  return (
    <>
    
    <div className="container-fluid d-flex flex-column col-2 justify-content-center align-items-center gap-4">
    <History list={list} state={data}/>
    <input type="text" onChange={handleChange} className="inp col-12 mb-5 form-control" id="product" placeholder="Product"/>   
    <input type="number" onChange={handleChangeAmount} className="inp col-12 mb-5 form-control " placeholder="Income/Expenditure"/>
    <button className='btn btn-dark col-7 px-5 py-3 ' onClick={handleAdd}>ADD</button>
    </div>
    </>
  )
}



export default Transaction
