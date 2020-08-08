import React,{Component} from 'react'

class LifecycleA extends Component{


    constructor(props){
        super(props)
        this.state={
            name:"",
             }
      console.log("This is constructor B")
    }

    static getDerivedStateFromProps(props,state){
        console.log("this is derivedstatefromprops B")
        return null
    }
componentDidMount(){
    console.log("this is component did mount B")
}

shouldComponentUpdate(){
    console.log("this is component update B");
    return true
}

getSnapshotBeforeUpdate(prevprop,nextprop){
console.log("snapshot B");
return null
}

componentDidUpdate(){
    console.log("did mount B")
}


render(){
    console.log("this is render B")
    return(
        <div> 
hi hi
        </div>
    )
}


}
export default LifecycleA