import React, { Component } from 'react'
import Updatecomponent from './withcounter'


class clickcounter extends Component{
 

render(){
    const {count,increament}=this.props
    return(
    
        <button onClick={increament}>{this.props.name} click {count} times</button>
        
    )
}
}
export default Updatecomponent(clickcounter)
