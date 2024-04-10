import { useState } from 'react';
import Square from './Component/Square';
import Input from './Component/Input';
import './App.css';

function App() {
  const [color, setcolor] = useState('blue');
  const [hexColor, setHexColor] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <Square 
          color = {color}
          hexcolor = {hexColor} />
        <Input 
          color = {color}
          setcolor = {setcolor}
          setHexColor = {setHexColor} />
      </header>
    </div>
  );
}

export default App;
