import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleChange, username }) => (
  <input type="text" value={username} onChange={handleChange} />
);

Search.propTypes = {
  handleChange: PropTypes.func,
  username: PropTypes.string,
};

export default Search;
