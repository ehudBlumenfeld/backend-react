
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function ProductWithCustComp(props) {
const [customers,setCustomers]=useState([])

useEffect(()=>
  {
    setCustomers(props.customers)
  },[props])


  return (
    <div style={{border:"2px",borderStyle:'solid',borderColor:'black' ,width:"249px"}}>

   {
     props.customers.length?
      customers.map((item)=>
        {
        return <div key={item.id}>
          Name:<Link to={"/editCustomer/"+item.id}>{item.fname}</Link><br/>
          Date:{item.date}<br/><br/>
          </div>
        })
        :
        <>Not sold yet</>
    }        
    </div>
     
  );
}

export default ProductWithCustComp;
