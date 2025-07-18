import React, { useState } from 'react';
import Upperheader from './components/upperheader.jsx'
import Mainheader from './components/Mainheader.jsx';
function App() {
  const [color, setColor] = useState('black');

  return (
    <div >
      <Upperheader/>
      <Mainheader/>
    </div>
  );
}

export default App;