import React from "react";

function UserInfo(props) {
  return (
      <>
    <div>
      <p>Name: <input name="name" value={props.getState('name')} onChange={props.handleChange} /></p>
      <p>Phone Number: <input name="phoneNumber" value={props.getState('phoneNumber')} onChange={props.handleChange} /></p>
    </div>
    <div>
    <button disabled={props.isFirst()} onClick={props.prev}>Previous</button>
    {props.hasNext() && <button onClick={props.next}>Next</button>}
    </div>
    </>
  );
}

export default UserInfo