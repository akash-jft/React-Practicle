import React from 'react'

function Childclass(props){
    return(
        <div>
            <button onClick={()=>props.greethandler("child")}>parent buuton</button>
        </div>
    )
}
export default Childclass;