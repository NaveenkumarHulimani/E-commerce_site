import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Main = () => {
    const [Oldschool,setOldschool]=useState([]);
    const [Bestseller,setBestseller]=useState([]);
    useEffect(()=>{
     axios.get("http://localhost:1337/api/best-sellers").then((Bestseller)=>{
            setBestseller(Bestseller.data.data)
     }).catch(()=>{

     }).finally(()=>{

     });
     axios.get("http://localhost:1337/api/old-schools").then((Oldschool)=>{
        setBestseller(Oldschool.data.data)
     }).catch(()=>{

     }).finally(()=>{

     });
    },[])
  return (
    <div>M</div>
  )
}
export default Main;
