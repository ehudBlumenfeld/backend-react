
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate,Link,Route,Routes, useParams} from 'react-router-dom';
import ProdAndCust from '../productWithCustomerUTILS';
import ProductWithCustComp from './productWithCust';

function ProductComp(props) {
const [prodact,setProdact]=useState({})
const [prodAndCust,setProdAndCust]=useState([])
const storeData=useSelector(state=>state)
useEffect(()=>
  {
    let prod=props.prod
    setProdact(prod)
    let customerByProduct=ProdAndCust(storeData)
    customerByProduct=customerByProduct.find(x=>x.id==prod.id)
    if (customerByProduct)
    {
       setProdAndCust(customerByProduct.customers)
    } 
  },[storeData.products,storeData.purchases.length,storeData.customers.length])


  return (
    <div style={{border:"2px",borderStyle:'solid',borderColor:'green' ,width:"250px"}}>
    
      <h3><Link to={"/editProduct/"+prodact.id}>{prodact.name}</Link></h3>
      Price:{prodact.price}<br/>
      Quantity:{prodact.quantity}<br/><br/>
      customers:
      {
        <ProductWithCustComp customers={prodAndCust}/> 
      }
    
    </div>
     
  );
}

export default ProductComp;
