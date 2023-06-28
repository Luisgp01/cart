import React from "react";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Payment() {
  return (
    <div className="iconSocial">
      <div>
        <FontAwesomeIcon className="icon" icon={faEnvelope} border />
      </div>
      <div>
        <FontAwesomeIcon className="icon" icon={faTwitter} border />
      </div>
      <div>
        <FontAwesomeIcon className="icon" icon={faInstagram} border />
      </div>
    </div>
  );
}
