import React, { useState } from 'react';
import Upperheader from './components/upperheader.jsx'
import Mainheader from './components/Mainheader.jsx';
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

function App() {
 

  return (
    <div >
      <Upperheader/>
      <Mainheader/>
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;