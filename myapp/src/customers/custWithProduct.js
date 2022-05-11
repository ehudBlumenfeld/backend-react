
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustAndProd from '../customerWithProductUTILS';

function CustWithProductComp(props) {
const [customerWithProd,setCustomerWithProd]=useState([{}])
const storeData=useSelector(state=>state)
useEffect(()=>
  {
    let customerID=props.customer
    let allCustomers=CustAndProd(storeData)
    let customerData=allCustomers.find(x=>x.id==customerID)
    setCustomerWithProd(customerData) 
  },[storeData.purchases])


  return (
    <div style={{border:"2px",borderStyle:'solid',borderColor:'black' ,width:"249px"}}>

   {
     customerWithProd.products? 
      customerWithProd.products.length?      
        <ul>
          {
          customerWithProd.products.map((item)=>
            {
            return <div key={item.id}><li>
              Name : <Link to={"/editProduct/"+item.id}>{item.name}</Link><br/>
              Date :{item.date}</li><br/>
              </div>
            })
          }
            </ul>
        :
        <>Not sold yet</>       
        :null  
        
    }        
    </div>
     
  );
}

export default CustWithProductComp;
