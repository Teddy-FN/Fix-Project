import React, { useRef } from 'react'
// Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons';
// Print To PDF
import { useReactToPrint } from 'react-to-print';
import ComponentToPrint from './ComponentToPrint'
// import ModalBooking from '../../fieldDetail/modalBooking'
import './style.css'

const Success = (props) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div>
            <ComponentToPrint
                ref={componentRef}
                id={props.id}
                fullname={props.fullname}
                field={props.field}
                date={props.date}
                timeslot={props.timeslot}
                price={props.price}
            />
            <br/>
            <br/>
            <button onClick={handlePrint} className="print-button btn btn-link">Print this out! <FontAwesomeIcon icon={faPrint} /></button>
        </div>
    );
};
export default Success