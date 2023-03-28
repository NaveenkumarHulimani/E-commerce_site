import React from 'react'
import './header.css';
import { useContext } from 'react';
import { Cartcontext } from '../context/cart-context';

export const Header = () => {
  const {cartData}=useContext(Cartcontext);
   
  return (
    <>
    <nav className='nav-bar'>
        <section className='logo'>
            My game list
        </section>
        <section onClick={()=>{

        }}>
             <span>{cartData.length}</span>
            <i className='fa fa-shopping-cart'></i>
        </section>
    </nav>
    </>
  )
}
export default Header;