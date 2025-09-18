import { useState } from 'react'
import './App.css'

function App() {
  const [choices, setChoices] = useState(['tester'])
  const [selectedChoice, setSelectedChoice] = useState('')
  const [option, setOption] = useState('')
  const [availableID, setAvailableID] = useState(1)
  function addChoice() {
    if (option == '') {
      return
    }
    setChoices([...choices, {id: availableID, option: option}])
    setOption('')
    setAvailableID(availableID + 1)
  }

  function deleteChoice() {
    if (selectedChoice == '') {
      return
    }
    setChoices(choices.filter(o => o.id !== selectedChoice))
  }

  return (
    <>
    <div>
      <button>Decide</button>
      <div>
        <p>{selectedChoice}</p>
        <p>Choices</p>
        {choices.map(choice => (
          <p id={choice.id} onClick={() => setSelectedChoice(choice.id)}>{choice.option}</p>
        ))}
      </div>
      <div>
        <p>Option</p>
        <input type="text" value={option} onChange={e => setOption(e.target.value)} />
      </div>
      <button onClick={() => addChoice()}>Add</button>
      <button onClick={() => deleteChoice()}>Remove</button>
    </div>
    </>
  )
}

export default App
