import React from 'react'
import Persion from './Persion'
function Nameclass(){
    const name=[{
        name:"akash",
        age:23
    }]

    const nn=name.map(name=><Persion name={name}/>)
    return(
        <div>
            {nn}
        </div>
    )
}
export default Nameclass;