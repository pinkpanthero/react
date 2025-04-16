import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>React Counter App</h1>
      <div className="counter">
        <h2>{count}</h2>
        <div className="buttons">
          <button onClick={() => setCount(count - 1)}>Decrease</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
      </div>
    </div>
  );
}

export default App;
