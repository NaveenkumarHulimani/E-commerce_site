import React, { useState } from "react";

const Cartcontext=React.createContext();

const Carprovider=(props)=>{
    const [cartData,setCartData]=useState([]);
    const addcartData=(data)=>{
           setCartData([...cartData,data])
    }
    const removecartData=()=>{

    }
return (
    <Cartcontext.Provider value={{cartData,addcartData}}>
        {props.children}
    </Cartcontext.Provider>
)
}

export {Cartcontext,Carprovider}