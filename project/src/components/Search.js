import React from 'react';

const Search = ({ handleChange, username }) => (
  <input type="text" value={username} onChange={handleChange} />
);

export default Search;
