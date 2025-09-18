import { useState } from 'react'
import './App.css'

function App() {
  const [choices, setChoices] = useState(['tester'])
  const [option, setOption] = useState('')
  function addChoice() {
    if (option == '') {
      return
    }
    setChoices([...choices, option])
    setOption('')
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
        <input type="text" value={option} onChange={e => setOption(e.target.value)} />
      </div>
      <button onClick={() => addChoice()}>Add</button>
      <button>Remove</button>
    </div>
    </>
  )
}

export default App
