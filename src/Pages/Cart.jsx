import React,{useContext} from 'react'
import { UserContext } from '../Component/UserContext';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../Store/cartSlice';
export const Cart = () => {
  // const count = useContext(UserContext);
  // console.log(typeof(count));
  const items=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  const handleRemove=(id)=>{
dispatch(remove(id));
  }
  // console.log("mycartpage",items);
  return (
    <div>
      {/* {count} */}
      mycart page
{items.map((e,index)=>
<p key={index}>{e.category}
{e.price}
<img src={e.image} height='100px' widht='100px'></img> 
<button onClick={()=>handleRemove(e.id)}>Remove</button>
</p>)}

      </div>
  )
}
