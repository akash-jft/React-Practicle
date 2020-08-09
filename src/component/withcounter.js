import React from 'react'

const Updatedcomponent=(Originalcomponent)=>{
class newcomponent extends React.Component{
    constructor(props){
        super(props) 
        this.state={
            count:0
        }
     }
     increament=()=>{
      this.setState(prev=>{
         return {count:prev.count+1}
      })
     }
render(){
    return <Originalcomponent count={this.state.count} increament={this.increament} {...this.props}/>
}
}
return newcomponent 
}

export default Updatedcomponent