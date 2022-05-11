import firebase from './firebase/fireBaseApp';
import { v4 as uuidv4 } from 'uuid';


const appReducer =  (state = { products : [], customers:[], purchases:[]} , action) =>
{
    let productCollection=firebase.firestore().collection('products')
    let purcheCollection=firebase.firestore().collection('purchases')
    let customerCollection=firebase.firestore().collection('customers')
    
    const updateProduct=(id,product)=>
      {
       productCollection.doc(id).set({id:product.id,name:product.name, price:product.price, quantity:product.quantity}).then(data =>
        {
          alert('Updated !');
        })
      }

      const updateCustumer=(id,customer)=>
      {
       customerCollection.doc(id).set({fname:customer.fname, lname:customer.lname, city:customer.city}).then(data =>
        {
          alert('Updated customer !');
        })
      }
          
  const deleteProdact=(id)=>
  {
        //productCollection.doc(id).delete().then(data =>

    productCollection.doc(id).delete().then(data =>
       {
          deletePurchasesByProd(id)
          alert('Deleted !');
        })
  }

  const deleteCustomer=(id)=>
  {
    customerCollection.doc(id).delete().then(data =>
       {
          deletePurchasesByCust(id)
          alert('Deleted !');
        })
  }


 const deletePurchasesByProd=(id)=>
  {
    let count=0
    let arrPrch=[state.purchases]   
      purcheCollection.get().then(data=>{
          data.forEach(doc => 
              {
                  if(doc.data().productID==id)
                    {
                      purcheCollection.doc(doc.id).delete() 
                    }
              })
      })
    state.purchases.forEach(element=>{
      if(element.productID==id){
          arrPrch.splice(count,1)
      }
      count+=1
    })    
    return {...state, purchases :arrPrch}
  }

  const deletePurchasesByCust=(id1)=>
  {
    let arrPrch1=state.purchases
    let count1=0
      state.purchases.forEach(doc => 
    {
        if(doc.customerID==id1)
        {
          arrPrch1.splice(count1,1)
          //count1+=1    
        }
        count1+=1        
    })
    purcheCollection.get().then(data=>{
          data.forEach(doc => 
              {
                  if(doc.data().customerID==id1)
                    {
                      purcheCollection.doc(doc.id).delete() 
                    }
              })
      })
      return {...state, purchases :arrPrch1}
  }

  
    
    switch(action.type)
    {
        
        case "LOAD_PRODACTS" :
                 return {...state, products : action.payload}

        case "LOAD_CUSTOMERS" : 
                 return {...state, customers : action.payload}
                 
        case "LOAD_PURCHES" :                     
                 return {...state, purchases : action.payload}

        case "ADD PRODUCT":
          let product={...action.payload,id:uuidv4()}
             firebase.firestore().collection('products').add(action.payload)
              .then(data =>
                {
                    product={...product,id:data.id}
                    alert('Created!')           
                })
            return {...state, products :[...state.products, product]} 

        case "ADD CUSTOMER" :
          let addCustomer={...action.payload,id:uuidv4()}
             firebase.firestore().collection('customers').add(action.payload)
              .then(data =>
                {              
                    addCustomer={...addCustomer,id:data.id}
                    alert('Created!')           
                })
            return {...state, customers :[...state.customers, addCustomer]} 
                  
        case "UPDATE PRODUCT":
            let id = action.payload.id;
            let arr = state.products;           
            let index = arr.findIndex(x => x.id == id);
            if (index >= 0) 
                {
                  arr[index] = action.payload;
                  updateProduct(id,action.payload)
                }
           return {...state,products:arr}

           case "UPDATE CUSTOMER":
              let idCust = action.payload.id;
              let arrCust = state.customers;           
              let indexCust = arrCust.findIndex(x => x.id == idCust);
              if (indexCust >= 0) 
                {
                  arrCust[indexCust] = action.payload;
                  updateCustumer(idCust,action.payload)
                }
              return {...state,products:arrCust}

           case "DELET PRODUCT" : 
            let id1 = action.payload.id;
            let arr1 = state.products;
            let index1 = arr1.findIndex(x => x.id == id1);
            if(index1 >= 0)
            {
              deleteProdact(id1)
              arr1.splice(index1,1)                
            }
            return {...state, products:arr1}


            case "DELET CUSTOMER":
            let idDelete = action.payload.id;
            let arrDelete = state.customers;
            let indexDelete = arrDelete.findIndex(x => x.id == idDelete);
            if(indexDelete >= 0)
            {
                deleteCustomer(idDelete)
                arrDelete.splice(indexDelete,1)                
            }
            return {...state, customers:arrDelete}

            case "NEW ORDER":
              let newCust=action.payload.customer
              let newProd=action.payload.product
              let newDate=action.payload.date
              let arrProd=state.products;
              let arrCustomer=state.customers
              let newCustID=arrCustomer.find(x=>x.fname+" "+x.lname==newCust).id
              let newProdID=arrProd.find(x=>x.name==newProd).id
              let newObj={customerID:newCustID,date:newDate,productID:newProdID}
              firebase.firestore().collection('purchases').add(newObj)
              .then(data =>
                {
                  newObj={...newObj,id:data.id};
                  alert('Created!') 
                })
                return {...state,purchases :[...state.purchases, newObj]}
                
                  

            default:
                  return state;
       
    }
}


export default appReducer


