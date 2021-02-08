import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

const ModalTiket = (props) => {

    // const hide = props.hide;
    const [show, setShow] = useState(false);
    const toggleSHow = () => setShow(true);
    const toggleHide = () => setShow(false);

    return (
        <>
            <Button className="submit-data" variant='link' type='submit' onClick={toggleSHow()} style={{ textDecoration: 'none' }}>See eTiket</Button>
            <Modal
                show={show}
                onHide={toggleHide}>
                <Modal.Body>
                    <p>etiekt d sini</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalTiket;