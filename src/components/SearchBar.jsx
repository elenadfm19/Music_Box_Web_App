import React, { useState } from "react";

function SearchBar({ setQuery }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="search"></label>
      <input
        id="search"
        name="search"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
