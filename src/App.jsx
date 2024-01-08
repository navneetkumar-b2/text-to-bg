import { useState } from "react";
function App() {
  let [color, setColor] = useState('cyan');
  let [txtclr, settxtclr] = useState('black');
  let showcolor=(n)=>{
    setColor(n)
    // alert(color)
  }
  let showTxtclr=(clr)=>{
    settxtclr(clr)
  }

  return (
    <>
      <h1  style={{backgroundColor : `${color}`,color:`${txtclr}`}}>Set My Background color and Text color</h1>
      <p>enter bg color here</p>
      <input type="text" placeholder="input color" value={color}
      onChange={(e)=>{showcolor(e.target.value)}}
      >
      </input>
      <br/>

        <p>enter text color here</p>
      <input type="text" placeholder="input color" value={txtclr}
      onChange={(e)=>{showTxtclr(e.target.value)}}
      >
      </input>
    </>
  );
}

export default App;
