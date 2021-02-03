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
    <Button variant="link" disabled={props.isFirst()} onClick={props.prev}>Previous</Button>
    {props.hasNext() && <Button variant="link" onClick={props.next}>Next</Button>}
    </div>
    </>
  );
}

export default UserInfo