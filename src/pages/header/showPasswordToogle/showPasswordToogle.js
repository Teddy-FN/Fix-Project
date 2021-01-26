import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ShowPasswordToogle = () => {
    const [visible, setVisible] = useState(false)
    const icon = (
        <FontAwesomeIcon icon={visible ? faEye : faEyeSlash}
            onClick={() => setVisible(visiblity => !visiblity)}
        />
    )

    const textInput = visible ? 'text' : 'password';

    return [textInput, icon]
}

export default ShowPasswordToogle