import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../header/header';

export const Main = () => {
    const [Oldschool,setOldschool]=useState([]);
    const [Bestseller,setBestseller]=useState([]);
    console.log(Bestseller)
    console.log(Oldschool)
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
    </>
   
  )
}

export default Main;
