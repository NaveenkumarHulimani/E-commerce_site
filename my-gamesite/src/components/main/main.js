import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../header/header';
import Item from '../item/item';

export const Main = () => {
    const [Oldschool,setOldschool]=useState([]);
    const [Bestseller,setBestseller]=useState([]);
   
    useEffect(()=>{
     axios.get("http://localhost:1337/api/best-sellers").then((Bestseller)=>{
            setBestseller(Bestseller.data.data);
            
     }).catch(()=>{

     }).finally(()=>{

     });
     axios.get("http://localhost:1337/api/old-schools").then((Oldschool)=>{
        setOldschool(Oldschool.data.data)
     }).catch(()=>{

     }).finally(()=>{

     });
    },[])
  return (
    <>
     <Header/>
     <section>
         <article>Best sellers</article>
         {Bestseller.map((item,key)=>{
              return <Item title={item.attributes.title} description={item.attributes.description} price={item.attributes.price}/>
         })}
         <article>Old school</article>
         {Oldschool.map((item,key)=>{
              return <Item title={item.attributes.title} description={item.attributes.description} price={item.attributes.price}/>
         })}
     </section>
    </>
   
  )
}

export default Main;
