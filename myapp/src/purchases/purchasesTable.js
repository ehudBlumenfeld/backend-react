import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import customerWithProduct from '../customerWithProductUTILS';


function PurchasesTableComp(props) {
const storeData=useSelector(state=>state)
const [tableData,setTableData]=useState([{}])



useEffect(()=>{
  let allData=customerWithProduct(storeData) 
  setTableData(allData)  
    if(props.customer)
     {
      allData.forEach(obj => {
        if (obj.fname+" "+obj.lname==props.customer)
        {
            if(props.product)
              {
                let prod=obj.products.find(x=>x.name==props.product)
                obj.products=prod
              }
          setTableData(obj)
        }
      
      });           
    }
},[props.customer,props.product,storeData])
          

return (
  <div >
      {    
      <table border="2" style={{borderColor:'green',color:'blueviolet',fontSize:"25px"}}>
          <thead>
          <tr><th>Name</th><th>Product</th><th>Date</th></tr>
          </thead>
          <tbody>
            {
              props.customer?
              <tr>
                <td>
                  {tableData.fname} {tableData.lname}
                </td>
                
                <td>
                  <ul>
                    {
                      tableData.products?
                         props.product?
                            <li>{ tableData.products.name}</li>
                          :
                      tableData.products.map((item2,index2)=>
                      {
                       return <li key={index2}>{item2.name} </li>
                      })
                      :null
                    }
                  </ul>
                </td>
                <td>
                  <ul>
                    {
                      tableData.products?
                          props.product?
                            <li>{ tableData.products.date}</li>
                          :
                      tableData.products.map((item22,index22)=>
                      {
                       return <li key={index22}>{item22.date} </li>
                      })
                      :null
                    }
                  </ul>
                </td>
                </tr>
              :
              tableData.map((item,index)=>
              {
               
                return <tr key={index}>
                        <td>{item.fname} {item.lname}</td>
                        <td>
                          <ul>
                            {
                              item.products?
                              item.products.map((item1,index1)=>
                              {
                              return <li key={index1}>{item1.name} </li>
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
            }
          </tbody>        
        </table>
        
  
}
    </div>
);
}
         


export default PurchasesTableComp;