import React, { useContext } from 'react'
import { Cartcontext } from '../context/cart-context';

export const Item = ({item}) => {
  const {addcartData}=useContext(Cartcontext);
  return (
    <>
    <section className='card'>
        <img className='card-image' src={item?.image} alt='game'/>
        <article className='card-title'>{item.title}</article>
        <article className='card-description'>{item.description}</article>
        <section className='card-footer'>
            <article className='price'>{item.price}</article>
            <button className='cart-button' onClick={()=>
             
              {addcartData(item)}
          
            }>Add to cart</button>
        </section>
    </section>
    </>
    
  )
}
export default Item;