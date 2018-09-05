import React from 'react';

const FileDetail = ({ favoriteLabel, onClickFavorite, file}) => (
  <li>
    <p>{file.filename} <button onClick={onClickFavorite}>{favoriteLabel}</button></p>
    {file.content && <pre>{file.content}</pre>}
  </li>
);

export default FileDetail;
