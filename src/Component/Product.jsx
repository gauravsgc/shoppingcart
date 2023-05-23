import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './style/Product.css'
//
import { add } from '../Store/cartSlice'
import { useDispatch } from 'react-redux'
export const Product = () =>
 {
   //
   const dispatch=useDispatch();
 const [data, setData] = useState([]);
useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products`).then((res)=>{
console.log(res.data);
setData(res.data);
  }).catch(err=>{
    console.log(err);
  })
},[])

const productAdd=(product)=>{
dispatch(add(product))
}
 return (
    <div className='container'>
{data.map(info=>
<div className='item' key={info.id}>
<img src={info.image} width='100' height='100'></img>
<p>{info.category}</p>
<p>{info.title}</p>
<p>{info.price}</p>

<button onClick={()=>productAdd(info)}>addtocart</button>
</div>
)
}    
     </div> 
  )
}
