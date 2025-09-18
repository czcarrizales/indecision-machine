import { useState } from 'react'
import './App.css'

function App() {
  const [choices, setChoices] = useState([])

  function addChoice() {

  }

  return (
    <>
    <div>
      <button>Decide</button>
      <div>
        <p>Choices</p>
      </div>
      <div>
        <p>Option</p>
        <input type="text" />
      </div>
      <button>Add</button>
      <button>Remove</button>
    </div>
    </>
  )
}

export default App
