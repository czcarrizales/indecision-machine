import { useState } from 'react'
import './App.css'
import Modal from './Modal'

function App() {
  const [choices, setChoices] = useState([])
  const [selectedChoice, setSelectedChoice] = useState('')
  const [option, setOption] = useState('')
  const [availableID, setAvailableID] = useState(1)
  const [openModal, setOpenModal] = useState(false)
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
    setSelectedChoice('')
  }

  function decideChoice() {
    if (selectedChoice == '') {
      return
    }
    setOpenModal(true)
  }

  return (
    <>
    <div>
      <button onClick={() => decideChoice()}>Decide</button>
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
    {openModal && <Modal selectedChoice={selectedChoice} closeModal={setOpenModal} />}
    </>
  )
}

export default App
