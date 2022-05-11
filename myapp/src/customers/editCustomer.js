
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,Link,Route,Routes, useParams} from 'react-router-dom';
import CustWithProductComp from './custWithProduct';

function EditCustomerComp() 
{
const params=useParams()
const storeData=useSelector(state=>state)
const dispatch =useDispatch()
const [customer,setCustomer]=useState({id:params.id,fname:"", lname:0, city:0})
const [isUpdate,setIsUpdate]=useState(false)
const navigate=useNavigate()

useEffect(()=>
{
  const cust=storeData.customers.find(x=>x.id==params.id)
  if(cust)
    {
      setCustomer({id:params.id,fname:cust.fname, lname:cust.lname, city:cust.city})
    }
},[storeData])


const deleteCustomer=()=>
{
  dispatch({type:"DELET CUSTOMER",payload:customer})
  navigate("/customers")
}

const updateCustomer=()=>
{
  dispatch({type:"UPDATE CUSTOMER",payload:customer})
  setIsUpdate(!isUpdate)
}

  return (
    <div >
 <h2> Edit Customer:</h2>

 <div style={{width: "50%", float:'left'}}>
    {
   isUpdate? <div> 

         First Name : <input type="text" value={customer.fname} onChange={e=>setCustomer({...customer,fname:e.target.value})}/><br/>
          Last Name : <input type="text" value={customer.lname} onChange={e=>setCustomer({...customer,lname:e.target.value})}/><br/>
          City : <input type="text" value={customer.city} onChange={e=>setCustomer({...customer,city:e.target.value})}/><br/>
          <input type={'button'} value={"Save Change"} onClick={updateCustomer}/><br/><br/>
          <input type={'button'} value={"Delete"} onClick={deleteCustomer}/>
          <input type={'button'} value={"Close"} onClick={e=>setIsUpdate(!isUpdate)}/>
     </div>:
     <div>
       <h4>{customer.fname}</h4>
      <input type={'button'} value={"Delete"} onClick={deleteCustomer}/>
      <input type={'button'} value={"Update"} onClick={e=>setIsUpdate(!isUpdate)}/>
    </div>
 }
 
  
</div>

  <div style={{width: "50%", float:'right'}}>
      <h4>customers :</h4>
      <CustWithProductComp customer={customer.id}/>     
  </div>
</div>
  );
}

export default EditCustomerComp;
