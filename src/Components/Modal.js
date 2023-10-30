import React from 'react'

function Modal() {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button> X </button>
            <div className='title'>
                <h1>Are you sure you want to continue</h1>
            </div>
            <div className='body'></div>
            <div className='footer'></div>
        </div>
    </div>
  )
}

export default Modal