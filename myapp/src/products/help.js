
import { useSelector } from 'react-redux';
import { useNavigate,Link,Route,Routes} from 'react-router-dom';
import ProductComp from './product';
import TotalPurcheComp from '../purchases/totalPurche';
import { useState } from 'react';

function ProductsComp() {
const storeData=useSelector(state=>state)
const [isAdd,setIsAdd]=useState(false)

const addCustomer=()=>
{

}

  return (
    <div >
      <h3>Products</h3>
<div style={{width: "50%", float:'left' }}>     
        {
          storeData.products.map(item=>
          {
            return  <ProductComp key={item.id} prod={item}/>     
          })
        }

</div>

<div style={{width: "50%", float:'right'}}>
  <input type={'button'} value={"Add Customer"} onClick={setIsAdd(true)}/><br/><br/>
  {
    isAdd?
    <>
       products:  
      <select  >
       
        {
              storeData.products.map(item=>{
                return<option key={item.id} >{item.name}
                </option>
              })
        }
      </select> <br/><br/>
      </>
    :
    null
  }
      <TotalPurcheComp/>
</div>

    </div>
  );
}

export default ProductsComp;
