import React from 'react';
import _ from 'lodash';
import FileDetail from '../FileDetail';

const GistDetail = ({
  created_at,
  description,
  files,
  handleClickBack,
  onClickFavorite,
  favorites,
}) => (
  <div>
    <p><button onClick={handleClickBack}>&laquo; go back</button></p>
    <p>Date: {created_at}</p>
    <p>Description: {description}</p>
    <p>Files:</p>
    <ul>
      {_.map(files, (file) => (
        <FileDetail
          favoriteLabel={_.some(favorites, { filename: file.filename }) ? 'unfavorite' : 'favorite'}
          onClickFavorite={onClickFavorite(file)}
          file={file}
          key={file.filename}
        />
      ))}
    </ul>
  </div>
);

export default GistDetail;
