import React from 'react';
import PropTypes from 'prop-types';

const FileDetail = ({ favoriteLabel, onClickFavorite, file }) => (
  <li>
    <p>{file.filename} <button onClick={onClickFavorite}>{favoriteLabel}</button></p>
    {file.content && <pre>{file.content}</pre>}
  </li>
);

FileDetail.propTypes = {
  favoriteLabel: PropTypes.string,
  onClickFavorite: PropTypes.func,
  file: PropTypes.object,
};

export default FileDetail;
