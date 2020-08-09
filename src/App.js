import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component/test'
import Parent from './component/Parentclass'
import Usergreting from './component/Usergreeting'
import Namelist from './component/namelist'
import Form from './component/form'
import LifecycleA from './component/LifecycleA'
import Fragment from './component/Fragment'
import Table from './component/Table'
import Purecomp from './component/Purecomp'
import Refrsdemo from './component/Refrsdemo'
import Portaldemo from './component/PortalDemo'
import Errorboundary from './component/Errorboundary'
import Errorboundaryclass from './component/Errorboundaryclass'
import Clickcounter from './component/clickcounter'
import Onmouseover from './component/onmouseover'
import ContextA from './component/contextA'
import {Userprovider} from './component/userContext'

function App() {
  return (
    <div className="App">
      {/* <Errorboundaryclass>
   <Errorboundary name="akash"/>
   </Errorboundaryclass>
   <Errorboundaryclass>
   <Errorboundary name="akashsharma"/>
   </Errorboundaryclass> */}

{/* <Clickcounter name="akash"/>
<Onmouseover name="sharma"/> */}
<Userprovider value="Akash">
<ContextA/> 
</Userprovider>

    </div>
  );
}

export default App;
