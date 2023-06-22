import React from "react";
import "../../index.css";

export default function Checkout() {
  return (
    <div className="row">
      <div className="col-75">
        <div className="container">
          <form action="/">
            <div className="row">
              <div className="col-50">
                <h3>Billing Address</h3>
                <label htmlFor="fname">
                  <i className="fa-solid fa-user"></i>
                  Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="First Name"
                />
                <label htmlFor="email">
                  <i className="fa-solid fa-envelope"></i>
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                />
                <label htmlFor="adr">
                  <i className="fa-solid fa-house"></i>
                  Address
                </label>
                <input
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="Address"
                />
                <label htmlFor="city">
                  <i className="fa-solid fa-city"></i>
                  City
                </label>
                <input type="text" id="city" name="city" placeholder="Madrid" />

                <div className="row">
                  <div className="col-50">
                    <label htmlFor="Provincia"></label>
                    <input
                      type="text"
                      id="provincia"
                      name="provincia"
                      placeholder="Madrid"
                    />
                  </div>
                  <div className="col-50">
                    <label htmlFor="zip">Zip Code</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="00000"
                    />
                  </div>
                </div>
              </div>
              <div className="col-50">
                <h3>Payment</h3>
                <label htmlFor="fname">Accepted Cards</label>
                <div className="icon-container">
                  <i className="fa-brands fa-cc-visa"></i>
                  <i className="fa-brands fa-cc-mastercard"></i>
                  <i className="fa-brands fa-cc-amex"></i>
                  <i className="fa-brands fa-cc-discover"></i>
                </div>
                <label for="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                />
                <label for="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="0000-0000-0000-0000"
                />
                <label for="expmonth">Exp Month</label>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="December"
                />
                <div className="row">
                  <div className="col-50">
                    <label htmlFor="expyear">Exp Year</label>
                    <input
                      type="password"
                      id="cvv"
                      name="cvv"
                      placeholder="333"
                    />
                  </div>
                </div>
              </div>
            </div>
            <label>
              <input type="checkbox" checked="checked" name="sameadr" />
              Shipping address same as billing
            </label>
            <button type="Submit" value="Checkout" className="btn">Checkout</button>
          </form>
        </div>
      </div>
      <div className="col-25">
        <div className="cotainer">
          <h4>
            Shop Cart
            <span className="price">
              <i class="fa-solid fa-cart-shopping"></i>
              <b>2</b>
            </span>
          </h4>
          <p>
            <a href="/">Product 1</a> <span className="price">€15</span>
          </p>
          <p>
            <a href="/">Product 2</a> <span className="price">€5</span>
          </p>
          <hr />
          <p>
            Total
            <span className="price">
              <b>€20</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
