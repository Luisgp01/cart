import React from 'react'
import '../../index.css'

export default function Button() {
  return (
    <div>
      <h5 className="h5">Subtotal</h5>
      <p className="p">€96</p>
      <h5 className="h5">Platform fee</h5>
      <p className="p">€4</p>
      <hr className="hr" />
      <h5 className="h5">Total Amount</h5>
      <p className="p">€100</p>
      <div>
        <button type="button" name="Payment" className="btn">
          <p className='p'>Make Payment</p>
        </button>
      </div>
    </div>
  );
}
