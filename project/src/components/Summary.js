import React, { Component } from 'react';

const SummaryItem = ({ date, description }) => (
  <div>
    <p>Date: {date}</p>
    <p>Description: {description}</p>
  </div>
);

const SummaryList = ({ gists }) => {
  if (!gists || !gists.length) {
    return null;
  }
  return (
    <div>
      {gists.map(({ created_at, description, id }) => (
        <SummaryItem
          date={created_at}
          description={description}
          key={id}
        />
      ))}
    </div>
  );
};

export default SummaryList;
