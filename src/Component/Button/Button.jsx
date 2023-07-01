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
       <button type="button" className="text-white btnStyle focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Payment</button>
      </div>
    </div>
  );
}
