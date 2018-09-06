import React, { Component } from 'react';
import gists from '../../library';
import GistDetail from './GistDetail.component';

class GistDetailContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      files: props.files,
    };
  }
  componentDidMount () {
    // we already have the gist, but this hydrates it with more data, namely "files[].content"
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

export default GistDetailContainer;
