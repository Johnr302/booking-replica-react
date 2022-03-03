import React from "react";

const SearchLocation = () => {
  return (
    <form>
      <input type="text" placeholder="Where are you going?" />
      <input type="date" />
      <input placeholder="2 adults • 0 children • 1 room" />
      <button type="submit"> Search </button>
    </form>
  );
};

export default SearchLocation;
