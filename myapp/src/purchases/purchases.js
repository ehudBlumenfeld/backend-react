import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import PurchasesTableComp from './purchasesTable';

function PurchasesComp() {
const storeData=useSelector(state=>state)
const [customer,setCustomer]=useState("")
const [product,setProduct]=useState("")
const [isSelected,setIsSelected]=useState(false)

const search=()=>{
  if(customer||product){
    setIsSelected(true)
  }
  else{
    setIsSelected(false)
  }
}

  return (
  <div >
       <h3>Purchases</h3>
    <div style={{width: "50%", float:'left' }}> 
     products  :   
      <select  onChange={e=>setProduct(e.target.value)}>
       
        {
              storeData.products.map(item=>{
                return<option key={item.id} >{item.name}
                </option>
              })
        }
      </select> <br/><br/>
      
       customers  :   
      <select onChange={e=>setCustomer(e.target.value)}>
        
        {
              storeData.customers.map(item=>{
                return<option key={item.id} >{item.fname} {item.lname}</option>
              })
        }
      </select> 
      <br/><br/>
      <input type='date' /> <br/><br/>  
      <input type='button' value={"Search"} onClick={search} /><br/><br/>   
    </div>


    <div style={{width: "50%", float:'right'}}>
      {
      !isSelected ?  
      <PurchasesTableComp />
       :
       <PurchasesTableComp customer={customer} product={product} />
      }

    </div>
          
  </div>
   
  );
}

export default PurchasesComp;