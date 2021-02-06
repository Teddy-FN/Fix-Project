import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

// Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons';
// Print To PDF
import { useReactToPrint } from 'react-to-print';

export class ComponentToPrint extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                fullname: '',
                email: '',
            }
        }
    }

    render() {
        return (
            <div>
                <p>Hello</p>
                <h3> Thank You For Your Order</h3>
                <p>Here's A detail :</p>
                <hr />
                <p>Deatail Reservation :</p>
                <p>Full Name : </p>
                <p>Email : </p>
                <p>Phone Number : </p>
                <p>Time : </p>
                <p>Field Name :</p>
                <p>Location : </p>
            </div>
        );
    }
}

const Success = (props) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const user = useSelector((state) => state.profileUser.data);
    console.log('DETAIL USER FROM BOOKING', user)
    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <button onClick={handlePrint} className="btn btn-success">Print this out! <FontAwesomeIcon icon={faPrint} /></button>
        </div>
    );
};
export default Success 