import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function AddCustomerComp() {
const dispatch =useDispatch()
const [isAdd,setIsAdd]=useState(false)
const [cusromer,setCusromer]=useState({fname:"", lname:0, city:0})

const addNewCustomer=()=>
{
  dispatch({type:"ADD CUSTOMER",payload:cusromer})
  setIsAdd(false)
}



  return (
    <div >    
      {
      isAdd?
      <>
              First Name:<input type="text"  onChange={e=>setCusromer({...cusromer,fname:e.target.value})}/><br/>
              Last Name:<input type="text"  onChange={e=>setCusromer({...cusromer,lname:e.target.value})}/><br/>
              City:<input type="text"  onChange={e=>setCusromer({...cusromer,city:e.target.value})}/><br/>
              <input type={'button'} value={"Add Now"} onClick={addNewCustomer}/>
              <input type={'button'} value={"Close"} onClick={()=>setIsAdd(false)}/><br/><br/><br/>
      </>
      :
      <input type={'button'} value={"Add Customer"} onClick={()=>setIsAdd(true)}/>
      
      }
    </div>
  );
}

export default AddCustomerComp;
