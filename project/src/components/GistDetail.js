import React, { Component } from 'react';
import _ from 'lodash';

const GistDetail = ({ created_at, description, files, handleClickBack }) => (
  <div>
    <p><a href="#" onClick={handleClickBack}>&laquo; go back</a></p>
    <p>Date: {created_at}</p>
    <p>Description: {description}</p>
    <p>Files:</p>
    <ul>
      {_.map(files, (files, filename) => <li key={filename}>{filename}</li>)}
    </ul>
  </div>
);

export default GistDetail;
