import React from "react";

const SearchLocation = () => {
  return (
    <div className="search-location">
      <h1>Find your next stay</h1>
      <p>Search deals on hotels, homes, and much more...</p>
      <form>
        <input type="text" placeholder="Where are you going?" />
        <input type="date" />
        <input placeholder="2 adults • 0 children • 1 room" />
        <button type="submit"> Search </button>
      </form>
    </div>
  );
};

export default SearchLocation;
