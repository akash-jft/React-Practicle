import React, { Component } from 'react'
import Updatecomponent from './withcounter'


class clickcounter extends Component{


render(){
    const {count,increament}=this.props
    return(
    
        <h1 onMouseOver={increament}>{this.props.name} Mouse drag here {count} times</h1>
        
    )
}
}
export default Updatecomponent(clickcounter)
