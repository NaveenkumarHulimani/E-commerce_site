import React from "react";

const Carcontext=React.createContext();

const Carprovider=(props)=>{
return (
    <Carcontext.Provider>
        {props.children}
    </Carcontext.Provider>
)
}

export {Carcontext,Carprovider}