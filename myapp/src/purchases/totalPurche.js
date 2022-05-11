
import { useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';

function TotalPurcheComp() {
const storeData=useSelector(state=>state)
const [total,setTotal]=useState(0)
useEffect(()=>
{
 let tot=storeData.purchases.length
 setTotal(tot)
},[storeData.purchases.length])

const prnt=()=>{
console.log(storeData)
}

  return (
    <div style={{border:"2px",borderStyle:'solid',borderColor:'green'}}>
        <h3>total products purched :</h3>
         Total:{total}<br/>
         <input type={'button'} value={"check"} onClick={prnt}/>
    </div>
  );
}

export default TotalPurcheComp;
