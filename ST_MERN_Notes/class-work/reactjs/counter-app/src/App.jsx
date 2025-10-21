import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount((previousCount) => (previousCount + 1)) // ()=>(), ()=>{ return ... }
  }

  function decrement(){
    setCount((previousCount) => (previousCount - 1))
  }

  return (
    <> fragment 
    {
      count ? <p>{count}</p> : <p>No Data</p>
    }
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App
