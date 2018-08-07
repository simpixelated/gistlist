import React from 'react';

const onClick = (id, cb) => (event) => {
  event.preventDefault();
  cb(id);
};

const SummaryItem = ({ id, date, description, handleClick }) => (
  <li>
    <p>Date: {date}</p>
    <p>Description: {description}</p>
    <p><a href="#" onClick={onClick(id, handleClick)}>View Details</a></p>
  </li>
);

export default SummaryItem;
