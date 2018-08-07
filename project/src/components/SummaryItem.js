import React from 'react';
import './SummaryItem.css';

const onClick = (id, cb) => (event) => {
  event.preventDefault();
  cb(id);
};

const SummaryItem = ({ id, date, description, handleClick }) => (
  <li className="summary-item" onClick={onClick(id, handleClick)}>
    <p>Date: {date}</p>
    <p>Description: {description}</p>
    <p><a href="#">View Details</a></p>
  </li>
);

export default SummaryItem;
