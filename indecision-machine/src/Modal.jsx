import React from 'react'
import './Modal.css'

function Modal({selectedChoice, closeModal}) {
  return (
    <div className='modal'>
        <p>modal</p>
        <p>You should... {selectedChoice}!</p>
        <button onClick={() => closeModal(false)}>Okay</button>
    </div>
  )
}

export default Modal