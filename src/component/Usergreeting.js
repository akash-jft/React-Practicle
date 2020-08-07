import React, { Component } from 'react'

class Usergreting extends Component{

    constructor(props){
        super(props)
        this.state={isLoggedin:false}
      
    }
    render(){

      return  this.state.isLoggedin && <div>this is kaash</div>
    //     if(this.state.isLoggedin){
    // return(
    //     <div>
    //        this is akash
    //     </div>
    // )}
    // else{
    //     return(
    //         <div>
    //             this guest
    //         </div>
    //     )
    // }
    }
    
}
export default Usergreting;