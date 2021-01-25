import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './style.css'

const ButtonAdmin = () => {
    return (
        <div>
            <button className="btn btn-warning addField">Add Field <FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
}
export default ButtonAdmin