
const CustAndProd=(storeData)=> 
{
const allData=[]

  storeData.customers.forEach(cust => 
    {
    let customerAndProduct={id:cust.id,fname:cust.fname,lname:cust.lname,products:[]}
      storeData.purchases.forEach(purch =>
        {
        if(cust.id==purch.customerID)
          { 
              let prod=storeData.products.find(x=>x.id==purch.productID)
              prod={...prod,date:purch.date}
              customerAndProduct.products.push(prod) 
          } 
      });
      allData.push(customerAndProduct) 
  });
return  allData
}


export default CustAndProd;


