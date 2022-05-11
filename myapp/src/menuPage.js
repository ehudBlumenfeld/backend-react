import './App.css';
import { useNavigate,Link,Route,Routes} from 'react-router-dom';
import CustomersComp from './customers/customers';
import PurchasesComp from './purchases/purchases';
import  firebase  from './firebase/fireBaseApp';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsComp from './products/products';
import ProductComp from './products/product';
import EditProductComp from './products/editProduct';
import EditCustomerComp from './customers/editCustomer';

function ManuPageComp() {

const dispatch=useDispatch()
const storeData=useSelector(state=>state)

useEffect(async()=>
{
let dataProdacts= await firebase.firestore().collection('products').get()
let dataCusotmers= await firebase.firestore().collection('customers').get()
let dataPurches= await firebase.firestore().collection('purchases').get()

let products=[]
dataProdacts.forEach(doc => {
  let product = {id : doc.id, name : doc.data().name, price : doc.data().price, quantity : doc.data().quantity};
        products.push(product);  
});
dispatch({type:"LOAD_PRODACTS",payload:products})

let customers=[]
dataCusotmers.forEach(doc => {
  let customer = {id : doc.id, fname : doc.data().fname, lname : doc.data().lname, city : doc.data().city};
        customers.push(customer);  
});
dispatch({type:"LOAD_CUSTOMERS",payload:customers})

let purches=[]
dataPurches.forEach(doc => {
  let purche = {id : doc.id, customerID : doc.data().customerID, productID : doc.data().productID, date : doc.data().date};
        purches.push(purche); 
});
dispatch({type:"LOAD_PURCHES",payload:purches})

},[storeData.products.length,storeData.customers.length])

  return (

    <div style={{border:"2px" ,backgroundColor:'green'}}>

        <Link style={{color:"white",fontSize:"20px"}} to="/">Prodacts</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",fontSize:"20px"}} to="/customers">Customers</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white" , fontSize:"20px"}}  to="/purchases">Purches</Link>
       
        <Routes>
        <Route path="/" element={<ProductsComp />}></Route>
        <Route path="/customers" element={<CustomersComp />}></Route>
        <Route path="/purchases" element={<PurchasesComp />}></Route>
        
        <Route path="/editProduct/:id" element={<EditProductComp />}></Route>
        <Route path="/editCustomer/:id" element={<EditCustomerComp />}></Route>
        </Routes>

        
    </div>
  );
}

export default ManuPageComp;
