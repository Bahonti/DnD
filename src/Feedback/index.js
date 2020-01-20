import React from 'react'
import './feedback.css'

const Feedback = (isOpen, onCancel,onSubmit,children) => {
    return(
        <div className="feedback-main">
            <h3>Новости</h3>
            <p></p>
            <div className="feedback-modal">
                <textarea/>
                <button onClick={onSubmit}>Сохранить</button>
            </div>
        </div>
    )
}

export default Feedback