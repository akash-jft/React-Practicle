import React, { Component } from 'react'
import {Userconsumer} from './userContext'
class ContextB extends Component{
    render(){
        return(
            <Userconsumer>
               {
                   (username)=>{
                       return <h1>hello {username}</h1>
                   }
               }
            </Userconsumer>
        )
    }
}
export default ContextB