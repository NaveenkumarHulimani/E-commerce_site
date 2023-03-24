import React from 'react'
import './header.css';
export const Header = () => {
  return (
    <>
    <nav className='nav-bar'>
        <section className='logo'>
            My game list
        </section>
        <section>
            <i className='fa fa-shopping-cart'></i>
        </section>
    </nav>
    </>
  )
}
export default Header;