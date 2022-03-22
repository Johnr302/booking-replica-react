import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="inner-container">
          <h1>Booking.com</h1>
          <div>
            <button id="currency">USD</button>
            <button className="circle" id="language">
              Language
            </button>
            <button className="circle" id="customerService">
              ?
            </button>
            <a href="" id="listProperty">
              List your property
            </a>
            <a href="" className="white-BG" id="register">
              Register
            </a>
            <a href="" className="white-BG" id="signIn">
              Sign in
            </a>
          </div>
        </div>
      </div>
      <div className="button-options-container">
        <button className="active">Stays</button>
        <button>Flights</button>
        <button>Flight + Hotel</button>
        <button>Car rentals</button>
        <button>Attractions</button>
        <button>Airport taxis</button>
      </div>
    </header>
  );
};

export default Header;
