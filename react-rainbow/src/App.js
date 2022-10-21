import logo from './logo.svg';
import './App.css';


import React, { useState } from 'react'
import ColorBlock from './ColorBlock';

function App(){
    let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
    
    let colorMap = colors.map((color, i) => {
      return (
        <ColorBlock color={color} />
      )
    })
    return (
      <div className="App">
        {colors.map((color, i) => 
          <ColorBlock key= {color={color}} />
        
        )}

  {colorMap}
  </div>
  
    )
}


export default App;
