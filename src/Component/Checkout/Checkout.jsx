import React from "react";
import "../../index.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faCreditCard, faCalendarDays, faKey} from "@fortawesome/free-solid-svg-icons";

export default function Checkout() {
  return (
    <div>
      <h1 className="h1">Payment Details</h1>
      <br />
      <div>
        <h4>Email address</h4>
        <input type="text" name="Email Address" placeholder="Email Address" />
        <FontAwesomeIcon className="input-icon" icon={faEnvelopeOpen} />
      </div>
      <div>
        <h4>Credit Card Number</h4>
        <input
          type="text"
          name="Credit Details"
          placeholder="xxxx-xxxx-xxxx-xxxx"
        />
        <FontAwesomeIcon className="input-icon" icon={faCreditCard} />
      </div>
      <div>
        <h4>Expiry Date</h4>
        <select name="expireMM" className="expiryData">
          <option value="">Month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <FontAwesomeIcon className="input-icon" icon={faCalendarDays} />
        <select name="expireYY" className="expiryData">
          <option value="">Year</option>
          <option value="23">2023</option>
          <option value="24">2024</option>
          <option value="25">2025</option>
          <option value="26">2026</option>
          <option value="27">2027</option>
          <option value="28">2028</option>
        </select>
        <FontAwesomeIcon className="input-icon" icon={faCalendarDays} />
      </div>
      <div>
        <h4>CVV</h4>
        <input type="password" name="CVV" placeholder="***" />
        <FontAwesomeIcon className="input-icon" icon={faKey} />
      </div>
      <div>
        <input type="checkbox" name="promo" id="promo" /> I have promo!
        <hr className="hr" />
      </div>
      <br />
      <div>
        <Button />
      </div>
    </div>
  );
}
