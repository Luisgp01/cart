import React from 'react'
import '../../index.css'

export default function Form() {
  return (
    <div className='form'>
          <h1 className='h1'>Buyer Information</h1>
          <br />
      <div>
        <input type="text" name="First Name" placeholder="First Name" />
      </div>
      <div>
        <input type="text" name="Last Name" placeholder="Last Name" />
      </div>
      <div>
        <input type="text" name="Address" placeholder="Address" />
      </div>
      <div>
        <input type="text" name="Phone Number" placeholder="Phone Number" />
      </div>
    </div>
  );
}
