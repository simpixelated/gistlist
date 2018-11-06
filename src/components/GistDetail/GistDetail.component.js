import React from 'react';
import PropTypes from 'prop-types';
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

GistDetail.propTypes = {
  created_at: PropTypes.string,
  description: PropTypes.string,
  files: PropTypes.object,
  handleClickBack: PropTypes.func,
  onClickFavorite: PropTypes.func,
  favorites: PropTypes.array,
};

export default GistDetail;
