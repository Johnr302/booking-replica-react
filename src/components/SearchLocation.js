import React from "react";

const SearchLocation = () => {
  return (
    <div className="search-location">
      <div className="search-location-text-container">
        <h1>Find your next stay</h1>
        <p>Search deals on hotels, homes, and much more...</p>
      </div>
      <form>
        <input
          type="text"
          className="search-form-item"
          placeholder="Where are you going?"
        />
        <input type="date" className="search-form-item" />
        <input
          className="search-form-item"
          placeholder="2 adults • 0 children • 1 room"
        />
        <button type="submit" className="search search-form-item">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchLocation;
