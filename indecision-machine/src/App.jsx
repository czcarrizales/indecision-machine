import { useState } from 'react'
import './App.css'

function App() {
  const [choices, setChoices] = useState(['tester'])

  function addChoice() {
    setChoices([...choices, 'test'])
  }

  return (
    <>
    <div>
      <button>Decide</button>
      <div>
        <p>Choices</p>
        {choices}
      </div>
      <div>
        <p>Option</p>
        <input type="text" />
      </div>
      <button onClick={() => addChoice()}>Add</button>
      <button>Remove</button>
    </div>
    </>
  )
}

export default App
