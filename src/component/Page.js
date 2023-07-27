import React, { useState } from 'react';
import { increment, decrement, save } from './Dynamic';
function Page() {
  // Define the state variables and their setter functions using React's useState hook
  const [count, setCount] = useState(0);
  const [previousEntries, setPreviousEntries] = useState('');

  return (
    <div className="container">
      <h1>People Entered:</h1>
      <h2 className="count-el">{count}</h2>
      
      {/* Use the dynamic functions with the state variables and setter functions */}
      <button className="increment-btn" onClick={() => increment(count, setCount)}>INCREMENT</button>
      <button className="decrement-btn" onClick={() => decrement(count, setCount)}>DECREMENT</button>
      <button className="save-btn" onClick={() => save(count, setCount, setPreviousEntries)}>SAVE</button>
      
      <p className="save">Previous entries: {previousEntries}</p>
      <div className="current-time"></div>
    </div>
  );
}

export default Page;
