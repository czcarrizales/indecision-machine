import React from 'react'
import './Modal.css'

function Modal({ option, choices, selectedChoice, closeModal }) {
    return (
        <div className='modal'>
            {
                selectedChoice == ''
                    ?
                    <p>You must select an option to delete!</p>
                    :
                    <p>You should: {choices.map(choice => {
                        if (choice.id === selectedChoice) {
                            return choice.option
                        }
                    })}</p>
            }
            <button className='modal-button' onClick={() => closeModal(false)}>Okay</button>
        </div>
    )
}

export default Modal