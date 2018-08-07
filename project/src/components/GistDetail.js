import React, { Component } from 'react';
import _ from 'lodash';
import gists from '../library';
import FileDetail from './FileDetail';

class GistDetailContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      files: props.files,
    };
  }
  componentDidMount () {
    gists.getGistById(this.props.id)
      .then(gist => this.setState({ files: gist.files }));
  }

  handleClickFavorite = (file) => (event) => {
    event.preventDefault();
    this.props.handleClickFavorite(file);
  }

  render () {
    return (<GistDetail {...this.props} files={this.state.files} onClickFavorite={this.handleClickFavorite} />);
  }
}

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

export default GistDetailContainer;
