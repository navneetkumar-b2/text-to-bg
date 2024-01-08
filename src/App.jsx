import { useState } from "react";

function App() {
  let [color, setColor] = useState('cyan');
  let showcolor=(n)=>{
    setColor(n)
    // alert(color)
  }
  return (
    <>
      <h1  style={{backgroundColor : `${color}`}}>Set My Background color and Text color</h1>
      <h2>text to background</h2>
      <input type="text" placeholder="input color" value={color}
      onChange={(e)=>{showcolor(e.target.value)}}
      >
      </input>
    </>
  );
}

export default App;
