import React from 'react'


function Errorboundary({name}){
    if(name==="akash"){
throw new Error("this is not name")
    }
    return(
      <h1>{name}</h1>
    )
    
}
export default Errorboundary