
import { useDispatch, useSelector } from 'react-redux';
import ProductComp from './product';
import TotalPurcheComp from '../purchases/totalPurche';
import { useState } from 'react';

function ProductsComp() {
const storeData=useSelector(state=>state)
const dispatch =useDispatch()
const [isAdd,setIsAdd]=useState(false)
const [product,setProduct]=useState({name:"", price:0, quantity:0})

const addNewProduct=()=>
{
  dispatch({type:"ADD PRODUCT",payload:product})
  setIsAdd(false)
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
  
  {
   isAdd?
   <>
          Name:<input type="text"  onChange={e=>setProduct({...product,name:e.target.value})}/><br/>
          Price:<input type="number"  onChange={e=>setProduct({...product,price:e.target.value})}/><br/>
          Quantity:<input type="number"  onChange={e=>setProduct({...product,quantity:e.target.value})}/><br/>
          <input type={'button'} value={"Add Now"} onClick={addNewProduct}/>
          <input type={'button'} value={"Close"} onClick={e=>setIsAdd(false)}/><br/><br/><br/>
  </>
   :
   <input type={'button'} value={"Add Product"} onClick={e=>setIsAdd(true)}/>
  }
      <TotalPurcheComp/>
</div>

    </div>
  );
}

export default ProductsComp;
