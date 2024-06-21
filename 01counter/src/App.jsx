import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const changeCount = (num) => {
    setCount(count + num);
  }

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>

      <button onClick={() => {changeCount(1)}}>Add</button>
      <br />
      <button onClick={() => {changeCount(-1)}}>Subtract</button>
    </>
  )
}

export default App
