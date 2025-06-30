import React, { useState } from 'react';
import Buttons from './components/Button.jsx';

function App() {
  const [color, setColor] = useState('black');

  return (
    <div className='w-full h-screen flex justify-center' style={{ backgroundColor: color }}>
      {/* Button container */}
      <div className='fixed flex flex-wrap justify-center w-full bottom-12 inset-x-0 p-2'>
        <div className='flex bg-white p-2 rounded-full gap-2'>
          {/* Pass the correct color string to each onClick */}
          <Buttons text="red" bgcolor="red" onClick={() => setColor('red')} />
          <Buttons text="blue" bgcolor="blue" onClick={() => setColor('blue')} />
          <Buttons text="yellow" bgcolor="yellow" onClick={() => setColor('yellow')} />
          <Buttons text="green" bgcolor="green" onClick={() => setColor('green')} />
          <Buttons text="violet" bgcolor="violet" onClick={() => setColor('violet')} />¸
          <Buttons text="pink" bgcolor="pink" onClick={() => setColor('pink')} />
          <Buttons text="orange" bgcolor="orange" onClick={() => setColor('orange')} />
          <Buttons text="cyan" bgcolor="cyan" onClick={() => setColor('cyan')} />
          <Buttons text="gold" bgcolor="gold" onClick={() => setColor('gold')} />
          <Buttons text="silver" bgcolor="silver" onClick={() => setColor('silver')} />
          <Buttons text="skyblue" bgcolor="skyblue" onClick={() => setColor('skyblue')} />
          <Buttons text="lime" bgcolor="lime" onClick={() => setColor('lime')} />
          <Buttons text="purple" bgcolor="purple" onClick={() => setColor('purple')} />
        </div>
      </div>
    </div>
  );
}

export default App;