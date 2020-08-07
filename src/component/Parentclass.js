import React from 'react'
import Child from './Childclass'
class parent extends React.Component{
     constructor(props){
         super(props)
         this.state={parantname:'parent'}
         this.greetparent=this.greetparent.bind(this)
        
     }
greetparent(childname){
    alert(`this is ${this.state.parantname} ${childname}`)
}


    render(){
        return (
        <div>
            <Child greethandler={this.greetparent}/>
        </div>
        )
    }
}
export default parent;