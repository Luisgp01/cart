import React from "react";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  return (
    <div className="form">
      <h1 className="h1">Buyer Information</h1>
      <br />
      <div>
        <input type="text" name="First Name" placeholder="First Name" />
        <FontAwesomeIcon className="input-icon" icon={faUser} />
      </div>
      <div>
        <input type="text" name="Last Name" placeholder="Last Name" />
        <FontAwesomeIcon className="input-icon" icon={faUser} />
      </div>
      <div>
        <input type="text" name="Address" placeholder="Address" />
        <FontAwesomeIcon className="input-icon" icon={faLocationDot} />
      </div>
      <div>
        <input type="text" name="Phone Number" placeholder="Phone Number" />
        <FontAwesomeIcon className="input-icon" icon={faMobileScreen} />
      </div>
    </div>
  );
}
