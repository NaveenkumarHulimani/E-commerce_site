import React from 'react'

export const Item = ({image,title,description,price}) => {
  return (
    <section className='card'>
        <img className='card-image' src={image} alt=''/>
        <article className='card-title'>{title}</article>
        <article className='card-description'>{description}</article>
        <section className='card-footer'>
            <article className='price'>{price}</article>
            <button className='cart-button'>Add to cart</button>
        </section>
    </section>
  )
}
export default Item;