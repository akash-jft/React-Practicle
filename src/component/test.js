import React from 'react'

class hello extends React.Component{
     constructor(props){
         super(props)
         this.state={msg:'yy'}
        //  this.chan=this.chan.bind(this)
     }
 chan=()=>{
this.setState({
    msg:'aa'
})
}

    render(){
        return (
        <div><div>{this.state.msg}</div>
            {/* <button onClick={this.chan.bind(this)}>click</button> */}
            {/* <button onClick={()=>{this.chan()}}>click</button> */}
            <button onClick={this.chan}>click</button>
        </div>
        )
    }
}
export default hello;