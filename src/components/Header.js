import React from "react";

const Header = () => {
  return (
    <header>
      <div className="one">
        <h1>Booking.com</h1>
        <button> USD </button>
        <button> Language </button>
        <a href="" id="listProperty">
          List your property
        </a>
        <a href="" id="register">
          Register
        </a>
        <a href="" id="signIn">
          Sign in
        </a>
      </div>
      <div>
        <button>Stays</button>
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
