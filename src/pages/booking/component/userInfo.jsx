import React, { useState } from 'react'

export default () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label>First Name</label>
          <input
            className='u-full-width'
            placeholder='First Name'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Email</label>
          <input
            className='u-full-width'
            placeholder='Email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Phone Number</label>
          <input
            className='u-full-width'
            placeholder='Phone Number'
            type='text'
            onChange={e => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}