import React from 'react'
import './Modal.css'

function Modal({choices, selectedChoice, closeModal}) {
  return (
    <div className='modal'>
        <p>modal</p>
        <p>You should... {choices.map(choice => {
            if (choice.id === selectedChoice) {
                return choice.option
            }
        })}!</p>
        <button onClick={() => closeModal(false)}>Okay</button>
    </div>
  )
}

export default Modal