
import { useSelector } from 'react-redux';
import { useNavigate,Link,Route,Routes} from 'react-router-dom';
import AddCustomerComp from './addCustomer';
import BuyProductComp from './buyProduct';
import CustomerComp from './customer';

function CustomersComp() {


  return (
    <div >
        <h3>Customers</h3>
      <div style={{width: "50%", float:'left'}}>
        <AddCustomerComp/><br/><br/>
        <table border="2" style={{borderColor:'green',color:'blueviolet',fontSize:"25px"}}>
          <thead>
          <tr><th>Name</th><th>Product</th><th>Date</th></tr>
          </thead>
          <tbody>
              <CustomerComp />  
          </tbody>         
        </table>
      </div>

      <div style={{width: "50%", float:'right'}}>
        <BuyProductComp/>
      </div>
    </div>
  );
} 

export default CustomersComp;
