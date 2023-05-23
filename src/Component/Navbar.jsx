import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import  './style/Navbar.css';
//...
import { useSelector } from 'react-redux';
//import { UserContext } from './UserContext'
export const Navbar = () => {
  const items=useSelector((state)=>state.cart);
  // console.log(items);
  //const count = useContext(UserContext);
  // console.log(typeof(count));
  return (
    <div className='header'>
        <span>Shopping site</span>
        <div className='nav'>
            <Link to='/' activeclassname='mymenu'>Home</Link>
            <Link to='/cart' activeclassname='mymenu'>cart</Link>
            <span>cart items:
             {items.length}</span>
        </div>
    </div>
  )
}
