import React, { PureComponent } from 'react'

class Purecomp extends PureComponent{
   constructor(props){
      super(props)
this.inputRef=React.createRef()
      
   }

   componentDidMount(){
      this.inputRef.current.focus()
      console.log(this.inputRef)
   }
clickhandler=()=>{
   alert(this.inputRef.current.value)
}

   render(){ return(<div>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.clickhandler}>click</button>
        </div>
    )
   }
}
export default Purecomp