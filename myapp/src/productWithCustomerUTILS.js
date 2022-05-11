//return customers by product
const ProdAndCust=(storeData)=> 
{
const allData=[]
  storeData.products.forEach(prod => 
    {
    let productAndCustomer={id:prod.id,name:prod.name,price:prod.price,customers:[]}
      storeData.purchases.forEach(purch =>
        {   
        if(prod.id==purch.productID)
          {           
              let cust=storeData.customers.find(x=>x.id==purch.customerID)
              if(cust)
              {
                cust={...cust,date:purch.date}
              }
              productAndCustomer.customers.push(cust) 
          } 
      });
      allData.push(productAndCustomer) 
  });
return  allData
}


export default ProdAndCust;


