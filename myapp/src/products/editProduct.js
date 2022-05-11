
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,Link,Route,Routes, useParams, useHref} from 'react-router-dom';
import ProductWithCustComp from './productWithCust';
import ProdAndCust from '../productWithCustomerUTILS';


function EditProductComp() {
const params=useParams()
const storeData=useSelector(state=>state)

const dispatch =useDispatch()
const [product,setProduct]=useState({id:params.id,name:"", price:0, quantity:0})
const [isUpdate,setIsUpdate]=useState(false)
const [prodAndCust,setProdAndCust]=useState([])


useEffect(()=>
{
  const prod=storeData.products.find(x=>x.id==params.id)
  if(prod)
    {
      setProduct({id:params.id,name:prod.name, price:prod.price, quantity:prod.quantity})
    }
    let customerByProduct=ProdAndCust(storeData)
    customerByProduct=customerByProduct.find(x=>x.id==prod.id)
    if (customerByProduct)
    {
      setProdAndCust(customerByProduct.customers)
    } 
},[])


const deleteProduct=()=>
{
  dispatch({type:"DELET PRODUCT",payload:product})
}

const updateProduct=()=>
{
  dispatch({type:"UPDATE PRODUCT",payload:product})
  setIsUpdate(!isUpdate)
}

  return (
    <div >
 <h2>Edit Product:</h2>

 <div style={{width: "50%", float:'left'}}>
    {
   isUpdate? <div> 
     
          Name:<input type="text" defaultValue={product.name} onChange={e=>setProduct({...product,name:e.target.value})}/><br/>
          Price:<input type="number" defaultValue={product.price} onChange={e=>setProduct({...product,price:e.target.value})}/><br/>
          Quantity:<input type="number" defaultValue={product.quantity} onChange={e=>setProduct({...product,quantity:e.target.value})}/><br/>
          <input type={'button'} value={"Save Change"} onClick={updateProduct}/><br/><br/>
     </div>:
     <div>
        <h4>{product.name}</h4>
    </div>
 }
 <input type={'button'} value={"Delete"} onClick={deleteProduct}/>
 <input type={'button'} value={"Update"} onClick={e=>setIsUpdate(!isUpdate)}/>
  
</div>

  <div style={{width: "50%", float:'right'}}>
      <h4>customers :</h4>
      
      <ProductWithCustComp customers={prodAndCust}/>

  </div>
</div>
  );
}

export default EditProductComp;
