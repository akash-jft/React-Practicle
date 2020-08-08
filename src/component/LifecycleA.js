import React,{Component} from 'react'
import LifecycleB from './LifecycleB'
class LifecycleA extends Component{


    constructor(props){
        super(props)
        this.state={
            name:""
             }
      console.log("This is constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("this is derivedstatefromprops")
        return null
    }
componentDidMount(){
    console.log("this is component did mount")
}

shouldComponentUpdate(){
    console.log("this is component update");
    return true
}

getSnapshotBeforeUpdate(prevprop,nextprop){
console.log("snapshot");
return null
}

componentDidUpdate(){
    console.log("did mount")
}

check1=()=>{
    this.setState({
        name:"jjj"
    })
    console.log("hhh")
}

render(){
    console.log("this is render")
    return(
        <div> hi A 
            <button onClick={this.check1}>click</button>
        <LifecycleB/>
        </div>
    )
}


}
export default LifecycleA