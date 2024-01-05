import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(1);

  const onChange2 = (ee) => {
    setCount(Number(ee.target.value));
  };

  const onChange = (e) => {
    setNewCount(Number(e.target.value));
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{count}</h1>
        <div>
          <button onClick={() => setCount(count - newCount)}>Down</button>
          <button onClick={() => setCount(count + newCount)}>Up</button>
        </div>

      <div className='flexbox'>
        <div>
          <input type='number' placeholder='시작숫자' onChange={onChange2}></input>
        </div>
        <div>
          <input type='number' placeholder='단위' onChange={onChange}></input>
        </div>
      </div>
    </div>
  );

}

export default App;
