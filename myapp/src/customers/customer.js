
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import customerWithProduct from '../customerWithProductUTILS';

function CustomerComp() {
const storeData=useSelector(state=>state)
const [tableData,setTableData]=useState([{}])

useEffect(()=>
  {
  let allData=customerWithProduct(storeData) 
  setTableData(allData)
  },[storeData.purchases,storeData.customers,storeData.purchases])



  return (
    <>
    
    {
    tableData?
    tableData.map((item,index)=>{
      return <tr key={index}>
                        <td> <Link to={"/editCustomer/"+item.id}>{item.fname} {item.lname}</Link></td>
                        <td >
                          <ul>
                            {
                              item.products?
                              item.products.map((item1,index1)=>
                              {
                              return <Link key={index1} to={"/editProduct/"+item1.id}> <li >{item1.name} </li></Link>
                              })
                              :null
                            }
                        </ul>
                        </td>
                        
                        <td>
                          <ul>
                            {
                              item.products?
                              item.products.map((item11,index11)=>
                              {
                              return <li key={index11}>{item11.date} </li>
                              })
                              :null
                            }
                        </ul>
                        </td>                        
                      </tr>
    })
    :null 
    
    }
    </> )
  }
export default CustomerComp;
