// Dynamic.js

// Define the functions and export them to be used in Page.js
export function increment(currentCount, setCount) {
    setCount(currentCount + 1);
  }
  
  export function decrement(currentCount, setCount) {
    setCount(currentCount - 1);
  }
  
  export function save(currentCount, setCount, setPreviousEntries) {
    const countStr = currentCount + " - ";
    setPreviousEntries(prevEntries => prevEntries + countStr);
    setCount(0);
  }
  