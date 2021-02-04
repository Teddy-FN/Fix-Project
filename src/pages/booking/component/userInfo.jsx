import React from "react";
import { Button } from 'react-bootstrap'

function UserInfo(props) {
  return (
      <>
    <div>
      <p>Name: <input name="name" value={props.getState('name')} onChange={props.handleChange} /></p>
      <p>Phone Number: <input name="phoneNumber" value={props.getState('phoneNumber')} onChange={props.handleChange} /></p>
    </div>
    <div>
    <Button variant="link" disabled={props.isFirst()} onClick={props.prev} style={{textDecoration: 'none'}}>Previous</Button>
    {props.hasNext() && <Button variant="link" onClick={props.next}style={{textDecoration: 'none'}}>Next</Button>}
    </div>
    </>
  );
}

export default UserInfo