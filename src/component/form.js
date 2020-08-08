import React, { Component } from 'react'

class Formclass extends Component{


    constructor(props){
        super(props)
        this.state={
            name:"",
            comment:"",
            city:"Delhi"
    }
      
    }

    usernamechange=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    commentchange=(event)=>{
        this.setState({
            comment: event.target.value
        })
    }
    citychange=(event)=>{
        this.setState({
            city: event.target.value
        })
    }

    check=(event)=>{
     alert(`${this.state.name} ${this.state.comment} ${this.state.city}`)
     event.preventDefault()
    }

    render(){
    return(<form>
        <div>
          <label>Username</label>
          <input type="text" 
          value={this.state.name}
          onChange={this.usernamechange}
          />
        </div>
        <div>
            <label>Comment</label>
            <textarea value={this.state.comment} onChange={this.commentchange}></textarea>
        </div>
        <div>
            <label>City</label>
            <select value={this.state.city} onChange={this.citychange}>
                <option value="Delhi">Delhi</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Mumbai">Mumbai</option>
            </select>
        </div>
        <button onClick={this.check} type="submit">Submit</button>
        </form>
    )
    }
}
export default Formclass;