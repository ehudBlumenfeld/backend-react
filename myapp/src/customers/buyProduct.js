import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function BuyProductComp() {
const storeData=useSelector(state=>state)
const dispatch=useDispatch()
const [newOrder,setNewOrder]=useState({customer:"",product:"",date:""})
const [isBuy,setIsBuy]=useState(false)



const buy=()=>
  {
    if(!newOrder.date||!newOrder.product||!newOrder.customer)
    {
      alert("Details are missing")
    }
    else
    {
      dispatch({type:"NEW ORDER",payload:newOrder})
      alert("load your oredr")
      hide()
    }
  }

const hide=()=>
  {
   setIsBuy(false)
   setNewOrder({customer:"",product:"",date:""})
  }
  return (
    <div >
      {
      !isBuy? 
      <input type={'button'} value={"WANT TO BUY?"} onClick={()=>setIsBuy(true)}/>
          :
    <> products  :   
      <select  onChange={e=>setNewOrder({...newOrder,product:e.target.value})}>      
        {
              storeData.products.map(item=>{
                return<option key={item.id} >{item.name}
                </option>
              })
        }
      </select> <br/><br/>
      
       customers  :   
      <select onChange={e=>setNewOrder({...newOrder,customer:e.target.value})}>
        
        {
              storeData.customers.map(item=>{
                return<option key={item.id} >{item.fname} {item.lname}</option>
              })
        }
      </select> 
      <br/><br/>
      date :
      <input type='date' onChange={e=>setNewOrder({...newOrder,date:e.target.value})}/> <br/><br/>  
      <input type='button' value={"BUY"} onClick={buy} />
      <input type={'button'} value={"CLOSE"} onClick={hide}/><br/><br/>
      </> 
      }
    </div>
   
  );
}
export default BuyProductComp;
