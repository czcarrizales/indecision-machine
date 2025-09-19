import { useState } from 'react'
import './App.css'
import Modal from './Modal'

function App() {
  const [choices, setChoices] = useState([{ id: 1908743, option: 'Test.' }, { id: 2572374, option: 'Doing this and that and this and that and even more of anything and more and more and whatever and all this.' }, { id: 1903, option: 'That thing and that other thing.' },])
  const [selectedChoice, setSelectedChoice] = useState('')
  const [option, setOption] = useState('')
  const [availableID, setAvailableID] = useState(1)
  const [openModal, setOpenModal] = useState(false)
  function addChoice() {
    if (option == '') {
      return
    }
    setChoices([...choices, { id: availableID, option: option }])
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
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setSelectedChoice(randomChoice.id)
    setOpenModal(true)
  }

  return (
    <>
        <div className='app-container'>
          <button className='decide-button' onClick={() => decideChoice()}>Decide</button>
          <div className='choice-list-container'>
            <p className='choice-list-title'>Choices</p>
            <div className='choice-list'>
              {choices.map(choice => (
                <p className={choice.id === selectedChoice ? 'choice choice-selected' : 'choice'} id={choice.id} onClick={() => setSelectedChoice(choice.id)}>{choice.option}</p>
              ))}
            </div>

          </div>
          <div className='command-list-container'>
            <div className='option-input-container'>
              <p>Option:</p>
              <input className='option-input' type="text" value={option} placeholder='Type a task here!' onChange={e => setOption(e.target.value)} />
            </div>
            <button className='add-button' onClick={() => addChoice()}>Add</button>
            <button className='remove-button' onClick={() => deleteChoice()}>Remove</button>
          </div>
        </div>

      {openModal && <Modal choices={choices} selectedChoice={selectedChoice} closeModal={setOpenModal} />}
    </>
  )
}

export default App
