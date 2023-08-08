import React, { useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const descrementCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Counter 🚀</h1>
      <p>Counter : {counter}</p>
      <button onClick={incrementCounter}>Incrémenter</button>
      <button onClick={descrementCounter}>Décrémenter</button>
    </div>
  )
}

export default Counter 
