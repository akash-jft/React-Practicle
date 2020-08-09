import React from 'react'
import ReactDom from 'react-dom'

function Portal(){
    return ReactDom.createPortal(
      <h1>hhhh</h1>,
      document.getElementById('portal-root')
    )
}
export default Portal